import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdModal = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [showSkip, setShowSkip] = useState(false);
  const [loading, setLoading] = useState(false); // State to control loading
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setLoading(true);
          setTimeout(() => {
            onClose(); // Close modal after loading
            navigate('/services');
          }, 2000); // display loading for 2 seconds before navigating
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 15000); // display skip button after 15 seconds

    return () => {
      clearInterval(timer);
      clearTimeout(skipTimer);
    };
  }, [onClose, navigate]);

  const handleSkip = () => {
    setLoading(true);
    setTimeout(() => {
      onClose();
      navigate('/services');
    }, 2000); //loading for 2 seconds before navigating
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold">Watch this Ad to access</h2>
        <div className="relative"> {/* Container for positioning */}
          <video width="320" height="240" autoPlay >
            <source src="video/Ad.mp4" type="video/mp4" />
            {/* <source src="http://localhost:5000/api/ad-video" type="video/mp4" /> */}
          </video>
          {showSkip && (
            <button
              className="absolute bottom-2 right-2 bg-red-400 text-white px-3 py-1 rounded-full shadow"
              onClick={handleSkip}
            >
              Skip Ad
            </button>
          )}
        </div>
        <div className="mt-4">
          {loading ? (
            <p>Connecting... Please wait</p> // Loading message
          ) : (
            <>
              <p>Remaining time: {timeLeft} seconds</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdModal;