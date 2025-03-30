import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 text-center lg:ml-auto footer-section max-w-content xl:max-2xl:max-w-50rem">
      <p className="">
        &copy; {currentYear} Copyright by 
        <Link href="/" className="transition-colors hover:text-theme ml-1">
          Eden Sitkovetsky
        </Link>
        <span className="text-xs ml-1">• All Rights Reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
