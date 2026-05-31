
export const metadata = {
  title: "Privacy Policy | Ares Tire & Auto",
  description: "Privacy Policy for Ares Tire & Auto in Arvada, CO.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-16 text-[#bbc9cd]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#dae2fd] mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-lg font-light">
        <p>Last Updated: October 2024</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">1. Information We Collect</h2>
        <p>At Ares Tire & Auto, we collect information that you provide directly to us when you request an appointment, contact us via phone or text, or visit our shop. This may include your name, phone number, email address, vehicle information, and service history.</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, maintain, and improve our auto repair and tire services.</li>
          <li>Communicate with you regarding appointments, estimates, and vehicle status.</li>
          <li>Send administrative messages, technical notices, and security alerts.</li>
          <li>Respond to your comments, questions, and customer service requests.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">3. Information Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">4. Data Security</h2>
        <p>We implement reasonable security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">5. Contact Us</h2>
        <p>If you have any questions regarding this privacy policy, you may contact us using the information below:</p>
        <p className="mt-4">
          Ares Tire & Auto<br />
          5250 W 53rd Pl<br />
          Arvada, CO 80002<br />
          Phone: (720) 435-8409
        </p>
      </div>
    </div>
  );
}
