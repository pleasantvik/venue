import { Carousel } from "./Carousel";
import { TimeUntil } from "./TimeUntil";

export const Featured = () => {
  return (
    <div className="featured_container">
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Adedayo Victor</div>
      </div>
      <TimeUntil />
    </div>
  );
};
