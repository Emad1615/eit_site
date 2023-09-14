import ProgressBar from "react-bootstrap/ProgressBar";

export default function PorgressBar({ title, percentage }) {
  return (
    <>
      <div className="flex flex-wrap items-start justify-start border-b p-3 pb-2">
        <div className="w-20 pr-1">
          <span>{title}</span>
        </div>
        <div className="flex-auto p-1">
          <ProgressBar now={percentage} label={`${percentage}%`} />
        </div>
      </div>
    </>
  );
}
