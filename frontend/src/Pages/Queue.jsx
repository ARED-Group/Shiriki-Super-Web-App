import { Button, Typography } from "@mui/material";
import { Image } from "primereact/image";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import queue from "../assets/images/Queue.png";

const Queue = () => {
  const navigate = useNavigate();

  const handleNext = () => {
      navigate("/queue-details");
  };

  return (
    <div
  className="min-h-screen bg-gray-100"
  style={{
    background: 'linear-gradient(to bottom right, #f0f4f8, #d9e8fc)',
    padding: '5px',
  }}
>
      <Header />
      <div className="flex flex-col lg:flex-row items-center justify-center h-full">
        <div className="flex-1 p-8 lg:p-16">
          <p  className="text-dark mb-8 text-3xl">
            Welcome to our Queue
          </p>
          <div className="w-full h-96 mt-10 lg:mt-20">
            <Image
              src={queue}
              alt="Queue Image"
              className="rounded-sm object-contain"
            />
          </div>
          <Button
            onClick={handleNext}
            variant="contained"
            color="primary"
            className="mt-8"
          >
            Next
            <svg
              className="ml-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12H19M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Queue;