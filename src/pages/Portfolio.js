import { useRef, useState } from "react";
import SinglePageTitle from "../components/SinglePageTitle";
import { Portdata } from "./../data/CarouselData";
import SinglePageH from "./../components/SinglePageH";
import { Galleria } from "primereact/galleria";

export default function Portfolio() {
  const [images, setImages] = useState(Portdata);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleria = useRef(null);
  const itemTemplate = (item) => {
    return (
      <img
        src={process.env.PUBLIC_URL + "/" + item.src}
        alt={item.HCaptuion}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={process.env.PUBLIC_URL + "/" + item.src}
        alt={item.HCaptuion}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <>
      <SinglePageTitle title={"OUR PORTFOLIO"} />
      <section className="container  p-20">
        <SinglePageH header={"PORTFOLIO"} />
        <Galleria
          ref={galleria}
          value={images}
          numVisible={7}
          style={{ maxWidth: "850px" }}
          activeIndex={activeIndex}
          onItemChange={(e) => setActiveIndex(e.index)}
          circular
          fullScreen
          showItemNavigators
          showThumbnails={false}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
        />
        <div className="grid gap-4  pt-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {images &&
            images.map((image, index) => {
              let imgEl = (
                <img
                  className="rounded-md  shadow-md"
                  src={process.env.PUBLIC_URL + "/" + image.src}
                  alt={image.HCaptuion}
                  style={{ cursor: "pointer", height: "250px" }}
                  onClick={() => {
                    setActiveIndex(index);
                    galleria.current.show();
                  }}
                />
              );
              return <div key={index}>{imgEl}</div>;
            })}
        </div>
      </section>
    </>
  );
}
