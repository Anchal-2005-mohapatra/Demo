import React, { useRef } from 'react'

const Reference = () => {
    const textRef = useRef();
    console.log(textRef);


    const handleClick = () => {
        textRef.current.style.color = "red";
        textRef.current.style.fontSize = "50px";
        textRef.current.style.textAlign="center"
    };

    return (
        <div>
            <h1 ref={textRef}>Reference</h1>
            <button onClick={handleClick}> Click</button>
            {/* {console.log(textRef.current)} */}
        </div>
    );
};
export default Reference;
