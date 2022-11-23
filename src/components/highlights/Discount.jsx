import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { MyButton } from "../utils/MyButton";
export const Discount = () => {
  const [start, setStart] = useState(0);
  const end = 30;
  const percentage = () => {
    if (start < end) {
      setStart((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prev) => prev + 1);
      }, 30);
    }
  }, [start]);
  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            // console.log(inView);
            if (inView) {
              percentage();
            }
          }}
        >
          <div className="discount_percentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase the ticket before 25th December</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum omnis voluptate reprehenderit, totam animi dicta,
              dolores maiores sunt a fugit vitae. Blanditiis qui, omnis
              reiciendis eos est laborum non quis amet corrupti quae dignissimos
              totam aliquid, accusamus, corporis ex. Vel.
            </p>
            <MyButton
              text="Purchase tickets"
              link="https://google.com"
              size="small"
              sx={{ background: "#ffa800", color: "#fff" }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};
