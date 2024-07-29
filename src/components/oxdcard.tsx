import { useNavigate } from "react-router-dom";
import "../css/card.css";

interface Props {
  head: string;
  discrip: string;
  imagepath: string;
  comlink: string;
  dataPath: string;
}

function OxdCard({ head, imagepath, discrip, comlink, dataPath }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(comlink, { state: { dataPath } });
  };

  return (
    <div className="oxdCard" onClick={handleClick}>
      <div className="oxdCardHead">{head}</div>
      <div className="oxdCardImg">
        {imagepath === "" ? (
          <div className="notFoundCom">
            <p>Not found</p>
          </div>
        ) : (
          <div className="notFoundCom">
            <img src={imagepath} alt="" className="cardDefultimg" />
          </div>
        )}
      </div>
      <div className="oxdCardDiscrip">
        <p>{discrip}</p>
      </div>
    </div>
  );
}

export default OxdCard;
