import React, { useState } from "react";
import './MainComponent.css'


export default function MainComponent() {

    const [counter, setCounter] = useState(0);

    const increHandler = () => {
        setCounter(counter + 1)
    }

    const decreHandler = () => {
        setCounter(counter - 1)
    }
    return <div>

        <div className="result_box">
            <div>
                <h1>{counter}</h1>
            </div>
        </div>
        <div className="button_box">
            <div className="buttons">
                <button {counter < 0 ?} onClick={decreHandler}>-</button>
            </div>
            <div className="buttons">
                <button onClick={increHandler}>+</button>
            </div>
        </div>



    </div>;
}
