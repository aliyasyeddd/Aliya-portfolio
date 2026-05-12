import { DATA } from "../Data/Resume";

const Skills = ({ skillsRef }) => {
  return (
    <section
      id="skills"
      ref={skillsRef}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-col gap-10 max-w-4xl w-full px-6 mt-10 mb-10">
        <h2 className="text-5xl font-bold text-center">Skills</h2>
        {Object.entries(DATA.skills).map(([category, skills]) => (
          <div key={category} className="flex items-start gap-8">
            <h3 className="text-3xl font-sans font-bold capitalize min-w-[250px]">
              {category}:
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="font-mono border-2 rounded-2xl px-5 py-2 flex items-center gap-2"
                >
                  {skill.icon && (
                    <skill.icon
                      className={`size-4 ${skill.color || "text-gray-400"}`}
                    />
                  )}

                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
