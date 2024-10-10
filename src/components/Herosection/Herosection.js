import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroImage from "/src/assets/images/hero_image.webp";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  const [showFirstEffect, setShowFirstEffect] = useState(0);
  const texts = ["Festival", "Concert", "Comedy Show", "Seminar", "Sports"];
  const [typingComplete, setTypingComplete] = useState(false);

  // Callback to set typing complete status when typing finishes
  const onTypingComplete = () => {
    setTypingComplete(true);
  };

  {
    /*
    seEffect(() => {
    const interval = setInterval(() => {
      setShowFirstEffect((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);
    */
  }
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
                objectFit="cover"
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
