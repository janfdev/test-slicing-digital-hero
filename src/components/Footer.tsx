import Call from "../assets/icons/call.svg";
import Mail from "../assets/icons/ic_round-email.svg";
import LogoBlack from "../assets/images/logo-black.png";

const sections = [
  {
    title: "Quick Links",
    links: [
      { name: "Community", href: "#" },
      { name: "Upcoming Event", href: "#" },
      { name: "Partnership", href: "#" },
      { name: "Get in Touch", href: "#" }
    ]
  },
  {
    title: "Social",
    links: [
      { name: "Instagram", href: "#" },
      { name: "Linkedin", href: "#" },
      { name: "TikTok", href: "#" },
      { name: "X", href: "#" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  }
];

const socialLinks = [
  {
    label: "Phone Number",
    icon: Call,
    contact: "+6221 0000 0000",
    href: "https://wa.me/62210000000"
  },
  {
    label: "Email",
    icon: Mail,
    contact: "hello@.id",
    href: "mail@hello@.id"
  }
];

export default function Footer03() {
  return (
    <footer className="px-10 py-16">
      <div className="space-y-8 px-4 sm:px-6 lg:space-y-16 ">
        <div className="w-full flex md:flex-row flex-col justify-between">
          {/* Logo and Description */}
          <div>
            <a href="/">
              <img src={LogoBlack} alt="" />
            </a>
            <p className="mt-4 max-w-xs text-muted-foreground">
              Digital Hero — Head Office (fiksi) Jl. Digital Hero No. 88, Menara
              Kreatif Lantai 6 Kuningan, Setiabudi — Jakarta Selatan 12920
            </p>

            {/* Social Links */}
            <ul className="mt-8 flex gap-6">
              {socialLinks.map(({ label, icon, contact, href }, idx) => (
                <li key={idx}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground flex flex-col gap-3 transition hover:text-primary"
                  >
                    <span className="text-xs text-gray-600 ">{label}</span>
                    <div className="flex items-center gap-3">
                      <img src={icon} alt="" />
                      <p>{contact}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Sections */}
          <div className="grid grid-cols-1 md:mt-0 mt-10 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            {sections.map((section, idx) => (
              <div key={idx}>
                <p className="text-gray-400 font-medium">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-muted-foreground transition hover:text-primary"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
