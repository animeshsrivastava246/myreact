import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let up = text.toUpperCase();
        setText(up);
    }
    const handleDownClick = ()=>{
        let low = text.toLowerCase();
        setText(low);
    }
    const handleSpaceClick = ()=>{
        let sp = text.split(/[ ]+/);
        setText(sp.join(" "));
    }
    const handleCopyClick = ()=>{
        var txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Copied to Clipboard", "success");
    }
    const handleClearClick = ()=>{
        let clr = "";
        setText(clr);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here");
    // setText = "xyz"; Wrong Way
    return (
        <>
            <div className="container" style={{color: props.mode==='light' ? 'black' : 'white'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control mx-3" value={text} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-secondary mx-2" onClick={handleUpClick}>TO UPPERCASE</button>
                <button type="button" className="btn btn-secondary" onClick={handleDownClick}>to lowercase</button>
                <button type="button" className="btn btn-secondary mx-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-secondary" onClick={handleCopyClick}>Ctrl+C</button>
                <button type="button" className="btn btn-dark mx-2" onClick={handleClearClick}>Clear</button>
                <div className="mb-3 my-4">
                    <h2>About Yout Text</h2>
                    <p>There are {(text.length)===0 ? 0 : text.trim().split(" ").length} words and {text.length} characters and {text.split(" ").length - 1} whitespaces.</p>
                    <p>It will take <b><i>{0.008 * ((text.length)===0 ? 0 : text.trim().split(" ").length)}</i></b> minutes to read</p>
                </div>
            </div>
        </>
    )
}
