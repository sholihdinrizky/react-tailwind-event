const Footer = () => {
  return (
    <div className="bg-stone-950 py-6">
      <div className="container mx-auto px-2 flex justify-between items-center md:flex-row flex-col md:gap-0 gap-2">
        <p className="text-white text-base/loose">
          &copy; Copyright by <span className="font-bold">Rizky</span> 2026
        </p>

        <div className="flex items-center md:gap-4 gap-1">
          <p className="text-white text-base/loose">Social Media</p>
          <span className="text-white">-</span>
          <a href="">
            <i className="ri-instagram-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="">
            <i className="ri-twitter-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="">
            <i className="ri-reddit-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="">
            <i className="ri-youtube-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="">
            <i className="ri-facebook-circle-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
