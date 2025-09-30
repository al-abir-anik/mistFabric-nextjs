const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1]">
      <div className="w-full md:w-3/4 mx-auto flex flex-col md:flex-row items-start md:items-stretch justify-center gap-10 py-14 border-b border-gray-500/30 text-gray-500 px-4 md:px-0">
        {/* Brand Info */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p className="relative text-2xl font-semibold text-slate-700">
            <span className="text-primary">mist</span>Fabric
          </p>
          <p className="mt-4 md:mt-6 text-sm md:text-base">
            Elevate your style with{" "}
            <span className="text-primary">mistFabric</span>. We bring you
            timeless designs and quality fabrics, making every outfit a
            statement. Follow us for the latest collections and fashion
            inspiration.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/3 flex items-start justify-center mt-8 md:mt-0">
          <div className="text-center md:text-left">
            <h2 className="font-medium text-gray-900 mb-5 text-lg">Company</h2>
            <ul className="text-sm md:text-base space-y-2">
              <li>
                <a className="hover:underline transition" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="w-full md:w-1/3 flex items-start justify-center mt-8 md:mt-0">
          <div className="text-center md:text-left">
            <h2 className="font-medium text-gray-900 mb-5 text-lg">
              Get in touch
            </h2>
            <div className="text-sm md:text-base space-y-2">
              <p>+1-234-567-890</p>
              <p>alabiranik56@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-xs md:text-sm px-4">
        Copyright 2025 © alAbirAnik. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
