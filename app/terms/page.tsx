
export const metadata = {
  title: "Terms of Service | Ares Tire & Auto",
  description: "Terms of Service for Ares Tire & Auto in Arvada, CO.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-16 text-[#bbc9cd]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#dae2fd] mb-8">Terms of Service</h1>
      <div className="space-y-6 text-lg font-light">
        <p>Last Updated: October 2024</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">1. Acceptance of Terms</h2>
        <p>By accessing our website or utilizing the services of Ares Tire & Auto, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">2. Service Estimates & Authorizations</h2>
        <p>We will provide a written or oral estimate for all diagnostic, repair, and maintenance work. No work will be performed without your prior authorization. If additional issues are discovered during the course of repair, we will contact you for further authorization before proceeding.</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">3. Payment Terms</h2>
        <p>Payment is due in full upon completion of services unless prior arrangements have been made. We accept major credit cards, debit cards, and cash. Vehicles will not be released until full payment is received.</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">4. Warranties and Guarantees</h2>
        <p>We stand behind our work. Specific warranties on parts and labor will be detailed on your final invoice. Warranties do not cover damage resulting from accidents, misuse, or modifications made after the vehicle leaves our shop.</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">5. Limitation of Liability</h2>
        <p>Ares Tire & Auto is not responsible for loss or damage to vehicles or articles left in vehicles in case of fire, theft, or any other cause beyond our control.</p>
      </div>
    </div>
  );
}
