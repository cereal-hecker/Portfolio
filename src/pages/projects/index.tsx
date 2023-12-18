import Project from '../../components/project';
import Highlight from '../../components/highlight';
import { projectsData } from './data';

function Projects() {
    return (
      <>
        <div className="h-full mx-4 md:mx-28">
          <p className="text-4xl md:text-8xl mb-8 text-dark-purple font-bold">PROJECTS</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projectsData.map((project, index) => (
              <Project key={index} {...project} />
            ))}
            <div className='border-[3px] border-dashed border-dark-purple p-4 w-full'>
              <img className='mx-auto mb-6 mt-8 w-[200px] h-[200px]' src='/images/the-project-cat.png'></img>
              <p className='mb-[10px]'>More at my github —</p>
              <div className='mx-auto'><a href='https://github.com/cereal-hecker'><Highlight text="cereal-hecker" /></a></div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Projects;
