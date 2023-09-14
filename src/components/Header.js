import Carousel from "react-bootstrap/Carousel";
import { CRdata } from "../data/CarouselData";
import { Fragment } from "react";
export default function Header() {
  return (
    <>
      <Carousel data-bs-theme="dark" controls={true}>
        {CRdata.map((data, idx) => (
          <Carousel.Item className="h-screen w-full" key={idx}>
            <img
              className="d-block  h-full w-full object-cover"
              src={process.env.PUBLIC_URL + data.src}
              alt={`ImageNo-${idx}`}
            />
            <Carousel.Caption
              className="rounded-3xl  p-4 "
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <h5 className="text-mutes text-3xl font-bold text-gray-600">
                {data.HCaptuion}
              </h5>
              <p className="text-2xl text-gray-700">{data.PCaption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
// className="flex h-screen flex-col items-center justify-center"
