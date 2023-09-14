import Carousel from "react-bootstrap/Carousel";
export default function SliderComponent({ data }) {
  return (
    <>
      <Carousel data-bs-theme="dark" controls={true}>
        {data.map((data, idx) => (
          <Carousel.Item className="h-80 w-full" key={idx}>
            <Carousel.Caption
              className="  p-4 "
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/" + data.src}
                alt=""
                className={`m-auto rounded-full p-3`}
                style={{ width: "100px", height: "100px" }}
              />
              <h6 className="text-mutes font-bold text-gray-600">
                {data.HCaptuion}
              </h6>
              <p className=" text-gray-700">{data.PCaption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
