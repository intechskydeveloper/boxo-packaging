"use client";
interface ReadMoreProps {
  text: string;
  wordLimit?: number;
}

export default function ReadMore({
  text = "No text",
  wordLimit = 27,
}: ReadMoreProps) {
  const words = text.split(/\s+/);
  const needsTruncation = words.length > wordLimit;
  const shortText = needsTruncation
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;

  if (!needsTruncation) return <p className="text-sm text-gray-900">{text}</p>;

  return (
    <div className="text-sm text-gray-900">
      <input type="checkbox" id="readmore" className="peer hidden" />
      <p className="peer-checked:hidden">{shortText}</p>
      <p className="hidden peer-checked:block">{text}</p>
      <label
        htmlFor="readmore"
        className="cursor-pointer underline text-gray-900"
      >
        <span className="peer-checked:hidden">Read More</span>
        <span className="hidden peer-checked:inline">Read Less</span>
      </label>
    </div>
  );
}
