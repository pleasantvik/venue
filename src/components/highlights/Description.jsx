import { Fade } from "react-awesome-reveal";
import classes from "./Description.module.css";
export const Description = () => {
  return (
    <Fade>
      <div className={classes.center_wrapper}>
        <h2>Highlights</h2>
        <div className={classes.highlight_description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
          quisquam expedita eius tenetur totam ex soluta hic sit itaque
          perspiciatis atque consequatur, natus eos, quidem tempora ab facere
          dignissimos velit qui minima aliquid nihil necessitatibus, placeat
          alias. Cum, alias! Molestiae praesentium corrupti rerum impedit
          necessitatibus consequatur reiciendis amet facilis nostrum!
        </div>
      </div>
    </Fade>
  );
};
