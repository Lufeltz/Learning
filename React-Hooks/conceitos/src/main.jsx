import React from "react";
import ReactDOM from "react-dom/client";
import Ex01 from "./hooks/Ex01_useState";
import Ex02 from "./hooks/Ex02_useState";
import Ex03 from "./hooks/Ex03_useState";
import Ex04 from "./hooks/Ex04_useState";
import Ex05 from "./hooks/Ex05_useEffect";
import Ex06 from "./hooks/Ex06_useEffect";
import Ex07 from "./hooks/Ex07_useContext"
import Ex08 from './hooks/Ex08_useRef';
import Ex09 from './hooks/Ex09_useReducer'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Ex09 />
    </React.StrictMode>
);
