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
        <img
          src="/images/navbar/mail.png"
          alt="mail"
          className="h-[30px] w-[30px] cursor-pointer"
        />
        <img
          src="/images/navbar/github.png"
          alt="github"
          className="h-[30px] w-[30px] ml-6 cursor-pointer"
        />
        <img
          src="/images/navbar/linkedin.png"
          alt="linkedin"
          className="h-[30px] w-[30px] ml-6 cursor-pointer"
        />
        </div>
    </nav>
  );
}

export default Navbar;

{
  /* <div className="flex justify-between w-full fixed">
<div className="w-36 h-36 bg-primary t-0"></div>
<div className="bg-primary w-48 h-16"></div>
</div> */
}
