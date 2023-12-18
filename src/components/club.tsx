interface ClubProps {
  heading: string;
  text: string;
  content: string;
}

function Club({ heading, text, content }: ClubProps) {
  return (
    <div className=" mb-8">
      <span className="font-semibold">{heading} </span>
      <span className="text-secondary">({text})</span>
      <p>{content}</p>
    </div>
  );
}

export default Club;