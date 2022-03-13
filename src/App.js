import { useState } from "react";
import "./App.css";

const imgs = [
  {
    img: "https://cdn.pixabay.com/photo/2016/11/19/16/56/adventure-1840310_960_720.jpg",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/03/04/15/14/river-7047522_960_720.jpg",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/03/01/20/58/peace-genius-7042013_960_720.jpg",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg",
  },
];

function App() {
  const [imgInd, setImgInd] = useState(0);
  return (
    <div className="app">
      <div className="bg">
        <img src={`${imgs[imgInd].img}`} alt="img" />
      </div>
      <div className="images">
        {imgs.map((item, ind) => (
          <div
            className={`img ${imgInd === ind && "active"}`}
            onClick={() => setImgInd(ind)}
          >
            <img src={item.img} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
