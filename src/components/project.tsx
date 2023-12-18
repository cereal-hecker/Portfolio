interface TagProps {
    text: string;
}

function Tag({ text }: TagProps) {
    return <div className="bg-highlight px-2">{text}</div>;
}

interface ProjectProps {
    heading: string;
    content: string;
    tags: string[];
    link: string;
}

function Project({ heading, content, tags, link }: ProjectProps) {
    return (
        <div className="border-3 border-dark-purple p-4">
            <h1 className="text-xl font-bold">{heading}</h1>
            <p className="text-xl mb-2">{content}</p>
            <div className="flex flex-wrap space-x-2 pb-10">
                {tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                ))}
            </div>
            <a href={link} className='bg-dark-purple text-white py-[7px] px-4 inline-block rounded'>Go to project ➞</a>
        </div>
    );
}

export default Project;