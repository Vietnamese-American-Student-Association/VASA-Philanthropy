"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import DonationBox from "./components/donationBox";
import Image from "next/image";
import VASALogo from "../public/images/VASALogo.png";
import Group_image from "../public/images/group_image1.png";
import Cultural from "../public/images/cultural.png";
import Philanthrophy from "../public/images/philanthropy.png";
import Media from "../public/images/media.png";
import Decorations from "../public/images/decorations.png";
import WalkingBo from "../public/images/WalkingBo2.gif";

const gifWidth = 150; // width of your gif in px

function WalkingGif() {
  const [direction, setDirection] = useState(1);
  const [position, setPosition] = useState(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    setPosition(-1); // Start at left edge of the donation box container

    const animate = () => {
      setPosition((prev) => {
        const max = 350; // Adjust this value to fit the width of your donation box
        let next = prev + direction * 0.5; // Adjust speed here (0.5px per frame)
        if (next > max) {
          setDirection(-1);
          next = max;
        } else if (next < 0) {
          setDirection(1);
          next = 0;
        }
        return next;
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [direction]);

  return (
    <div style={{ width: 350, height: 80, position: "absolute", top: 110, left: "27%", transform: "translateX(-110%)" }}>
      <img
        src={WalkingBo.src}
        alt="Walking Bo"
        style={{
          position: "absolute",
          left: position,
          bottom: 0,
          width: gifWidth,
          height: "auto",
          zIndex: 2,
          transition: "transform 0.2s",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function Landing() {
  return (
    <div>
      <Header />
      <div className="landing-hero">
        <Image
          src={Group_image}
          alt="Group"
          fill
          className="landing-bg-image"
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className="landing-donation-overlay" style={{ position: "relative" }}>
          <WalkingGif />
          <DonationBox />
        </div>
      </div>
      {/* Logo between hero and content */}
      <div className="landing-logo-container">
        <Image
          src={VASALogo}
          alt="VASA Logo"
          width={200}
          height={200}
          className="landing-logo-image"
        />
      </div>
      {/* What is VASA Section */}
      <div className="section-container">
        <h2 className="section-heading">WHAT IS VASA</h2>
        <div className="section-flex">
          <div className="section-col">
            <p className="section-paragraph">
              The Vietnamese American Student Association (VASA) at the
              University of Central Florida was founded in 1982 with the
              purpose of fostering the values of leadership, cultural pride,
              and community engagement. We are dedicated to celebrating and
              sharing Vietnamese–American culture through a spirit of diversity,
              inclusiveness, and lifelong friendships.
            </p>
            <p className="section-paragraph">
              Whether you're Vietnamese or not, we welcome all who are
              interested in learning about and embracing Vietnamese culture.
              Our organization thrives on the variety of backgrounds,
              perspectives, and experiences our members bring, as we believe
              that community is built through shared curiosity and connection.
            </p>
          </div>
          <div className="section-col">
            <p className="section-paragraph">
              We proudly showcase our heritage through cornerstone cultural
              events like our annual Tết Trung Thu (Mid-Autumn Festival) and
              Tết (Vietnamese Lunar New Year) shows. These events are a
              vibrant celebration of tradition and creativity, highlighting
              student performances, storytelling, and the beauty of Vietnamese
              customs for both our campus and local community.
            </p>
            <p className="section-paragraph">
              Through cultural showcases, community service, fun-filled
              meetings, and heartwarming socials, we strive to create
              meaningful experiences that not only honor our roots but also pave
              the way for a stronger, more unified future. By understanding
              where we come from, we aim to uplift one another—better
              ourselves, better our communities, and better our shared culture.
            </p>
          </div>
        </div>
      </div>
      {/* OUR PILLARS Section */}
      <section className="section-bg-top">
        <div className="section-container" style={{ textAlign: "center" }}>
          <h2 className="section-heading" style={{ textAlign: "center", fontSize: "2rem", color: "#6B4A1B" }}>
            OUR PILLARS
          </h2>
        </div>
        {/* Pillars full width */}
        <div className="pillar-fullwidth">
          {/* Pillar 1: Cultural */}
          <div className="pillar-row">
            <Image
              src={Cultural}
              alt="Cultural"
              fill
              className="pillar-image"
              style={{ objectFit: "cover" }}
            />
            <div className="pillar-overlay">
              <span className="pillar-label">CULTURAL</span>
              <span className="pillar-desc">
                Want to learn more about Vietnamese culture in a fun and creative
                way? Join us through dancing and storytelling—two traditions that
                bring Vietnam’s history, values, and spirit to life. Our cultural
                dance team features classic performances like the Fan Dance and
                Hat Dance, which are not only beautiful to watch but also rich in
                meaning and tradition. If you're more into acting or writing, you
                can join our skit team, where you’ll help with scriptwriting and
                acting out performances that share cultural stories in an engaging
                way.
              </span>
            </div>
          </div>
          {/* Pillar 2: Philanthropy */}
          <div className="pillar-row">
            <Image
              src={Philanthrophy}
              alt="Philanthropy"
              fill
              className="pillar-image"
              style={{ objectFit: "cover" }}
            />
            <div className="pillar-overlay">
              <span className="pillar-label">PHILANTHROPY</span>
              <span className="pillar-desc">
                Every year, VASA joins forces with other UNAVSA-affiliated schools
                through the Collective Philanthropy Project (CPP) to raise funds
                for a shared cause. To support this amazing cause, we host a
                variety of fun and meaningful fundraising events throughout the
                year—including Splatter Splash, Ham Chơi, and Care to Dare. Come
                out, get involved, and help make a difference!
              </span>
            </div>
          </div>
          {/* Pillar 3: Media */}
          <div className="pillar-row">
            <Image
              src={Media}
              alt="Media"
              fill
              className="pillar-image"
              style={{ objectFit: "cover" }}
            />
            <div className="pillar-overlay">
              <span className="pillar-label">MEDIA</span>
              <span className="pillar-desc">
                The Media Committee uses their photography and videography skills
                to help capture the heart of our events.
              </span>
            </div>
          </div>
          {/* Pillar 4: Decorations */}
          <div className="pillar-row">
            <Image
              src={Decorations}
              alt="Decorations"
              fill
              className="pillar-image"
              style={{ objectFit: "cover" }}
            />
            <div className="pillar-overlay">
              <span className="pillar-label">DECORATIONS</span>
              <span className="pillar-desc">
                The Decoration Committee isn’t just about making things look nice.
                They play a big role in bringing each GBM and event to life. From
                designing unique posters to painting props and creating banners,
                they work together to make sure everything fits the theme and vibe
                of the occasion.
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="donation-info">
        <div className="donation-info-inner">
          <div style={{ marginBottom: "3rem" }}>
            Your donation directly supports UCF VASA’s efforts in the Collective
            Philanthropy Project. By contributing, you're not only helping
            deliver medical care to those in need, but also investing in the next
            generation of leaders and changemakers.
          </div>
          <div>
            Every dollar counts and brings us one step closer to our goal. Thank
            you for being part of something meaningful!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}