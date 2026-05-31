
export const metadata = {
  title: "Cookie Policy | Ares Tire & Auto",
  description: "Cookie Policy for Ares Tire & Auto in Arvada, CO.",
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-16 text-[#bbc9cd]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#dae2fd] mb-8">Cookie Policy</h1>
      <div className="space-y-6 text-lg font-light">
        <p>Last Updated: October 2024</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">1. What Are Cookies</h2>
        <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">2. How We Use Cookies</h2>
        <p>Ares Tire & Auto uses cookies to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand and save your preferences for future visits.</li>
          <li>Compile aggregate data about site traffic and site interactions to offer better site experiences and tools in the future.</li>
          <li>Enable certain functions of the website, such as Google Maps integration.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">3. Third-Party Cookies</h2>
        <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. Specifically, we use Google Maps embeds which may set their own cookies subject to Google&apos;s privacy policies.</p>

        <h2 className="text-2xl font-bold text-[#dae2fd] mt-8">4. Managing Cookies</h2>
        <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
      </div>
    </div>
  );
}
