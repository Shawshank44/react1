import React,{useState}  from 'react'



export default function TextForm(props) {
    const [text,setText] = useState('')
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const Change = (event)=>{
        setText(event.target.value)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleNumClick = ()=>{
        let renum = text.replace(/[0-9/$-&-%-*-#/]/g, '');
        setText(renum)
    }
    const handleCopy = ()=>{
        let text = document.getElementById('mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    return (
        <>
        <div className="container" style={{ color :props.mode ==='dark'?'white':'#343a40' }}>
            <div className="mb-3">
                <label htmlFor="MyBox" className="form-label">Type the Text</label>
                <textarea className="form-control" onChange={Change} style={{backgroundColor :props.mode ==='dark'?'#343a40':'white', color: props.mode ==='dark'?'white':'#343a40' }}  id="mybox" value={text} rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick} >Convert to upper case</button>
            <button className='btn btn-warning mx-3' onClick={handleLoClick} >Convert to Lower case</button>
            <button className='btn btn-danger ' onClick={handleNumClick} >Remove Numbers and symbols</button>
            <button className='btn btn-dark mx-3' onClick={handleCopy} >Copy Text</button>
            
        </div>
        <div className="container my-5" style={{ color :props.mode ==='dark'?'white':'#343a40' }}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} minutes </p>
            <h2>Preview</h2>
            <p> {text} </p>
        </div>

    </>
    )
}
