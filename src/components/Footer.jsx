import { Fade } from "react-awesome-reveal";
export const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade triggerOnce delay={500}>
        <div className="header_logo">
          <div className="font_righteous footer_logo_venue">The Venue</div>
          <div className="footer_copyright">
            The venue 2022, &copy; all rights reserved
          </div>
        </div>
      </Fade>
    </footer>
  );
};
