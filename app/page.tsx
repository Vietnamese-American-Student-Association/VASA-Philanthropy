"use client";

import Image from "next/image";
import Header from "./components/header";
import MobileHeader from "./components/MobileHeader";
import DonationBox from "./components/donationBox";
import VASALogo from "../public/images/VASALogo.png";
import Group_image from "../public/images/group_image1.png";
import Cultural from "../public/images/cultural.png";
import Philanthrophy from "../public/images/philanthropy.png";
import Media from "../public/images/media.png";
import Decorations from "../public/images/decorations.png";
import MobileFooter from "./components/MobileFooter";
import Footer from "./components/footer";
import WalkingGif from "./components/WalkingGif";

export default function Landing() {
  return (
    <div id="page-container">
      {/* Render both headers; CSS decides visibility (prevents hydration flicker) */}
      <div className="desktop-only"><Header /></div>
      <div className="mobile-only"><MobileHeader /></div>

      {/* HERO: stable height box + Image fill = no reflow on iOS */}
      <section
        className="landing-hero"
        style={{
          position: "relative",
          width: "100%",
          /* fixed, predictable box so 'fill' doesn't cause layout thrash */
          minHeight: "85vh",
          /* strong guard for iOS */
          maxHeight: "85vh",
          overflow: "hidden",
        }}
      >
        <Image
          src={Group_image}
          alt="Group"
          fill
          className="landing-bg-image"
          sizes="100vw"
          priority
          placeholder="blur"
          /* avoid inline objectFit mutations; keep it simple for iOS */
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <div className="landing-dark-overlay" aria-hidden="true" />

        {/* No JS conditionals for mobile—CSS controls visibility */}
        <div
          className="landing-donation-overlay desktop-only"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "7vw",
            zIndex: 1,
            pointerEvents: "none", // prevent overlay from trapping touch on iOS
          }}
        >
          <div style={{ pointerEvents: "auto" }}>
            <DonationBox />
          </div>
          {/* Keep the GIF off mobile via CSS; desktop is fine */}
          <WalkingGif />
        </div>
      </section>

      {/* LOGO between hero and content — static dimensions, no layout pop */}
      <div
        className="landing-logo-container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          background: "transparent",
          marginTop: "-100px",
          marginBottom: "2rem",
          marginRight: "2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Image
          src={VASALogo}
          alt="VASA Logo"
          width={200}
          height={200}
          className="landing-logo-image"
          quality={90}
          placeholder="empty"
          priority={false}
        />
      </div>

      {/* WHAT IS VASA */}
      <div className="section-container">
        <h2 className="section-heading">WHAT IS VASA</h2>
        <div className="section-flex">
          <div className="section-col">
            <p className="section-paragraph">
              The Vietnamese American Student Association (VASA) at the University of Central Florida
              was founded in 1982 with the purpose of fostering the values of leadership, cultural pride,
              and community engagement. We are dedicated to celebrating and sharing Vietnamese–American
              culture through a spirit of diversity, inclusiveness, and lifelong friendships.
            </p>
            <br />
            <p className="section-paragraph">
              Whether you're Vietnamese or not, we welcome all who are interested in learning about
              and embracing Vietnamese culture. Our organization thrives on the variety of backgrounds,
              perspectives, and experiences our members bring, as we believe that community is built
              through shared curiosity and connection.
            </p>
          </div>
          <br />
          <div className="section-col">
            <p className="section-paragraph">
              We proudly showcase our heritage through cornerstone cultural events like our annual
              Tết Trung Thu (Mid-Autumn Festival) and Tết (Vietnamese Lunar New Year) shows. These
              events are a vibrant celebration of tradition and creativity, highlighting student
              performances, storytelling, and the beauty of Vietnamese customs for both our campus
              and local community.
            </p>
            <br />
            <p className="section-paragraph">
              Through cultural showcases, community service, fun-filled meetings, and heartwarming
              socials, we strive to create meaningful experiences that not only honor our roots but
              also pave the way for a stronger, more unified future. By understanding where we come
              from, we aim to uplift one another—better ourselves, better our communities, and better
              our shared culture.
            </p>
          </div>
        </div>
      </div>

      {/* PILLARS — stable full-bleed rows; no runtime checks; all lazy images */}
      <section className="section-bg-top">
        <div className="section-container" style={{ textAlign: "center" }}>
          <h2
            className="section-heading"
            style={{ textAlign: "center", fontSize: "2rem", color: "#6B4A1B" }}
          >
            OUR PILLARS
          </h2>
        </div>

        <div className="pillar-fullwidth">
          {/* Cultural */}
          <div className="pillar-row" style={{ position: "relative", height: 350 }}>
            <Image
              src={Cultural}
              alt="Cultural"
              fill
              className="pillar-image"
              sizes="100vw"
              placeholder="blur"
              loading="lazy"
              quality={70}
              style={{ objectFit: "cover" }}
            />
            <div className="pillar-overlay">
              <span className="pillar-label">CULTURAL</span>
              <span className="pillar-desc">
                Want to learn more about Vietnamese culture in a fun and creative way? Join us through dancing
                and storytelling—two traditions that bring Vietnam's history, values, and spirit to life. Our
                cultural dance team features classic performances like the Fan Dance and Hat Dance. If you’re
                into acting or writing, join our skit team to help script and perform engaging cultural stories.
              </span>
            </div>
          </div>

          {/* Philanthropy */}
          <div className="pillar-row" style={{ position: "relative", height: 350 }}>
            <Image
              src={Philanthrophy}
              alt="Philanthropy"
              fill
              className="pillar-image"
              sizes="100vw"
              placeholder="blur"
              loading="lazy"
              quality={70}
              style={{ objectFit: "cover" }}
            />
            <div className="pillar-overlay">
              <span className="pillar-label">PHILANTHROPY</span>
              <span className="pillar-desc">
                Each year we join UNAVSA’s Collective Philanthropy Project (CPP) to fund a shared cause—through
                events like Splatter Splash, Ham Chơi, and Care to Dare. Come out, get involved, and help make a
                difference!
              </span>
            </div>
          </div>

          {/* Media */}
          <div className="pillar-row" style={{ position: "relative", height: 350 }}>
            <Image
              src={Media}
              alt="Media"
              fill
              className="pillar-image"
              sizes="100vw"
              placeholder="blur"
              loading="lazy"
              quality={70}
              style={{ objectFit: "cover" }}
            />
            <div className="pillar-overlay">
              <span className="pillar-label">MEDIA</span>
              <span className="pillar-desc">
                Our Media Committee captures the heart of our events through photography and videography.
              </span>
            </div>
          </div>

          {/* Decorations */}
          <div className="pillar-row" style={{ position: "relative", height: 350 }}>
            <Image
              src={Decorations}
              alt="Decorations"
              fill
              className="pillar-image"
              sizes="100vw"
              placeholder="blur"
              loading="lazy"
              quality={70}
              style={{ objectFit: "cover" }}
            />
            <div className="pillar-overlay">
              <span className="pillar-label">DECORATIONS</span>
              <span className="pillar-desc">
                Decorations brings every GBM and event to life—from posters and props to banners that match each
                theme and vibe.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION BLURB */}
      <section className="donation-info">
        <div className="donation-info-inner">
          <div style={{ marginBottom: "3rem" }}>
            Your donation directly supports UCF VASA’s efforts in the Collective Philanthropy Project.
            You’re helping deliver medical care to those in need and investing in future leaders.
          </div>
          <div>
            Every dollar counts—thanks for being part of something meaningful!
          </div>
        </div>
      </section>

      {/* Render both footers; CSS chooses one */}
      <div className="desktop-only"><Footer /></div>
      <div className="mobile-only"><MobileFooter /></div>
    </div>
  );
}
