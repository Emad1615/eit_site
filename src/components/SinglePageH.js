import FontAwesome from "react-fontawesome";
import { FadeIn } from "react-slide-fade-in";

export default function SinglePageH({ header }) {
  return (
    <>
      <h3
        className="text-center text-3xl font-semibold text-gray-600"
        style={{ textTransform: "uppercase" }}
      >
        <FadeIn
          from="bottom"
          positionOffset={0}
          triggerOffset={0}
          delayInMilliseconds={300}
        >
          {header}
        </FadeIn>
        <FontAwesome
          className=" text-muted block pt-3"
          name="circle"
          style={{ fontSize: "18px" }}
        />
        <hr />
      </h3>
    </>
  );
}
