import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroImage from "/src/assets/images/hero_image.webp";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container-xl">
          <div className="top-container">
            <div className="text-container">
              <div className="hero-title">
                Simplified Ticketing Solutions For&nbsp;
                <ReactTyped
                  typeSpeed={20}
                  backSpeed={100}
                  backDelay={2500}
                  loop={true}
                  fadeOut={true}
                  fadeOutClass={"typed-fade-out"}
                  fadeOutDelay={150}
                  showCursor={false}
                  className="text-highlight"
                  strings={[
                    "Festival",
                    "Concert",
                    "Comedy Show",
                    "Seminar",
                    "Sports",
                  ]}
                />
              </div>

              <p className="text-desc">
                Effortlessly manage event ticketing with our intuitive SaaS
                platform. Say goodbye to complexities and hello to streamlined
                ticketing solutions.
              </p>
              <div className="button-segment">
                <Link href="/contact">
                  <button className=" btn btn-selling ">
                    Start Selling ticket
                  </button>
                </Link>
              </div>
            </div>

            <div className=" img-container">
              <Image
                src={heroImage}
                layout="responsive"
                objectFit="contain"
                priority={false}
                alt="hero-image1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
