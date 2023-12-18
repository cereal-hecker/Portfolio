import Project from "../../components/project";

function Projects() {
  return (
    <>
      <div className="h-full mx-28">
      <p className="text-8xl mb-8 text-dark-purple font-bold">PROJECTS</p>
        <div className="grid grid-cols-4 gap-4">
          <Project
            heading="SmartKisan"
            content="A smart agriculture app aiming on gradual shift from inorganic to organic farming via SMS and suggest fertilizers, crops according to the weather wtc."
            tags={["React", "Bootstrap"]}
            link="https://github.com/cereal-hecker/Smart-Kisan"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
