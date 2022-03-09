import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rpg from "./components/Rpg/Rpg";
import Popup from "./components/Rpg/Popup";
import MainScreen from "./components/MainScreen/MainScreen";

function App() {
  let castles = [
    {
      id: "gold",
      title: "",
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1646030719/kisspng-mining-ore-clip-art-egore-5a89b05a7e4e24.8351151815189730185174_c0r3o8.png",
      visitPlace: "https://demo-ux.github.io/",
      // viewOnMap: false,
      howToContact: "",
      top: "30px",
      right: "50px",
      category: "Extra",
      section: "Gold Shop",
      number: "+995 592 02 78 50",
      call: "+995592027850",
      width: "70px",
      height: "70px",
    },
    {
      id: "pingeorgia",
      title: "PinGeorgia",
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645597270/pingeorgia_ddrkmw.png",
      visitPlace: "http://pingeorgia.ge/",
      // viewOnMap: false,
      howToContact: "",
      top: "",
      right: "150px",
      bottom: "170px",
      category: "Tour Operator",
      width: "70px",
      height: "70px",
      section: "Tour Operator",
      call: "+995555242266",
      number: "+995 555 24 22 66",
    },

    {
      id: "mtvrali_ku_apartment",
      title: "Mtvrali Ku Apartment",
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1645954065/pngwing.com_mhy2d4.png",
      visitPlace:
        "https://www.airbnb.co.in/rooms/37653368?source_impression_id=p3_1645954148_sxiyD7gkQ6TW1%2BvH",
      // viewOnMap: false,
      howToContact: "",
      top: "",
      right: "500px",
      bottom: "270px",
      category: "Where to Stay",
      width: "70px",
      height: "70px",
      section: "Where to Stay",
      call: "+9955970266336",
      number: "+995 597 02 66 33",
    },

    {
      id: "wow_cheap",
      title: "WowCheap",
      img: "https://res.cloudinary.com/dzxxb95vy/image/upload/v1646811357/girl-using-laptop-2893817-2407060_urt24f.webp",
      visitPlace:
        "https://www.mymarket.ge/ka/search?UserID=1078130&fbclid=IwAR3wFeOX5WyXRl2z5hTHklgXQgIZ9-zDANJp5yGjK8ZhdPEhPvGPXunzY0o",
      // viewOnMap: false,
      howToContact: "",
      top: "",
      right: "700px",
      bottom: "60vh",
      category: "Where to Shop",
      width: "130px",
      height: "70px",
      section: "Where to Shop",
      call: "+995555070666",
      number: "+995 555 07 06 66",
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          {/* <Route path="/login" element={<Authentication />} /> */}
          <Route path="/main" element={<MainScreen />} />
          <Route path="rpg" element={<Rpg castles={castles} />} />
          <Route path="/location/:id" element={<Popup castles={castles} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
