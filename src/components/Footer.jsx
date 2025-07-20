import footerSections from "../data/constants/footerStaticData";

const Footer = () => (
  <footer className="bg-gray-100 text-gray-700 pt-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {footerSections.map((section) => (
        <div key={section.heading}>
          <h3 className="font-semibold mb-4">{section.heading}</h3>
          <ul className="space-y-2">
            {section.links.map((text) => (
              <li key={text}>
                <a
                  href="https://devchu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline block"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="bg-gray-800 text-white mt-10 pt-6 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">© 2025 DevChu — All rights reserved.</p>
        <div className="flex space-x-4">
          {["Facebook", "Instagram", "Twitter", "YouTube"].map((platform) => (
            <a
              key={platform}
              href="https://devchu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
