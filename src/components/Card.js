export default function Card({ data }) {
  return (
    <div className="grid overflow-hidden rounded-xl bg-white shadow-md sm:grid-cols-1 lg:grid-cols-2">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/" + data.src}
          alt=""
          className="d-block  h-full w-full object-cover"
        />
      </div>
      <div className="p-10">
        <h3 className="text-xl  font-bold text-orange-500">{data.HCaptuion}</h3>
        <p>{data.PCaption}</p>
      </div>
    </div>
  );
}
