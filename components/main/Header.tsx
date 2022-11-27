const Header = () => {
  return (
    <video loop autoPlay muted>
      <source src="/main-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Header;
