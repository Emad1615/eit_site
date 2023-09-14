import { ProgressBar } from "react-bootstrap";
import Client from "../components/Client";
// import PorgressBar from "../components/PorgressBar";
import SinglePageH from "../components/SinglePageH";
import SinglePageTitle from "../components/SinglePageTitle";
import { FadeIn } from "react-slide-fade-in";
import PorgressBar from "../components/PorgressBar";

export default function About() {
  return (
    <>
      <SinglePageTitle title={"ABOUT US"} />
      <section className="container p-20">
        <SinglePageH header={"A Few Words About Us"} />
        <FadeIn
          from="bottom"
          positionOffset={0}
          triggerOffset={0}
          delayInMilliseconds={300}
        >
          <div className="flex  flex-wrap items-start justify-center gap-5 pt-3">
            <div className="sm:flex-auto lg:flex-1">
              <p className=" text-sm text-gray-500">
                Appropriately benchmark bricks-and-clicks e-business before
                parallel communities. Completely synergize exceptional
                outsourcing with principle-centered platforms. Credibly unleash
                synergistic internal or "organic" sources without functionalized
                technology. Objectively brand granular human capital without
                goal-oriented e-business. Competently predominate
                multifunctional web-readiness via state of the art strategic
                theme areas.
              </p>
            </div>
            <div className="sm:flex-auto lg:flex-1">
              <p className=" text-sm text-gray-500">
                Completely pontificate timely metrics rather than accurate
                growth strategies. Seamlessly impact premium communities whereas
                real-time networks. Professionally transform high-payoff
                collaboration and idea-sharing before resource maximizing supply
                chains. Energistically evisculate timely manufactured products
                for resource-leveling ROI. Assertively create client-focused
                vortals whereas functional potentialities.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
      <section className="container pb-3">
        <SinglePageH header={"our professional skills"} />
        <div className="flex flex-wrap items-start justify-start gap-5 pt-3">
          <div className="sm:flex-auto lg:flex-1">
            <h5 className="font-semibold text-gray-500">
              Completely pontificate timely metrics rather than accurate
            </h5>
            <p className=" text-sm text-gray-500">
              Completely pontificate timely metrics rather than accurate growth
              strategies. Seamlessly impact premium communities whereas
              real-time networks. Professionally transform high-payoff
              collaboration and idea-sharing before resource maximizing supply
              chains. Energistically evisculate timely manufactured products for
              resource-leveling ROI. Assertively create client-focused vortals
              whereas functional potentialities.
            </p>
          </div>
          <div className="w-full sm:flex-auto lg:flex-1 ">
            <h5 className="text-center font-semibold text-gray-500">
              Our skills
            </h5>
            <div className="border p-3">
              <PorgressBar title={"Solution"} percentage={80} />
              <PorgressBar title={"Creativity"} percentage={70} />
              <PorgressBar title={"Finance"} percentage={60} />
              <PorgressBar title={"Brand"} percentage={50} />
            </div>
          </div>
        </div>
      </section>
      <section className="container p-20">
        <SinglePageH header={"Satisfied Customer"} />
        <div className="h-1/2"></div>
      </section>
      <Client />
    </>
  );
}
