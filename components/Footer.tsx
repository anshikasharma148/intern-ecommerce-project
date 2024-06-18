import React from 'react';

const socialIcons = [
  {
    name: 'Dribbble',
    url: '#',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-dribbble h-4 w-4 align-middle"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
        ></circle>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-linkedin h-4 w-4 align-middle"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect
          x="2"
          y="9"
          width="4"
          height="12"
        ></rect>
        <circle
          cx="4"
          cy="4"
          r="2"
        ></circle>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: '#',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-facebook h-4 w-4 align-middle"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: '#',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-instagram h-4 w-4 align-middle"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
        ></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line
          x1="17.5"
          y1="6.5"
          x2="17.51"
          y2="6.5"
        ></line>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: '#',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-twitter h-4 w-4 align-middle"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: '#',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-mail h-4 w-4 align-middle"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
];

const footerLinks = [
  {name: 'Men', url: '#'},
  {name: 'Jackets & Coats', url: '#'},
  {name: 'Jeans', url: '#'},
  {name: 'Loungewear', url: '#'},
  {name: 'Polo shirts', url: '#'},
  {name: 'Shirts', url: '#'},
  {name: 'Shorts', url: '#'},
  {name: 'Suits Swimwear', url: '#'},
  {name: 'T-shirts', url: '#'},
  {name: 'Tracksuits', url: '#'},
  {name: 'Trousers', url: '#'},
  {name: 'Shoes', url: '#'},
  {name: 'My account', url: '#'},
  {name: 'Order History', url: '#'},
  {name: 'Wish List', url: '#'},
  {name: 'Affiliate', url: '#'},
  {name: 'Returns', url: '#'},
];

const features = [
  {name: 'Free delivery', icon: 'https://placehold.co/24x24'},
  {name: 'Non-contact shipping', icon: 'https://placehold.co/24x24'},
  {name: 'Money-back guarantee', icon: 'https://placehold.co/24x24'},
  {name: 'Secure payments', icon: 'https://placehold.co/24x24'},
];

const footerClasses = {
  container: 'bg-zinc-900 text-zinc-300 p-8',
  grid: 'max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8',
  border: 'border-t border-zinc-700 mt-8 pt-8',
  featureGrid:
    'max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left',
  featureItem: 'flex items-center justify-center md:justify-start space-x-2',
};

const Footer = () => {
  return (
    <footer className={footerClasses.container}>
      <div
        className={`${footerClasses.grid} max-w-[1200px] 2xl:max-w-[1440px]`}
      >
        <div className="ml-[7rem]">
          <h2 className="text-xl font-bold text-white">Cartzio</h2>
          <p className="mt-4">
            Upgrade your style with our curated sets. Choose confidence, embrace
            your unique look.
          </p>
          <div className="flex space-x-4 mt-4">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                aria-label={icon.name}
              >
                {icon.icon ? (
                  <div
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    {icon.icon}
                  </div>
                ) : (
                  <img
                    src="https://placehold.co/24x24"
                    alt={icon.name}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="ml-[8rem]">
          <h2 className="text-xl font-bold text-white">Shopping & Clothes</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {footerLinks.slice(0, 6).map((link, index) => (
              <ul key={index}>
                <li>
                  <a
                    href={link.url}
                    className="hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              </ul>
            ))}
            {footerLinks.slice(6, 12).map((link, index) => (
              <ul key={index}>
                <li>
                  <a
                    href={link.url}
                    className="hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="ml-[7rem]">
          <h2 className="text-xl font-bold text-white ">Customer Service</h2>
          <ul className="grid grid-cols-1 gap-4 mt-4 ">
            {footerLinks.slice(12).map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="hover:underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={footerClasses.border}>
        <div className={footerClasses.featureGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={footerClasses.featureItem}
            >
              <img
                src={feature.icon}
                alt={feature.name}
                aria-hidden="true"
              />
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          &copy; 2024 Cartzio. Design with{' '}
          <span className="text-red-500">♥</span> by Shreethemes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
