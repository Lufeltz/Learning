import React, { useRef } from "react";

function Ex08_useRef() {
    const element = useRef();

    const acao = () => {
      element.current.focus();
      element.current.style.outline = 'none';
      element.current.style.border = '1px solid red';
      element.current.placeholder= 'Digite algo...'

    };

    return (
        <div>
            <input type="text" ref={element} />
            <input type="button" value="Clique aqui" onClick={acao}/>
        </div>
    );
}

export default Ex08_useRef;
