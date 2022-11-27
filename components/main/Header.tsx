const Header = () => {
  return (
    <div className="h-full">
      <video
        className="h-full"
        width="100%"
        height="100%"
        loop={true}
        autoPlay={true}
        muted
      >
        <source src="/main-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Header;
