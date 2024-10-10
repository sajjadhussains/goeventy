import React from "react";
import Image from "next/image";
import publish from "/src/assets/images/event_1.webp";
import publish1 from "/src/assets/images/event_2.webp";
import publish2 from "/src/assets/images/event_3.webp";
import icon from "@/assets/tick-icon.svg";
const EventText = () => {
  const events = [
    {
      id: 1,
      title:
        " Setup Your Event Page & Start Selling, Manage Tickets Effortlessly in Seconds",
      subTitle:
        " From creation to sales, handle it all effortlessly with just a clicks",
      list: [
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
      ],
      image: publish,
    },
    {
      id: 2,
      title:
        " Setup Your Event Page & Start Selling, Manage Tickets Effortlessly in Seconds",
      subTitle:
        " From creation to sales, handle it all effortlessly with just a clicks",
      list: [
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
      ],
      image: publish1,
    },
    {
      id: 3,
      title:
        " Setup Your Event Page & Start Selling, Manage Tickets Effortlessly in Seconds",
      subTitle:
        " From creation to sales, handle it all effortlessly with just a clicks",
      list: [
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
        {
          listItem:
            "From creation to sales, handle it all effortlessly with just a few clicks",
        },
      ],
      image: publish2,
    },
  ];
  return (
    <>
      <section className="publish-section">
        <div className="container-xl">
          <div className="section-title">
            <h1 className="hero-title">
              No Hassel.
              <br /> Create, Publish and Sale
            </h1>
            <p className="pra-one">
              Create, Manage, Sale - everything on your own with just a few
              clicks
            </p>
          </div>
          {events.map((event) => (
            <div key={event.id} className="top-container">
              <div className="segmentOne">
                <h1 className="publish-title">{event.title}</h1>
                <p className="pra-two">{event.subTitle}</p>
                <div className="list-container">
                  {event.list.map((item, index) => (
                    <div key={index + 1} className="list-item">
                      <span className="icon">
                        <Image src={icon} alt="icon" />
                      </span>
                      <span className="label">{item.listItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="img-container">
                <Image
                  src={event.image}
                  layout="responsive"
                  objectFit="cover"
                  alt="Event"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EventText;
