interface TagProps {
  text: string;
}

export default function Highlight({ text }: TagProps) {
  return (
    <div className="inline-block">
        <span className="px-2">{text}</span>
      <div className="bg-highlight -mt-3 w-full h-[10px]"></div>
    </div>
  );
}
