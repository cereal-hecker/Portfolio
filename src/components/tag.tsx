interface TagProps {
    text: string;
}

export default function Tag({ text }: TagProps) {
    return <div className="bg-highlight px-2">{text}</div>;
}