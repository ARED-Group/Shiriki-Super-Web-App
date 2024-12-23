import React, { useContext, useState, useEffect } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import { Link, useNavigate } from "react-router-dom";
import AdModal from "../Components/AdModal/AdModal";
import { TimeContext } from "../context/WifiTimeContext";

import "react-slideshow-image/dist/styles.css";
import queue from "../assets/images/Queue.png";
import restaurant from "../assets/images/restaurant.jpeg";
import survey from "../assets/images/survey.webp";
import entertainment from "../assets/images/entertainment.jpeg";
import plan from "../assets/images/plan.jpeg";
import learning from "../assets/images/learning.jpeg";
import recommendation from "../assets/images/recommendation.jpeg";
import live from "../assets/images/live.jpeg";

const slideImages = [
  { url: restaurant, caption: "Restaurants", link: "/services/restaurant" },
  { url: queue, caption: "Queue System", link: "/queue" },
  { url: survey, caption: "Survey", link: "/survey" },
  { url: entertainment, caption: "Entertainment", link: "/services/entertainment" },
];

const newFeatures = [
  { url: plan, caption: "Meal Planning" },
  { url: learning, caption: "Gamified Learning" },
  { url: recommendation, caption: "Restaurant Recommendations" },
  { url: live, caption: "Live Coaching" },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const { isConnected } = useContext(TimeContext);
  const [showAd, setShowAd] = useState(false);

  // Plain JavaScript Cookie Functions
  const setCookie = (name, value, minutes) => {
    const now = new Date();
    now.setTime(now.getTime() + minutes * 60 * 1000); // Convert minutes to milliseconds
    const expires = "expires=" + now.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const [key, value] = cookies[i].split("=");
      if (key === name) return value;
    }
    return null;
  };

  useEffect(() => {
    const adViewed = getCookie("AdViewed");
    if (!adViewed) {
      setShowAd(true);
    }
  }, []);

  const handleCloseAd = () => {
    setShowAd(false);
    setCookie("AdViewed", "true", 30); // Set cookie to expire in 30 minutes
    navigate("/services");
  };

  return (
    <div 
    className="min-h-screen"
    style={{ background: 'linear-gradient(to bottom right, #f0f4f8, #d9e8fc)', padding: '20px' }}>
      {/* Start Your Journey Section */}
      <div
  style={{
    overflowY: "scroll",
    padding: '20px',
    boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
    background: "white",
  }}
  className="rounded-xl shadow-lg"
>
        <div className="mt-8 px-1 ">
          <h2  className="text-2xl text-dark font-bold">
            Start Your Journey
          </h2>
          <Slide slidesToScroll={3} slidesToShow={3} arrows={false}>
            {slideImages.map((slideImage, index) => (
              <Link to={slideImage.link} className="cursor-pointer mx-2" key={index}>
                <div className="relative group w-32 h-48 rounded-xl overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slideImage.url})` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center px-4 text-center bg-black bg-opacity-50">
                    <span className="text-white text-sm font-semibold">{slideImage.caption}</span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            ))}
          </Slide>
        </div>
      </div>

      {/* Latest Additions Section */}
      <div
  style={{
    background:'white',
    overflowY: "scroll",
    padding: '20px',
    boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
  }}
  className="rounded-xl shadow-lg mt-4"
>
        <h2 className="text-2xl text-rgba(18, 50, 75, 0.5) font-bold mb-4">Latest Additions</h2>
        <Zoom slidesToScroll={1} scale={0.8} slidesToShow={1} arrows={true}>
          {newFeatures.map((slideImage, index) => (
            <div key={index} className="flex justify-center items-center">
              <div
                className="relative w-80 h-48 rounded-xl bg-cover bg-center overflow-hidden shadow-2xl transition-all transform hover:scale-105 hover:shadow-2xl"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
                <div className="absolute bottom-0 w-full px-4 py-2 text-center text-white bg-opacity-60">
                  <h3 className="text-lg font-semibold">{slideImage.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </Zoom>
      </div>

      {/* Ad Model */}
      {showAd && (
        <AdModal onClose={handleCloseAd} />
      )}
    </div>
  );
};

export default HomeScreen;
