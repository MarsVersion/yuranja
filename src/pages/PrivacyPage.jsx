import { LegalPage } from './LegalPage'

export function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="Last updated: July 2026">
      <section>
        <h2 className="font-serif text-xl">1. Introduction</h2>
        <p>
          Yuranja (“we”, “our”, or “us”) respects your privacy. This Privacy Policy explains what
          information we collect, how we use it, and your rights when you visit our website.
        </p>
        <p>
          By using this website, you agree to the practices described in this Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">2. Information We Collect</h2>
        <p>
          Yuranja does not require visitors to create an account or provide personal information to
          browse the website.
        </p>
        <p>
          We collect personal information only if you voluntarily contact us by email. In that case,
          we use your information solely to respond to your inquiry.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">3. Cookies</h2>
        <p>This website may use essential cookies necessary for basic functionality.</p>
        <p>
          If analytics or additional cookies are introduced in the future, this Privacy Policy will
          be updated accordingly.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">4. Analytics</h2>
        <p>
          Yuranja uses privacy-friendly analytics to understand how visitors use the website and to
          improve its editorial content and user experience.
        </p>
        <p>
          The collected information is aggregated and anonymous. We do not use analytics to identify
          individual visitors or to build advertising profiles.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">5. Embedded Content and External Links</h2>
        <p>
          Yuranja contains links to external websites, galleries, museums, institutions, and other
          third-party resources.
        </p>
        <p>We are not responsible for the privacy practices or content of external websites.</p>
        <p>
          Please review their respective privacy policies before providing personal information.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">6. Contact</h2>
        <p>
          If you contact us via email, we will use your information solely to respond to your
          inquiry.
        </p>
        <p>
          We do not sell, rent, or share your personal information with third parties except where
          legally required.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">7. Data Retention</h2>
        <p>
          Personal information is retained only as long as necessary to respond to inquiries or
          fulfill legal obligations.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">8. Your Rights</h2>
        <p>
          If you are located in the European Economic Area (EEA) or the United Kingdom, you may have
          the right to:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Request access to your personal data.</li>
          <li>Request correction or deletion of your personal data.</li>
          <li>Object to or restrict certain types of processing.</li>
          <li>Lodge a complaint with your local data protection authority.</li>
        </ul>
        <p className="mt-3">
          To exercise these rights, please contact us using the email address provided on this
          website.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time.</p>
        <p>The latest version will always be published on this page.</p>
      </section>
    </LegalPage>
  )
}
