import React from "react";
import Slider from "../components/Slider";
import AboutPage from "./AboutPage";
import Screenshots from "../components/Screenshots";
import Design from "../components/Design";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutPage isPreview={false} />
      <Screenshots />
      <Design />
    </>
  );
}
