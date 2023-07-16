"use client";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <>
      <div className="video2">
        <div>
          <video width="100%" autoPlay muted>
            <source src="./assets/dmtaller.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
export default Video;
