import Developer from "../assets/meet-the-developer.png";
import workspace from "../assets/Workspace.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Background / Workspace Section */}
      <section id="cafe" className="flex justify-center mb-10 px-4">
        <img
          className="w-full mt-8 max-w-2xl h-[450px] object-cover rounded-xl border-1 border-[#FFD6A7]"
          src={workspace}
          alt="Aliya's Workspace"
        />
      </section>

      {/* About Section */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={Developer}
            alt="Developer"
            className="max-w-sm w-full rounded-lg"
          />
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Meet the Developer</h1>
            <p className="pt-6 pb-2 font-mono">
              Hello! I’m Aliya, an Electrical and Electronics Engineering
              graduate with a growing passion for full stack development and
              creating user-friendly digital experiences. Half my brain thinks
              about clean code and debugging, while the other half obsesses over
              layouts, interactions, and making websites feel effortless to use.{" "}
              <br />I love building interactive websites and meaningful projects
              that solve real problems while keeping the user experience simple
              and smooth. Currently, I’m also a sprint contributor at
              freeCodeCamp, constantly learning, building, and exploring the
              creative side of tech.
            </p>
            <p className="pt-2 pb-6 font-mono">
              Life feels best with good ideas, late-night coding sessions, and
              the excitement of turning concepts into something people can
              actually use.
            </p>
            <button className="btn btn-primary">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
