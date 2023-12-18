import Work from "../../components/work";
import Club from "../../components/club";
import { workData } from "./data/work";
import { clubData } from "./data/club";

function Experience() {
    return (
        <div className="h-full mt-32 mb-24 mx-4 md:mx-28">
          <p className="text-4xl md:text-8xl mb-8 text-dark-purple font-bold">EXPERIENCE</p>
          <div className="grid grid-cols-3 gap-24">
            <div className="col-span-1">
                <p className="text-[32px] text-regular-purple font-semibold mb-8">Werk Work</p>
                {workData.map((work, index) => (
                  <Work key={index} {...work} />
                ))}
                <img className='mt-12 w-[200px] h-[200px]' src='/images/the-experience-cat.png'></img>
            </div>
            <div className="col-span-2">
                <p className="text-[32px] text-regular-purple font-semibold mb-8">Clubs & College</p>
                {clubData.map((club, index) => (
                  <Club key={index} {...club} />
                ))}
            </div>
          </div>
        </div>
    );
}

export default Experience;