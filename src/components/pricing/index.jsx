import classes from "./Pricing.module.css";
import { MyButton } from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";
export const Pricing = () => {
  const priceState = [
    {
      price: 100,
      position: "Balcony",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, numquam.",
      linkto: "http://sales/a",
      delay: 500,
    },
    {
      price: 150,
      position: "Medium",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, numquam.",
      linkto: "http://sales/b",
      delay: 0,
    },
    {
      price: 200,
      position: "Star",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, numquam.",
      linkto: "http://sales/c",
      delay: 500,
    },
  ];
  const showBox = () =>
    priceState.map((box, i) => (
      <Zoom key={i} className={classes.pricing_item} delay={box.delay}>
        <div className={classes.pricing_inner_wrapper}>
          <div className={classes.pricing_title}>
            <span>${box.price}</span>
            <span>${box.position}</span>
          </div>
          <div className={classes.pricing_description}>{box.description}</div>
          <div className={classes.pricing_buttons}>
            <MyButton
              text="Purchase"
              sx={{ color: "#fff" }}
              link={box.linkto}
            />
          </div>
        </div>
      </Zoom>
    ));
  return (
    <div className={classes.pricing_wrapper}>
      <div className={`${classes.center_wrapper} ${classes.pricing_section}`}>
        <h2>Pricing</h2>
        <div className={classes.pricing_wrapper}>{showBox()}</div>
      </div>
    </div>
  );
};
