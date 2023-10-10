
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 mt-12 bg-pink-200 text-base-content">
  <aside>
   
    <p className="text-4xl mt-20 text-white font-bold">Elegent Planners</p>
  </aside> 
  <nav className="text-white text-lg font-normal">
    <header className="font-bold text-2xl text-white">Services</header> 
    <a className="link link-hover">Katering</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Arrangement</a> 
    <a className="link link-hover">entertainment</a>
  </nav> 
  <nav className="text-white text-lg font-normal">
    <header className="font-bold text-2xl text-white">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Booking</a> 
    <a className="link link-hover">Discount</a>
  </nav> 
  <nav className="text-white text-lg font-normal">
    <header className="font-bold text-2xl text-white">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;