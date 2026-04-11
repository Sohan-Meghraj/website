import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="w-full pt-32 pb-24 bg-card min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl bg-white p-8 md:p-12 rounded-xl shadow-sm border border-border">
        <h1 className="font-serif text-4xl font-bold text-secondary mb-8 border-b border-border pb-6">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>Last Updated: October 2023</p>

          <h2 className="text-secondary font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            Pyrite Ventures (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or communicate with us regarding potential business acquisitions.
          </p>

          <h2 className="text-secondary font-bold mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number that you voluntarily give to us when choosing to participate in activities related to the Site.</li>
            <li><strong>Business Information:</strong> Information about your business, including revenue figures, industry, and acquisition preferences that you provide via our contact forms.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2 className="text-secondary font-bold mt-8 mb-4">3. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Evaluate potential business acquisition opportunities.</li>
            <li>Contact you regarding your inquiry.</li>
            <li>Send you emails regarding potential deals or general communication.</li>
            <li>Improve the functionality and performance of our website.</li>
          </ul>

          <h2 className="text-secondary font-bold mt-8 mb-4">4. Confidentiality of Business Information</h2>
          <p>
            We understand the highly sensitive nature of business acquisition discussions. Information provided about your business via our contact forms is treated with strict confidentiality and is used solely for the purpose of evaluating a potential transaction. We do not share this information with third parties outside of our immediate evaluation team without your explicit consent.
          </p>

          <h2 className="text-secondary font-bold mt-8 mb-4">5. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
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
