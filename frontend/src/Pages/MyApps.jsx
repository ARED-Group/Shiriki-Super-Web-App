import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "../Components/BottomNavBar.jsx";
import queue from "../assets/images/Queue.png";
import restaurant from "../assets/images/restaurant.jpeg";
import entertainment from "../assets/images/entertainment.jpeg";
import survey from "../assets/images/survey.webp";

const slideImages = [
    { url: restaurant, caption: "Restaurants", link: "/services/restaurant" },
    { url: queue, caption: "Queue System", link: "/queue" },
    { url: survey, caption: "Survey", link: "/survey" },
    { url: entertainment, caption: "Entertainment", link: "/services/entertainment" },
];

const MyApps = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const apps = [
        {
            name: "Restaurant",
            description:
                "Explore a world of culinary delights with our virtual restaurant chooser. Discover new dining options, customize your preferences, and make reservations effortlessly—all from the comfort of your device.",
            lastUpdated: "December 2024",
            img: restaurant,
            route: "/services/restaurant",
        },
        {
            name: "Queueing",
            description:
                "Effortlessly manage your queues with our virtual ticket generator. Streamline customer service, reduce wait times, and enhance satisfaction in a user-friendly digital environment.",
            img: queue,
            route: "/queue",
        },
        {
            name: "Entertainment",
            description:
                "Dive into a world of virtual entertainment and live streams. Experience concerts, gaming events, and interactive shows—all from the comfort of your home.",
            lastUpdated: "December 2024",
            img: entertainment,
            route: "/services/entertainment",
        },
        {
            name: "Survey",
            description:
                "Participate in engaging online surveys and share your valuable insights. Help shape the future by voicing your opinions on trending topics and services.",
            lastUpdated: "December 2024",
            img: survey,
            route: "/survey",
        },
    ];

    return (
        <div className="bg-gray-50 text-dark min-h-screen flex flex-col justify-between">
            {/* Header Section */}
            <div className="flex items-center px-4 py-6 bg-white shadow-md">
                <span
                    onClick={goBack}
                    className="flex items-center text-2xl font-semibold text-gray-700 cursor-pointer hover:text-gray-900 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    My Apps
                </span>
            </div>

            {/* Apps Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
                {apps.map((app, index) => (
                    <div
                        key={index}
                        className="relative group rounded-lg overflow-hidden bg-white shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                        onClick={() => navigate(app.route)}
                    >
                        {/* App Image */}
                        <img
                            src={app.img}
                            alt={app.name}
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition duration-300"></div>

                        {/* App Details */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                            <h3 className="text-xl font-semibold">{app.name}</h3>
                            <p className="text-sm mt-2">{app.description}</p>
                            <p className="text-xs mt-2 text-gray-300">
                                Last Updated: {app.lastUpdated}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation */}
            <div className="sticky bottom-0 bg-white shadow-lg">
                <BottomNavBar />
            </div>
        </div>
    );
};

export default MyApps;
