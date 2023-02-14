import React, { useState } from 'react';

const TextInput = (props) => {

    const [input, setInput] = useState('');
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const [checked, setChecked] = useState(false);

    const removeExtraSpace = () => {
        setResult(input.trim());
    }

    const toLowerCase = () => {
        setResult(input.toLowerCase());
    }

    const toUpperCase = () => {
        setResult(input.toUpperCase());
    }

    const replace = () => {
        if (checked===false){
            setResult(input.replace(key, value))
        }
        else{
            setResult(input.replaceAll(key, value))
        }
    }

    const removePunctuation = () => {
        setResult(input.replace(/[^a-zA-Z ]/g, ""));
    }

    const clearText = () => {
        setInput('')
    }

    return (
        <div style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <form>
                <div className="container my-3">
                    <h3 id='heading' style={{textAlign:"center"}}>{props.heading}</h3>
                    <div className="form-group shadow-textarea my-3">
                        <textarea type="text" className="form-control z-depth-1" id="textInput" placeholder="Your text goes here" rows={8} value={input} onChange={e => setInput(e.target.value)} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="button" className="btn btn-primary btn-lg mx-2 my-1" onClick={toUpperCase}>Convert to Uppercase</button>
                        <button type="button" className="btn btn-primary btn-lg mx-2 my-1" onClick={toLowerCase}>Convert to Lowercase</button>
                        <button type="button" className="btn btn-primary btn-lg mx-2 my-1" onClick={removeExtraSpace}>Remove Extra Space</button>
                        <button type="button" className="btn btn-primary btn-lg mx-2 my-1" onClick={removePunctuation}>Remove Punctuation</button>
                        <button type="button" className="btn btn-primary btn-lg mx-2 my-1" onClick={clearText}>Clear Text</button>
                    </div>
                    <div className="form-group shadow-textarea my-3" style={{ textAlign: 'center' }}>
                        <div className="row my-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Text to replace" aria-label="First name" value={key} onChange={e => setKey(e.target.value)} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="New Text" aria-label="Last name" value={value} onChange={e => setValue(e.target.value)} />
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary btn-lg mx-2" onClick={replace}>Replace</button>
                        <label>
                            <input type={'checkbox'} checked={checked} onChange={e => setChecked(e.target.checked)}/>
                            {' '}Replace All
                        </label>
                    </div>
                </div>
            </form>
            <div className="container form-group purple-border" >
                <h2>Your text summary</h2>
                <div className='mx-3'>
                    <h5>{input.split(" ").filter((element) => {return element.length!==0}).length} words and {input.length} characters</h5>
                    <p>{input === '' ? 0 : 0.008 * (input.split(" ").length)} Minutes read</p>
                </div>
                <h2>Result</h2>
                <div className='mx-3'>
                    <h5 style={{textAlign:'justify'}}>{result === '' ? 'Enter something in the above textbox to get the result' : result}</h5>
                </div>
            </div>
        </div>
    )
}

export default TextInput;