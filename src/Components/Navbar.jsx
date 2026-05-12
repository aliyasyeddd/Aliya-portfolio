const Navbar = () => {
  return (
    <div className="flex items-start justify-between px-10 mt-10">
      <h1 className="text-3xl">
        Aliya's <i class="fa-solid fa-code"></i> <br /> Portfolio
      </h1>

      <div className="tabs tabs-lift">
        <label className="tab text-2xl mr-4">
          <input type="radio" name="my_tabs_4" />
          About
        </label>

        <label className="tab text-2xl mr-4">
          <input type="radio" name="my_tabs_4" />
          Skills
        </label>

        <label className="tab text-2xl mr-4">
          <input type="radio" name="my_tabs_4" />
          Projects
        </label>

        <label className="tab text-2xl mr-4">
          <input type="radio" name="my_tabs_4" />
          Contact
        </label>
      </div>
    </div>
  );
};

export default Navbar;
