const CONTACT_FROM = 'Elevation Aviation <info@hostverna.co>';
const CONTACT_TO = 'ian@elevationflight.com';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fieldRow(label, value) {
  const safe = escapeHtml(value);
  if (!safe) return '';
  return `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#374151;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 0;color:#111827">${safe}</td></tr>`;
}

function firstName(fullName) {
  const part = String(fullName ?? '').trim().split(/\s+/)[0];
  return part || 'there';
}

function confirmationHtml(name, preferredContact) {
  const greeting = escapeHtml(firstName(name));
  const method = escapeHtml(String(preferredContact ?? '').toLowerCase() || 'your preferred method');
  return `
    <p style="font-family:system-ui,sans-serif;font-size:15px;color:#111827;margin:0 0 16px">Hi ${greeting},</p>
    <p style="font-family:system-ui,sans-serif;font-size:15px;color:#111827;line-height:1.6;margin:0 0 16px">
      Thank you for contacting Elevation Aviation. We received your information request and will follow up by ${method} as soon as we can.
    </p>
    <p style="font-family:system-ui,sans-serif;font-size:15px;color:#111827;line-height:1.6;margin:0 0 16px">
      If you need something sooner, call our office at <strong>571-657-3847</strong> (Mon–Sun, 8:00am–6:00pm) or after hours at <strong>703-625-3517</strong>.
    </p>
    <p style="font-family:system-ui,sans-serif;font-size:14px;color:#6b7280;margin:24px 0 0">
      Elevation Aviation · Manassas Regional Airport
    </p>
  `.trim();
}

async function sendResendEmail(apiKey, payload) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const text = await res.text();
    return { ok: false, status: res.status, text };
  }

  return { ok: true };
}

async function verifyTurnstile(token, secret, remoteip) {
  const body = new URLSearchParams({ secret, response: token });
  if (remoteip) body.set('remoteip', remoteip);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });

  if (!res.ok) return false;
  const data = await res.json();
  return data.success === true;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const turnstileSecret = env.turnstile_secret_key;
  const resendApiKey = env.resend_api_key;

  if (!turnstileSecret || !resendApiKey) {
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const {
    name,
    preferredDate,
    trainingLevel,
    additionalQuestions,
    preferredContact,
    email,
    phone,
    turnstileToken
  } = payload ?? {};

  if (!turnstileToken || typeof turnstileToken !== 'string') {
    return new Response(JSON.stringify({ error: 'Security verification required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const clientIp = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For');
  const turnstileOk = await verifyTurnstile(turnstileToken, turnstileSecret, clientIp);
  if (!turnstileOk) {
    return new Response(JSON.stringify({ error: 'Security verification failed. Please try again.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const trimmedName = String(name ?? '').trim();
  const trimmedTraining = String(trainingLevel ?? '').trim();
  const trimmedPreferred = String(preferredContact ?? '').trim();
  const trimmedEmail = String(email ?? '').trim();
  const trimmedPhone = String(phone ?? '').trim();

  if (!trimmedName || !trimmedTraining || !trimmedPreferred) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!trimmedEmail && !trimmedPhone) {
    return new Response(
      JSON.stringify({ error: 'Please provide an email, a phone number, or both.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const subject = `Student inquiry: ${trimmedName}`;
  const html = `
    <p style="font-family:system-ui,sans-serif;font-size:15px;color:#111827">New information request from elevationflight.com.</p>
    <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse;margin-top:16px">
      ${fieldRow('Name', trimmedName)}
      ${fieldRow('Preferred date', String(preferredDate ?? '').trim())}
      ${fieldRow('Training level', trimmedTraining)}
      ${fieldRow('Preferred contact', trimmedPreferred)}
      ${fieldRow('Email', trimmedEmail)}
      ${fieldRow('Phone', trimmedPhone)}
      ${fieldRow('Questions / notes', String(additionalQuestions ?? '').trim())}
    </table>
  `.trim();

  const emailPayload = {
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    subject,
    html
  };

  if (trimmedEmail) {
    emailPayload.reply_to = trimmedEmail;
  }

  const officeResult = await sendResendEmail(resendApiKey, emailPayload);

  if (!officeResult.ok) {
    console.error('Resend office email error', officeResult.status, officeResult.text);
    return new Response(JSON.stringify({ error: 'Unable to send message. Please call the office.' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (trimmedEmail) {
    const confirmResult = await sendResendEmail(resendApiKey, {
      from: CONTACT_FROM,
      to: [trimmedEmail],
      subject: 'We received your message — Elevation Aviation',
      html: confirmationHtml(trimmedName, trimmedPreferred)
    });

    if (!confirmResult.ok) {
      console.error('Resend confirmation email error', confirmResult.status, confirmResult.text);
    }
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function onRequest(context) {
  if (context.request.method === 'POST') {
    return onRequestPost(context);
  }

  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' }
  });
}
