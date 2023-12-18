interface WorkProps {
  heading: string;
  subheading: string;
  subsubheading: string;
  content: string;
}

function Work({ heading, subheading, subsubheading, content }: WorkProps) {
  return (
    <div className="">
      <p className="font-semibold">{heading}</p>
      <p className="text-[23px]">{subheading}</p>
      <p className="text-highlight text-lg mb-8">({subsubheading})</p>
      <p>{content}</p>
    </div>
  );
}

export default Work;