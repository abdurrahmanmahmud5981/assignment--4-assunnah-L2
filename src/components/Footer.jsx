const Footer = () => {
  return (
    <>
      <div>
        <footer className="border-t border-t-primary/20 footer footer-center sha   text-base-content p-4 fixed w-full z-20 bottom-0 end-0 backdrop-filter backdrop-blur-3xl ">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All Right Reserved{" "}
              <a className="link ">by Abdur Rahman .</a>
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
