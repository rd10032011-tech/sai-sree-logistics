import PageShell from './PageShell.jsx'

export default function CookiePolicy() {
  return (
    <PageShell title="Cookie Policy" subtitle="Last updated: May 2026">
      <h2 className="text-white text-xl font-bold mt-8 mb-4">1. What Are Cookies</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Cookies are small text files stored on your device (computer, tablet, or mobile)
        when you visit a website. They are widely used to make websites work efficiently
        and provide useful information to website owners. Cookies help us enhance your
        browsing experience by remembering your preferences and settings.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">2. How We Use Cookies</h2>
      <p className="text-gray-400 leading-relaxed mb-4">We use cookies to:</p>
      <ul className="text-gray-400 space-y-2 ml-6 mb-4">
        <li className="list-disc">Understand how visitors interact with our website through anonymous analytics</li>
        <li className="list-disc">Remember your preferences and settings for future visits</li>
        <li className="list-disc">Improve site performance, loading speed, and overall functionality</li>
        <li className="list-disc">Enable essential features such as form submissions and navigation</li>
      </ul>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        <strong className="text-white">Essential Cookies:</strong> Required for basic site functionality
        such as page navigation and access to secure areas. The website cannot function properly
        without these cookies.<br /><br />
        <strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors
        use our website — which pages are most popular, how users navigate, and where they
        may encounter issues. All data is collected anonymously.<br /><br />
        <strong className="text-white">Functional Cookies:</strong> Remember your preferences and
        choices (such as language or region) to provide a personalized experience.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">4. Third-Party Cookies</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        We may use third-party services such as Google Analytics to analyze website traffic.
        These providers may set their own cookies on your device. We do not control these
        cookies and recommend reviewing the privacy policies of these third-party providers
        for more information.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">5. Managing Cookies</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        You can control and manage cookies through your browser settings. Most browsers allow
        you to block or delete cookies, and you can configure your preferences for different
        websites. Please note that disabling certain cookies may affect website functionality
        and your overall experience.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        To learn how to manage cookies in your browser, visit the help section of your
        specific browser: Chrome, Firefox, Safari, Edge, or Opera.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">6. Changes to This Policy</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        We may update this Cookie Policy from time to time to reflect changes in technology,
        legislation, or our practices. Any changes will be posted on this page with an updated
        revision date. We encourage you to review this policy periodically.
      </p>

      <h2 className="text-white text-xl font-bold mt-8 mb-4">7. Contact</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        If you have any questions about our use of cookies or this policy, please contact us
        at <a href="mailto:saisreelogistics16@gmail.com" className="text-accent hover:underline">saisreelogistics16@gmail.com</a>.
      </p>
    </PageShell>
  )
}
