import FontAwesome from "react-fontawesome";
export default function Item({ data }) {
  return (
    <>
      <div className="mb-3 flex rounded-lg bg-white p-2 shadow-md">
        <div className="flex-none">
          <FontAwesome
            className="block text-2xl font-bold text-orange-500"
            name={data.FontAwesome}
            style={{ padding: "0px 17px" }}
          />
        </div>
        <div className="flex-auto ">
          <h3 className="text-lg font-bold text-gray-500">{data.HCaptuion}</h3>
          <p>{data.PCaption}</p>
        </div>
      </div>
    </>
  );
}
