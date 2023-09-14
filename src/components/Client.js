import FontAwesome from "react-fontawesome";
import { FadeIn } from "react-slide-fade-in";

export default function Client() {
  return (
    <>
      <section className=" bg-gray-100">
        <div className="container mx-auto  p-20">
          <h3 className="text-center text-3xl font-bold text-gray-600">
            <FadeIn
              from="bottom"
              positionOffset={0}
              triggerOffset={0}
              delayInMilliseconds={300}
            >
              Our Clients
              <hr />
            </FadeIn>
            <FontAwesome className="text-muted block pt-3" name="circle" />
          </h3>
          <FadeIn
            from="bottom"
            positionOffset={0}
            triggerOffset={0}
            delayInMilliseconds={400}
          >
            <div className="flex flex-wrap items-start justify-center gap-20 pt-10">
              <img
                src="http://www.sakrelqahira.com/assets-landingPage/images/SaqrLogo.png"
                alt=""
                className={`rounded-lg `}
                style={{ width: "100px", height: "100px" }}
              />
              <img
                src="https://attamin.com/assets/img/logo-1.jpg  "
                alt=""
                className={`rounded-lg `}
                style={{ width: "100px", height: "100px" }}
              />
              <img
                src="http://bllana.com/assets-landingPage/images/emad.png"
                alt=""
                className={`rounded-lg `}
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
