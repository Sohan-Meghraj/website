import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="w-full pt-32 pb-24 bg-card min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl bg-white p-8 md:p-12 rounded-xl shadow-sm border border-border">
        <h1 className="font-serif text-4xl font-bold text-secondary mb-8 border-b border-border pb-6">Terms of Use</h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>Last Updated: October 2023</p>

          <h2 className="text-secondary font-bold mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Pyrite Ventures (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
          </p>

          <h2 className="text-secondary font-bold mt-8 mb-4">2. Informational Purpose Only</h2>
          <p>
            The content on the Site is provided for general informational purposes only and is not intended as financial, investment, legal, or other professional advice. No information on this site constitutes an offer to buy, sell, or negotiate the purchase of any business or security.
          </p>

          <h2 className="text-secondary font-bold mt-8 mb-4">3. Confidentiality of Submissions</h2>
          <p>
            While we treat business information submitted through our forms with confidentiality, the initial submission of information through our website does not create a formal advisory, fiduciary, or confidential relationship until a formal Non-Disclosure Agreement (NDA) is executed between both parties.
          </p>

          <h2 className="text-secondary font-bold mt-8 mb-4">4. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
          </p>

          <h2 className="text-secondary font-bold mt-8 mb-4">5. Modifications and Interruptions</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
          </p>

          <h2 className="text-secondary font-bold mt-8 mb-4">6. Contact Information</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
          <p className="mt-4 font-medium text-secondary">
            Pyrite Ventures<br />
            Email: info@pyriteventures.com
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Button asChild variant="outline">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
