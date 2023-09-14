import Header from "./../components/Header";
import FontAwesome from "react-fontawesome";
import { OFFdata } from "./../data/OfferData";
import { CapData } from "./../data/CapabilitiesData";
import { people } from "./../data/TeamData";

import Card from "../components/Card";
import { Fragment, useState } from "react";
import Item from "../components/Item";
import { FadeIn } from "react-slide-fade-in";
import Client from "../components/Client";
import SinglePageH from "../components/SinglePageH";
import SliderComponent from "../components/SliderComponent";
import { STCLRdata } from "../data/CarouselData";

export default function Index() {
  const [onHover, setOnHover] = useState(false);
  return (
    <>
      <Header />
      <section className=" bg-white">
        <div className="container mx-auto  p-20">
          <h3 className="text-center text-3xl font-bold text-gray-600">
            <FadeIn
              from="bottom"
              positionOffset={0}
              triggerOffset={0}
              delayInMilliseconds={300}
            >
              What We Offer
              <hr />
            </FadeIn>
            <FontAwesome className=" text-muted block pt-3" name="circle" />
          </h3>
          <FadeIn
            from="bottom"
            positionOffset={0}
            triggerOffset={0}
            delayInMilliseconds={400}
          >
            <div className="grid grid-cols-2  gap-4 pt-6">
              {OFFdata.map((data, idx) => (
                <Fragment key={idx}>
                  <Card data={data} />
                </Fragment>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      <section className=" bg-gray-100">
        <div className="container mx-auto  p-20">
          <h3 className="text-center text-3xl font-bold text-gray-600">
            <FadeIn
              from="bottom"
              positionOffset={0}
              triggerOffset={0}
              delayInMilliseconds={300}
            >
              Our Capabilities
              <hr />
            </FadeIn>
            <FontAwesome className="text-muted block pt-3" name="circle" />
          </h3>
          <div className="mx-auto grid gap-4  pt-6 sm:grid-cols-1 lg:grid-cols-2">
            <FadeIn
              from="bottom"
              positionOffset={0}
              triggerOffset={0}
              delayInMilliseconds={400}
            >
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/Capabilities.jpg"}
                  alt="Capabilities"
                  className="d-block  h-full w-full rounded-3xl object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn
              from="bottom"
              positionOffset={0}
              triggerOffset={0}
              delayInMilliseconds={400}
            >
              <div className="p-10">
                {CapData.map((data, idx) => (
                  <Item data={data} key={idx} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto  p-20">
          <h3 className="text-center text-3xl font-bold text-gray-600">
            <FadeIn
              from="bottom"
              positionOffset={0}
              triggerOffset={0}
              delayInMilliseconds={300}
            >
              Our Team
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
            <div className="bg-white py-10 sm:py-10">
              <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                    Meet our leadership
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit
                    odio vitae elementum enim vitae ullamcorper suspendisse.
                  </p>
                </div>
                <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className="flex items-center gap-x-6">
                        <img
                          className="h-16 w-16 rounded-full"
                          src={person.imageUrl}
                          alt=""
                        />
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            {person.name}
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-orange-500">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <Client />
      <section className="container p-20">
        <SinglePageH header={"Our Satisfied clients"} />
        <SliderComponent data={STCLRdata} />
      </section>
    </>
  );
}
