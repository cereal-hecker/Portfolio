import Tag from "./tag";

interface ProjectProps {
    heading: string;
    content: string;
    tags: string[];
    link: string;
}

function Project({ heading, content, tags, link }: ProjectProps) {
    return (
        <div className="border-[3px] h-full border-dark-purple p-4 flex flex-col justify-between">
            <h1 className="font-bold mb-6">{heading}</h1>
            <p className=" mb-4">{content}</p>
            <div className="flex flex-wrap space-x-2 pb-10">
                {tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                ))}
            </div>
            <div><a href={link} className='bg-dark-purple text-white py-[7px] b-0 px-4 inline-block rounded'>Go to project ➞</a></div>
        </div>
    );
}

export default Project;