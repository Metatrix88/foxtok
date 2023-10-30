import React, {forwardRef, useImperativeHandle, useRef} from 'react';

export const Player = forwardRef (({ id, src, className },ref) => {
  const videoRef = useRef(null);
  useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current.play();
    },
    pause: () => {
      videoRef.current.pause();
    },
    stop: () => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    },
  }));

  const handleEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <video
      ref={videoRef}
      id={id}
      className={className}
      src={src}
      onEnded={handleEnded}
    >
    </video>
  )
});