import { useEffect, useState } from "react";
import OxdCard from "./oxdcard";

interface CardData {
  id: number;
  title: string;
  link: string;
  imagepath: string;
  data: string;
  urlPath: string;
  disp: string;
}

function CardGrid() {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    fetch("/data/sidenavdata.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching the JSON data: ", error));
  }, []);

  return (
    <>
      <div className="gridwrap">
        <div className="gridTitle">
          <div></div>
        </div>
        <div className="cardGrid">
          {data.map((val, key) => (
            <OxdCard
              head={val.title}
              imagepath={val.imagepath}
              discrip={val.disp}
              comlink={`/component/${val.urlPath}`}
              dataPath={val.data}
              key={key}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardGrid;
