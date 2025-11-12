import React from "react";

interface FacebookVideoProps {
  videoUrl: string;
}

const FacebookVideo: React.FC<FacebookVideoProps> = ({ videoUrl }) => {
  const encodedUrl = encodeURIComponent(videoUrl);
  const embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=560`;

  return (
    <div className="video-wrapper">
      <iframe
        src={embedSrc}
        width="560"
        height="315"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FacebookVideo;
