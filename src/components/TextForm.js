import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText('');
        props.showAlert("All text cleared", "success");
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                <h1>{props.heading}</h1>

                <div className="form-group">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} onChange={handleOnChange}
                        value={text} id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className={`btn btn-primary mx-1 my-2 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    Convert to uppercase
                </button>
                <button onClick={handleDownClick} className={`btn btn-primary mx-1 my-2 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    Convert to lowercase
                </button>
                <button onClick={clearText} className={`btn btn-primary mx-1 my-2 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    Clear text
                </button>
                <button onClick={handleSpace} className={`btn btn-primary mx-1 my-2 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    Handle Space
                </button>
            </div>

            <div className='container my-3'>
                <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>The summary of the text above: </h3>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Total words: {text.split(' ').length}, Total characters: {text.length}</p>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>The user will take {0.008 * text.length} minutes in average to read this.</p>
                <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview:</h3>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    {text.length > 0 ? text : "Enter something in the box above to preview here"}
                </p>
            </div>
        </>
    )
}

