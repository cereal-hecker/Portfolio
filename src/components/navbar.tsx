function Navbar() {
  return (
    <nav className="flex w-full justify-between fixed">
      {/* Left side - cat in a bag */}
      <div className="pt-5 pl-5">
        <div className="bg-primary h-28 w-28">
          <img
            src="/images/navbar/cat-in-a-bag.png"
            alt="Logo"
            className="h-[100px] w-[100px]"
          />
        </div>
      </div>
      
      {/* Right side with socials */}
      
        <div className="pt-[15px]  bg-primary w-48 h-16 flex justify-center">
        <a href="mailto:riyabatla72@gmail.com">        <img
          src="/images/navbar/mail.png"
          alt="mail"
          className="h-[30px] w-[30px] cursor-pointer"
        /></a>
        <a href="https://github.com/cereal-hecker">        
        <img
          src="/images/navbar/github.png"
          alt="github"
          className="h-[30px] w-[30px] ml-6 cursor-pointer"
        /></a>
        <a href="https://www.linkedin.com/in/riya-batla/">        <img
          src="/images/navbar/linkedin.png"
          alt="linkedin"
          className="h-[30px] w-[30px] ml-6 cursor-pointer"
        /></a>
        </div>
    </nav>
  );
}

export default Navbar;
