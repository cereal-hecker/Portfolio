interface SkillProps {
  heading: string;
  content: string;
}

function Skill({ heading, content }: SkillProps) {
  return (
    <div className="border-l-4 border-secondary pl-4 mb-10">
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <p className="text-2xl">{content}</p>
    </div>
  );
}

export default Skill;