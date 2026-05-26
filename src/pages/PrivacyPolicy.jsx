import PageShell from './PageShell.jsx'

export default function PrivacyPolicy() {
  return (
    <PageShell
      title="Privacy Policy"
      subtitle="Last updated: May 2026"
    >
      <h2 className="text-white text-xl font-bold mt-8 mb-4">1. Introduction</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Sai Sree Logistics ("we," "our," or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
        when you visit our website, use our logistics services, or interact with our team.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">2. Information We Collect</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        We may collect personal information such as your name, email address, phone number,
        company details, shipping and billing addresses, GST number, and payment information
        when you:
      </p>
      <ul className="text-gray-400 space-y-2 ml-6 mb-4">
        <li className="list-disc">Request a quote or place an order for logistics services</li>
        <li className="list-disc">Create an account or register on our platform</li>
        <li className="list-disc">Subscribe to our newsletter or marketing communications</li>
        <li className="list-disc">Contact our customer support or operations team</li>
        <li className="list-disc">Submit a job application or resume</li>
      </ul>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        We use the collected information to:
      </p>
      <ul className="text-gray-400 space-y-2 ml-6 mb-4">
        <li className="list-disc">Process transactions, arrange shipments, and manage your account</li>
        <li className="list-disc">Provide customer support and respond to your inquiries</li>
        <li className="list-disc">Improve our services, website functionality, and user experience</li>
        <li className="list-disc">Send service-related communications including tracking updates and invoices</li>
        <li className="list-disc">Comply with legal and regulatory obligations including GST and tax requirements</li>
      </ul>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">4. Information Sharing</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        We do not sell, trade, or rent your personal information to third parties. We may share
        your information with trusted partners who assist us in operating our business (such as
        transportation partners and payment processors), provided they agree to keep your
        information confidential and use it solely for the intended purpose.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">5. Data Protection</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        We implement industry-standard security measures including SSL encryption for data
        transmission, access controls for internal systems, regular security audits, and
        secure data storage practices. While no method of transmission is 100% secure,
        we strive to protect your information using commercially acceptable means.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">6. Data Retention</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        We retain your personal information for as long as necessary to fulfill the purposes
        outlined in this policy, or as required by applicable laws and regulations. Business
        records including invoices and service agreements are retained for the duration
        mandated by statutory requirements.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">7. Your Rights</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        You have the right to access, update, or request deletion of your personal information
        held by us. You may also opt out of marketing communications at any time. To exercise
        these rights, please contact us using the information provided below.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">8. Cookies</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Our website uses cookies and similar tracking technologies to enhance your browsing
        experience and analyze site usage. Please refer to our Cookie Policy for detailed
        information about how we use cookies and how you can manage your preferences.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">9. Contact</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        For questions, concerns, or requests regarding this Privacy Policy or your data,
        please contact us at:
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        Email: <a href="mailto:saisreelogistics16@gmail.com" className="text-accent hover:underline">saisreelogistics16@gmail.com</a><br />
        Phone: <a href="tel:+919840923192" className="text-accent hover:underline">+91 98409 23192</a><br />
        Address: Kannigaipur, Thiruvallur (Dist), Tamilnadu - 601102
      </p>
    </PageShell>
  )
}
