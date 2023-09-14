import SinglePageH from "../components/SinglePageH";
import SinglePageTitle from "../components/SinglePageTitle";
import FontAwesome from "react-fontawesome";
import { SERdata } from "../data/Service";

export default function Service() {
  return (
    <>
      <SinglePageTitle title={"OUR SERVICE"} />
      <section className="container p-20">
        <SinglePageH header={"Solutions For Your Business!"} />
        <div className="grid gap-4  pt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {SERdata.map((data) => (
            <div className="text-center" key={data.Id}>
              <FontAwesome
                className="  block  rounded-3xl shadow-md"
                name={data.icon}
                style={{
                  fontSize: "18px",
                  color: "orange",
                  backgroundColor: "#f3f4f6",
                  width: "30%",
                  margin: "auto",
                  padding: "36px",
                }}
              />
              <h6 className="pt-4 text-gray-500">{data.HCaptuion}</h6>
              <p className="text-gray-400">{data.PCaption}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
