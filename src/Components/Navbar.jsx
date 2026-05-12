const Navbar = ({ aboutRef , skillsRef }) => {
  return (
    <div className=" sticky flex items-start justify-between px-10 mt-10">
      <h1 className="text-3xl">
        Aliya's <i class="fa-solid fa-code"></i> <br /> Portfolio
      </h1>

      <div className="tabs tabs-lift">
        <label className="tab text-2xl mr-4">
          <input type="radio" name="my_tabs_4" />
          <div
            className="lg:tooltip"
            data-tip="About Me"
            onClick={() =>
              aboutRef.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <i class="fa-regular fa-user"></i>
          </div>
        </label>

        <label className="tab text-2xl mr-4">
          <input type="radio" name="my_tabs_4" />
          <div className="lg:tooltip"
           data-tip="Skills"
              onClick={() =>
                skillsRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
           >
            <i class="fa-brands fa-codepen"></i>
          </div>
        </label>

        <label className="tab text-2xl mr-4">
          <input type="radio" name="my_tabs_4" />
          <div className="lg:tooltip" data-tip="Projects">
            <i class="fa-solid fa-diagram-project"></i>
          </div>
        </label>

        <label className="tab text-2xl mr-4">
          <input type="radio" name="my_tabs_4" />
          <div className="lg:tooltip" data-tip="Contact">
            <i class="fa-sharp fa-solid fa-at"></i>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
