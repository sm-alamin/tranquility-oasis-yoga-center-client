import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <footer className="footer p-10 bg-custom text-base-content">
      <div className="text-center">
        <img src="/logo-yoga.png" className="mx-auto"/>
        <p className="text-slate-400">
        Tranquility Oasis Yoga Center
          <br />
          Help to keep body and mind healthy since 1990
        </p>
      </div>
      
      <div>
        <span className="footer-title">About Us</span>
        <a className="link link-hover">Our Services</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">FAQ</a>
      </div>
      <div>
      <h3 className="footer-title underline">Address Info</h3>
      <div className="flex flex-col font-bold pt-2 gap-2">
          <a className="link link-hover">
            <span className="text-primary">Phone: </span>
            +8801637131835
          </a>
          <a className="link link-hover">
            <span className="text-primary">Email: </span>
            tranquility.osais@gmail.com
          </a>
          <a className="link link-hover">
            <span className="text-primary">Fax Id: </span>
            +025589645
          </a>
          <a className="link link-hover">
            <span className="text-primary">Location: </span>
            Balurmath, Narayanganj, Narayanganj
          </a>
        </div>
      </div>
      <div>
      <h3 className="footer-title">Social Media</h3>
      <div className="flex gap-3 mt-3 mx-auto">
      
            <a
              className="border rounded-full p-2 hover:border-indigo-500"
              href=""
            >
              <FaFacebookF />
            </a>
            <a
              className="border rounded-full hover:border-indigo-500 p-2"
              href=""
            >
              <FaInstagram />
            </a>
            <a
              className="border rounded-full hover:border-indigo-500 p-2"
              href=""
            >
              <FaTwitter />
            </a>
            <a
              className="border rounded-full hover:border-indigo-500 p-2"
              href=""
            >
              <FaLinkedinIn />
            </a>
          </div>
      </div>
      
      
      
    </footer>
    <footer className="footer footer-center bg-slate-200 p-4 text-base-content">
    <div>
      <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
    </div>
  </footer>
    </div>
  );
};

export default Footer;
