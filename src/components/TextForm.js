import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    };

    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    };

    const reverseString = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("String Reversed", "success");
    };

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        try{
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to ClipBoard", "success");
        }
        catch{
            document.execCommand("copy");
            props.showAlert("Extra apaces removed", "success");
        }
    }

    const handelExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra White Space Handled", "success");
    }

    const textClear = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    };

    const handleOnChange = (event) => {
        console.log("Handelled");
        setText(event.target.value)
    };
    
    return (
        <>
        <div className="container" style={{color: props.mode=='dark'?'white':'#1a1a1a' }}>
            <div className="d-flex justify-content-between">
                <h1>{props.heading}</h1>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
                    <button className="btn btn-danger my-2 mx-2" onClick={textClear}>Clear</button>
                </div>
            </div>
            <div className="my-3">
                <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode=='dark'?'#1a1a1a':'white', color: props.mode=='dark'?'white':'#1a1a1a' }} value={text} onChange={handleOnChange} placeholder={props.placeholder} ></textarea>
            </div>
            <div className="d-flex flex-wrap justify-content-start my-3">
                <button className="btn btn-primary mx-2 my-1" onClick={upperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={lowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={reverseString}>Reverse String</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handelExtraSpaces}>Handel Exttra Spaces</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode=='dark'?'white':'#1a1a1a' }}>
            <h2>Your text Summary</h2>
            <div className="d-flex flex-wrap justify-content-start my-3">
                <p className="badge bg-info text-wrap fs-3">{text.split(" ").filter(function(n) { return n != "" }).length} Words</p> {/*{text.split(" ").length}  text.split(" ").length*/}
                <p className="badge bg-info text-wrap mx-2 fs-3">{text.split("").filter((n)=>{return n!=" "}).length} Characters</p>                                                   
                <p className="badge bg-info display-wrap text-wrap  fs-3">{0.008 * text.split("").filter((n)=>{return n!=" "}).length} Minutes Read</p>
                
            </div>
            <div className="my-3">
                <h2>Preview</h2>
                <p>{text.length>0?<b>{text}</b>:'Enter something in the the textarea above to preview it here'}</p>
            </div>
        </div>
        </>
    )
}


TextForm.defaultProps = {
    placeholder: 'Enter text here'
}