import SinglePageH from "../components/SinglePageH";
import SinglePageTitle from "../components/SinglePageTitle";
import FontAwesome from "react-fontawesome";
import { SERdata } from "../data/Service";
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";
import { Col, Row, Tab } from "react-bootstrap";

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
      <section className="bg-gray-100 p-20">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2  ">
            <div>
              <h5 className="pb-3 text-gray-500">How we work</h5>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Seamlessly empower</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Initiatives</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Objectively maintain</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              <h5 className="pb-3 text-gray-500">Why choose our services</h5>
              <Tab.Container defaultActiveKey="first">
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="tab">
                      Strategic Plan
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className="tab">
                      Annual Budget Plan
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className="tab">
                      Include Professional Details
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first" className="pt-5">
                    <p>
                      Ut cursus massa at urnaaculis estie. Sed aliquamellus
                      vitae ultrs condmentum leo massa mollis estiegittis
                      miristum nulla sed fringilla Donec vitae orci dignissim,
                      faucibus tellus volutpat, rhoncus leo. Mauris in quam
                      tristique, dignissim urna in, molestie felis. Fusce
                      tristique, elit nec vehicula imperdiet, eros est egestas
                      odio, at aliquet elit nulla sed massa. Ut cursus massa at
                      urnaaculis estie.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="pt-5">
                    <p>
                      Ut cursus massa at urnaaculis estie. Sed aliquamellus
                      vitae ultrs condmentum leo massa mollis estiegittis
                      miristum nulla sed fringilla Donec vitae orci dignissim,
                      faucibus tellus volutpat, rhoncus leo. Mauris in quam
                      tristique, dignissim urna in, molestie felis. Fusce
                      tristique, elit nec vehicula imperdiet, eros est egestas
                      odio,
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" className="pt-5">
                    <p>
                      Ut cursus massa at urnaaculis estie. Sed aliquamellus
                      vitae ultrs condmentum leo massa mollis estiegittis
                      miristum nulla sed fringilla Donec vitae orci dignissim,
                      faucibus tellus volutpat, rhoncus leo. Mauris in quam
                      tristique, dignissim urna in, molestie felis. Fusce
                      tristique,
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
