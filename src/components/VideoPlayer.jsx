import { useEffect, useRef } from "react";

const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Calling video.play()");
      ref.current.play();
    } else {
      console.log("Calling video.pause()");
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video src={src} ref={ref} loop playsInline />;
};

export default VideoPlayer;
