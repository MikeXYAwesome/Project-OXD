import { useEffect, useState } from "react";
import "../css/cardguide.css";
import { Link } from "react-router-dom";

function GuideCard(props: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="SkeletonLoader">
          <div className="SkeletonLoaderDetails">
            <div className="SkeletonLoaderTitle"></div>
            <div className="SkeletonLoaderDescription"></div>
            <div className="SkeletonLoaderButton"></div>
          </div>
        </div>
      ) : (
        <div className={"GuideCardWrap" + " " + "textColor-" + props.textcolor}>
          {props.children}
          <img
            onLoad={() => setLoading(false)}
            src={props.image}
            className="GuideCardbg"
          ></img>
          <div className="GuideDetailWrap">
            <h1 className="guideCardTitle">{props.title}</h1>
            <p className="guideCardDis">{props.description}</p>
            <Link to={props.link}>
              <button className="guideCardBt">Learn More</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default GuideCard;
