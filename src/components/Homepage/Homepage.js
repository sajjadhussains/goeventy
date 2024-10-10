import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroImage from "/src/assets/images/hero_image.webp";
import Publish from "../Publish/Publish";
import PublishTwo from "../PublishTwo/PublishTwo";
import PublishThree from "../PublishThree/PublishThree";
import Link from "next/link";
import Typed, { ReactTyped } from "react-typed";
import HeroSection from "../Herosection/Herosection";
import Reviews from "../Reviews/Reviews";
import TicketingSolution from "../TicketingSolution/TicketingSolution";
import EventText from "../EventText/EventText";

const Homepage = () => {
  return (
    <>
      <section>
        <HeroSection />
        <EventText />
        {/*<Publish />
        <PublishTwo />
        <PublishThree />*/}
        <Reviews />
        <TicketingSolution />
      </section>
    </>
  );
};

export default Homepage;
