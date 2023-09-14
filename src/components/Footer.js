import FontAwesome from "react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer style={{ backgroundColor: "#313131" }}>
        <div className="container mx-auto grid gap-4  sm:grid-cols-1 lg:grid-cols-3">
          <div
            style={{
              padding: "20px",
            }}
          >
            <img
              className="m-auto"
              src={process.env.PUBLIC_URL + "/assets/EITLogo.png"}
              alt=""
              style={{ height: "34px", border: "1px solid #343a40" }}
            />
            <p
              className="from-neutral-500 pt-1 text-center font-semibold text-gray-300"
              style={{ fontSize: "12px" }}
            >
              Continually matrix cross functional opportunities whereas ethical
              information. Compellingly streamline enabled human capital before
              resource-leveling internal or "organic".
            </p>
          </div>
          <div
            style={{
              borderLeft: "1px solid #343a40",
              borderRight: "1px solid #343a40",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h6 className="text-white">We work for your profit</h6>
            <p
              className="from-neutral-500 text-center font-semibold text-gray-300"
              style={{
                paddingTop: "10px",
                fontSize: "12px",
              }}
            >
              Continually matrix cross functional opportunities whereas ethical
              information. Compellingly streamline enabled human capital before
              resource-leveling internal or "organic".
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h6 className="text-white">Contact Us Today</h6>
            <p
              className="from-neutral-500 text-center font-semibold text-gray-300"
              style={{
                paddingTop: "10px",
                fontSize: "12px",
              }}
            >
              Call Us 666 777 888 OR 111 222 333 Send an Email on
              <small className="text-orange-500">
                {" "}
                contact@domain.com
              </small>{" "}
              Visit Us 123 Fake Street- Blla 12358 Fake Kingdom
            </p>
            <div className="flex flex-row flex-wrap items-start justify-center gap-4">
              <a href="#" className="no-underline" style={{ fontSize: "30px" }}>
                <FontAwesome
                  className="text-muted block pt-3"
                  name="facebook"
                />
              </a>
              <a href="#" className="no-underline" style={{ fontSize: "30px" }}>
                <FontAwesome className="text-muted block pt-3" name="twitter" />
              </a>
              <a href="#" className="no-underline" style={{ fontSize: "30px" }}>
                <FontAwesome className="text-muted block pt-3" name="google" />
              </a>
              <a href="#" className="no-underline" style={{ fontSize: "30px" }}>
                <FontAwesome className="text-muted block pt-3" name="reddit" />
              </a>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#2d2d2d", padding: "15px" }}>
          <p
            className="container"
            style={{
              color: "#6b6b6b",
              fontWeight: "600",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            © E.I.T Software Company. All rights reserved. | Design By:&nbsp;
            <span className="text-orange-500">E.I.T Team</span>
          </p>
        </div>
      </footer>
    </>
  );
}
