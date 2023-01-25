const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="--flex-center --py2">
      <p>All Rights Reserved. &copy; {currentYear}</p>
    </div>
  );
};

export default Footer;
