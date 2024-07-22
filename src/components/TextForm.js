import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

    return (
        <div>
            <h1>{props.heading} {text}</h1>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8" value={text} onChange={handleOnChange}
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    );
}
