import classes from "./Venue.module.css";
import { Zoom } from "react-awesome-reveal";
import icon_calender from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";
export const VenueNfo = () => {
  return (
    <div className={classes.bck_black}>
      <div className={classes.center_wrapper}>
        <div className={classes.vn_wrapper}>
          <Zoom className={classes.vn_item} triggerOnce>
            <div>
              <div className={classes.vn_outer}>
                <div className={classes.vn_inner}>
                  <div
                    className={`${classes.vn_icon_square} ${classes.bck_red}`}
                  ></div>
                  <div
                    className={classes.vn_icon}
                    style={{
                      background: `url(${icon_calender})`,
                    }}
                  ></div>
                  <div className={classes.vn_title}>Event Date & Time</div>
                  <div className={classes.vn_description}>Jan 01, 2023</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom className={classes.vn_item} triggerOnce>
            <div>
              <div className={classes.vn_outer}>
                <div className={classes.vn_inner}>
                  <div
                    className={`${classes.vn_icon_square} ${classes.bck_yellow}`}
                  ></div>
                  <div
                    className={classes.vn_icon}
                    style={{
                      background: `url(${icon_location})`,
                    }}
                  ></div>
                  <div className={classes.vn_title}>Event Location</div>
                  <div className={classes.vn_description}>TBS</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};
