import "../css/loading.css";
import Lottie from "lottie-react";
import animationData from "../assets/animation/orange-loder.json";

const Loading = () => {
  return (
    <div className="loadingWrap">
      <div className="orangeAnimation">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <p className="loadingText">Loading..</p>
    </div>
  );
};

export default Loading;
