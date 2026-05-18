export const LEGAL_EFFECTIVE_DATE = 'May 18, 2026';

const company =
  'Elevation Aviation ("we," "us," or "our") operates elevationflight.com and provides flight training and related aviation services at Manassas Regional Airport in Manassas, Virginia.';

/** @type {{ id: string; heading: string; paragraphs: string[] }[]} */
export const privacyPolicySections = [
  {
    id: 'overview',
    heading: 'Overview',
    paragraphs: [
      `${company} This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, contact us, schedule training, or otherwise interact with our business.`,
      'By using our website or services, you agree to the practices described here. If you do not agree, please do not use our site or services.'
    ]
  },
  {
    id: 'information-we-collect',
    heading: 'Information We Collect',
    paragraphs: [
      'We may collect information you provide directly, such as your name, email address, phone number, mailing address, training goals, scheduling preferences, payment-related details (processed by third-party providers), and messages you send through contact forms or email.',
      'When you visit our website, we may automatically collect certain technical information, such as your IP address, browser type, device type, referring pages, and general usage data through cookies or similar technologies.',
      'If you participate in flight training, aircraft rental, or related programs, we may also maintain records needed for operations, safety, billing, and regulatory compliance. Some of that information may be required by aviation authorities or insurance providers.'
    ]
  },
  {
    id: 'how-we-use',
    heading: 'How We Use Information',
    paragraphs: [
      'We use collected information to respond to inquiries, schedule lessons and demo flights, provide training and customer support, process payments, operate our website, improve our services, send administrative notices, and comply with legal or safety obligations.',
      'We may use aggregated or de-identified data to understand website performance and improve content. We do not sell your personal information.'
    ]
  },
  {
    id: 'cookies',
    heading: 'Cookies and Analytics',
    paragraphs: [
      'Our website may use cookies, local storage, or similar tools to remember preferences, maintain sessions, and measure traffic. You can adjust browser settings to limit cookies, but some site features may not function properly without them.',
      'We may use third-party analytics or hosting providers that collect usage data on our behalf under their own privacy terms.'
    ]
  },
  {
    id: 'sharing',
    heading: 'How We Share Information',
    paragraphs: [
      'We may share information with service providers who help us operate our business, such as website hosting, email delivery, scheduling tools, payment processors, and financing partners you choose to use. These providers are authorized to use information only as needed to perform services for us.',
      'We may disclose information when required by law, to protect rights and safety, to enforce our agreements, or in connection with a business transfer such as a merger or asset sale.',
      'We may share limited operational information with airport tenants, instructors, insurers, or regulators when necessary for flight operations, safety, or compliance.'
    ]
  },
  {
    id: 'retention',
    heading: 'Data Retention',
    paragraphs: [
      'We retain information for as long as needed to provide services, meet legal and regulatory requirements, resolve disputes, and enforce our agreements. Retention periods may vary depending on the type of record.'
    ]
  },
  {
    id: 'security',
    heading: 'Security',
    paragraphs: [
      'We use reasonable administrative, technical, and organizational measures designed to protect information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.'
    ]
  },
  {
    id: 'children',
    heading: "Children's Privacy",
    paragraphs: [
      'Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe we have collected such information, contact us and we will take appropriate steps to delete it.',
      'Flight training may be available to older minors with appropriate consent and eligibility requirements. Additional policies may apply during enrollment.'
    ]
  },
  {
    id: 'your-rights',
    heading: 'Your Choices and Rights',
    paragraphs: [
      'You may request access to, correction of, or deletion of certain personal information, subject to legal exceptions. You may opt out of non-essential marketing messages by following unsubscribe instructions or contacting us directly.',
      'Depending on where you live, you may have additional privacy rights under applicable law. We will respond to valid requests in accordance with those laws.'
    ]
  },
  {
    id: 'third-party-links',
    heading: 'Third-Party Links',
    paragraphs: [
      'Our website may link to third-party sites such as airport resources, financing partners, or social media platforms. We are not responsible for the privacy practices of those sites and encourage you to review their policies.'
    ]
  },
  {
    id: 'changes',
    heading: 'Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The "Effective" date at the top of this page indicates when it was last revised. Continued use of our website or services after changes become effective constitutes acceptance of the updated policy.'
    ]
  },
  {
    id: 'contact',
    heading: 'Contact Us',
    paragraphs: [
      'For privacy questions or requests, contact Elevation Aviation at elevation@elevationflight.com or 571-657-3847. Mailing address: APP Jet Center, 9998 Wakeman Drive, Suite 204, Manassas, VA 20110.'
    ]
  }
];

/** @type {{ id: string; heading: string; paragraphs: string[] }[]} */
export const termsOfServiceSections = [
  {
    id: 'agreement',
    heading: 'Agreement to Terms',
    paragraphs: [
      `${company} These Terms of Service ("Terms") govern your access to our website and your use of our training, aircraft rental, ground instruction, and related services.`,
      'By accessing our website or purchasing services, you agree to these Terms. If you do not agree, do not use our website or services.'
    ]
  },
  {
    id: 'services',
    heading: 'Services',
    paragraphs: [
      'We provide flight training and aviation-related services, which may include private pilot, instrument, commercial, and other instructional programs; aircraft rental for training; ground instruction; scheduling support; and informational resources.',
      'Service descriptions on our website are for general information and may change. Specific pricing, availability, aircraft assignments, and program requirements are confirmed during enrollment or scheduling.'
    ]
  },
  {
    id: 'eligibility',
    heading: 'Eligibility and Accounts',
    paragraphs: [
      'You are responsible for providing accurate information and maintaining the security of any account credentials issued to you. You must meet applicable age, medical, regulatory, and proficiency requirements before participating in flight activities.',
      'We may refuse or discontinue service if we reasonably believe a user poses a safety risk, violates policy, or fails to meet regulatory requirements.'
    ]
  },
  {
    id: 'scheduling',
    heading: 'Scheduling, Cancellations, and No-Shows',
    paragraphs: [
      'Lesson and aircraft reservations are subject to instructor availability, weather, maintenance, and airport operations. We may reschedule or cancel activities when safety or operational conditions require it.',
      'Cancellation and no-show policies, including any fees, are provided at booking or in program materials. Late cancellations or no-shows may result in charges for reserved aircraft and instructor time.'
    ]
  },
  {
    id: 'payments',
    heading: 'Payments and Billing',
    paragraphs: [
      'Fees for instruction, aircraft, and related services are due according to the billing method you select, such as pay-as-you-fly or approved financing through a third-party provider. You authorize us and our payment processors to charge applicable amounts.',
      'Prices, rates, and taxes may change. Disputed charges should be reported promptly. Failure to pay outstanding balances may result in suspension of services.'
    ]
  },
  {
    id: 'aircraft-and-safety',
    heading: 'Aircraft Use, Safety, and Compliance',
    paragraphs: [
      'Students, renters, and guests must follow all applicable Federal Aviation Regulations, airport rules, instructor direction, checklists, and company policies. You are responsible for the safe and lawful operation of aircraft entrusted to you.',
      'Aircraft may only be used for approved purposes. Unauthorized operations, reckless conduct, substance impairment, or failure to report incidents or damage may result in immediate termination of privileges and additional charges or legal action.',
      'We do not guarantee certification outcomes, checkride results, or specific training timelines. Progress depends on student preparation, attendance, weather, maintenance, and regulatory standards.'
    ]
  },
  {
    id: 'assumption-of-risk',
    heading: 'Assumption of Risk',
    paragraphs: [
      'Aviation activities involve inherent risks, including injury, property damage, and death. By participating in training or aircraft operations, you voluntarily assume these risks to the fullest extent permitted by law.'
    ]
  },
  {
    id: 'disclaimers',
    heading: 'Disclaimers',
    paragraphs: [
      'Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      'Website content is general information only and is not legal, medical, or regulatory advice. You are responsible for verifying requirements with the FAA and other authorities.'
    ]
  },
  {
    id: 'limitation',
    heading: 'Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by law, Elevation Aviation and its owners, employees, contractors, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services.',
      'Our total liability for any claim relating to the website or services will not exceed the amount you paid us for the specific service giving rise to the claim during the twelve (12) months before the event, except where liability cannot be limited by law.'
    ]
  },
  {
    id: 'indemnification',
    heading: 'Indemnification',
    paragraphs: [
      'You agree to defend, indemnify, and hold harmless Elevation Aviation and its personnel from claims, damages, losses, and expenses (including reasonable attorneys\' fees) arising from your conduct, misuse of aircraft, violation of these Terms, or violation of applicable law.'
    ]
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    paragraphs: [
      'Website content, branding, logos, text, images, and other materials are owned by Elevation Aviation or licensors and protected by intellectual property laws. You may not copy, modify, distribute, or exploit site content without prior written permission.'
    ]
  },
  {
    id: 'third-party',
    heading: 'Third-Party Services and Links',
    paragraphs: [
      'We may reference or link to third-party services such as financing providers, dispatch tools, airport websites, or social platforms. Those services are governed by their own terms, and we are not responsible for their actions or content.'
    ]
  },
  {
    id: 'governing-law',
    heading: 'Governing Law and Disputes',
    paragraphs: [
      'These Terms are governed by the laws of the Commonwealth of Virginia, without regard to conflict-of-law principles. You agree that exclusive venue for disputes arising under these Terms will be in courts located in Prince William County, Virginia, unless otherwise required by law.',
      'Before filing a formal claim, you agree to contact us and attempt in good faith to resolve the dispute informally.'
    ]
  },
  {
    id: 'changes',
    heading: 'Changes to These Terms',
    paragraphs: [
      'We may modify these Terms at any time by posting an updated version on this page with a revised effective date. Your continued use of the website or services after changes take effect constitutes acceptance of the updated Terms.'
    ]
  },
  {
    id: 'contact',
    heading: 'Contact',
    paragraphs: [
      'Questions about these Terms may be sent to elevation@elevationflight.com or 571-657-3847. Mailing address: APP Jet Center, 9998 Wakeman Drive, Suite 204, Manassas, VA 20110.'
    ]
  }
];
