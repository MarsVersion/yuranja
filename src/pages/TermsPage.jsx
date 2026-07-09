import { LegalPage } from './LegalPage'

export function TermsPage() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="Last updated: July 2026">
      <section>
        <h2 className="font-serif text-xl">1. Acceptance</h2>
        <p>By accessing Yuranja, you agree to these Terms of Use.</p>
        <p>If you do not agree, please discontinue use of the website.</p>
      </section>

      <section>
        <h2 className="font-serif text-xl">2. Editorial Content</h2>
        <p>
          Yuranja is an independent editorial publication covering exhibitions, galleries,
          museums, art spaces, and related cultural topics.
        </p>
        <p>All editorial opinions are our own unless otherwise stated.</p>
        <p>Information is provided for general informational purposes only.</p>
      </section>

      <section>
        <h2 className="font-serif text-xl">3. Accuracy</h2>
        <p>We strive to keep information accurate and up to date.</p>
        <p>
          However, exhibition schedules, opening hours, ticket prices, and other details may
          change without notice.
        </p>
        <p>
          Visitors should verify important information directly with the respective institution.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">4. Intellectual Property</h2>
        <p>
          Unless otherwise stated, all original text, editorial content, graphics, design, logos,
          and website elements are the intellectual property of Yuranja.
        </p>
        <p>
          They may not be copied, reproduced, distributed, or modified without prior written
          permission.
        </p>
        <p>
          Third-party trademarks, artwork, photographs, and logos remain the property of their
          respective owners.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">5. Images</h2>
        <p>Some images may be:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>provided by institutions,</li>
          <li>licensed,</li>
          <li>used with permission,</li>
          <li>publicly available under applicable licenses, or</li>
          <li>credited to their respective photographers.</li>
        </ul>
        <p className="mt-3">
          If you believe any material has been used incorrectly, please contact us, and we will
          promptly review the request.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">6. External Links</h2>
        <p>This website links to third-party websites solely for informational purposes.</p>
        <p>Yuranja is not responsible for their content, availability, or policies.</p>
      </section>

      <section>
        <h2 className="font-serif text-xl">7. Disclaimer</h2>
        <p>The website is provided “as is” without warranties of any kind.</p>
        <p>
          We make no guarantee regarding uninterrupted availability, completeness, or accuracy of
          the information.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Yuranja shall not be liable for any direct,
          indirect, incidental, or consequential damages resulting from the use of this website.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">9. Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of the country in which the website operator is
          established, unless mandatory consumer protection laws provide otherwise.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">10. Contact</h2>
        <p>
          Questions regarding these Terms may be sent to the contact email provided on this website.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl">11. AI &amp; Editorial Transparency</h2>
        <p>
          Some editorial workflows may involve AI-assisted research, drafting, translation, or data
          processing. All published recommendations, reviews, and editorial decisions are reviewed
          by a human editor before publication. Yuranja does not publish AI-generated content
          without editorial oversight.
        </p>
      </section>
    </LegalPage>
  )
}
