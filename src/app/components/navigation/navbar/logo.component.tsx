"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <div className="block w-50">
        <Link href="/" style={{ display: showButton ? "none" : "block" }}>
          <Image
            src="/images/conscious-cog-favicon.png"
            alt="Logo"
            width={"200"}
            height={width < 1024 ? "45" : "74"}
            className="flex relative"
          />
        </Link>
        <div
          title="Home"
          className="visible"
          style={{
            display: showButton ? "block" : "none",
          }}
        ></div>
      </div>
    </>
  );
};

export default Logo;
