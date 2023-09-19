import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Provider from "./tools/provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider>
    <Navbar />
  </Provider>,
);
