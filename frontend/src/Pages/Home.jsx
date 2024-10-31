
import React from "react";
import Header from "../Components/Header";
import ServicesSection from "../Components/ServicesSection";
import Recents from "../Components/Recents";
import BottomNavBar from "../Components/BottomNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faUtensils,
  faPersonWalkingDashedLineArrowRight,
  faClipboardList,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../Components/carousel/carousel";

const Home = () => {
  const services = [
    {
      name: "Food Ordering",
      icon: (
        <FontAwesomeIcon
          icon={faUtensils}
          style={{ color: "#FBA4D3" }}
          size="xs"
        />
      ),
    },
    {
      name: "Queuing",
      icon: (
        <FontAwesomeIcon
          icon={faPersonWalkingDashedLineArrowRight}
          style={{ color: "#FF4646" }}
        />
      ),
    },
    {
      name: "Fill Survey",
      icon: (
        <FontAwesomeIcon icon={faClipboardList} style={{ color: "#59CAB3" }} />
      ),
    },
    {
      name: "Feedback",
      icon: (
        <FontAwesomeIcon icon={faCommentDots} style={{ color: "#FFBF00" }} />
      ),
    },
    {
      name: "Buy Data",
      icon: <FontAwesomeIcon icon={faUtensils} style={{ color: "#824394" }} />,
    },
    {
      name: "Need Help",
      icon: <FontAwesomeIcon icon={faQuestion} style={{ color: "#4285F4" }} />,
    },
  ];

  const recents = [
    { icon: <FontAwesomeIcon icon={faEnvelope} />, label: "Food Ordering" },
    { icon: <FontAwesomeIcon icon={faEnvelope} />, label: "Queuing" },
    { icon: <FontAwesomeIcon icon={faEnvelope} />, label: "Others" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col bg-gray-100 p-6 md:p-2">
        {/* <div
          className="lg:block bg-cover bg-center h-64 md:h-96 border border-black"
          style={{ backgroundImage: "url(/your-hero-image.jpg)" }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Welcome to Our Digital Platform
            </h1>
          </div>
        </div> */}
        <div className="w-full lg:h-64 h-32 shadow-md">
          <Carousel />
        </div>
        <div className="p-6">
          <Recents title="Recents." recents={recents} />
          <ServicesSection title="Our Services" services={services} />
        </div>
      </main>
      <BottomNavBar />
    </div>
  );
};

export default Home;
