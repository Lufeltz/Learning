import React, { useEffect, useState } from "react";

function Ex05_useEffect() {
    const [text, setText] = useState("Hell World!");

    useEffect(() => {
      setInterval(() => {
        setText("New World!")
      }, 3000);
    })

    return <h1>{text}</h1>;
}

export default Ex05_useEffect;
