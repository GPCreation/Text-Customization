import React,{useState} from 'react'




export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
       
    }
    const handleClear = ()=>{
        console.log("Clear text");
        let newText = ('');
        setText(newText)
    }
    const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  }
  const handleCopy = ()=>{
    var text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);  
    }
    

    const [text ,setText] = useState('');
  
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8} ></textarea>
    
  </div>
  
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleloClick}>lowercase</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>



    </div>
    <div className="container my-3">
        <h4>Your Text summary</h4>
        <p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes Read</p>
<h3>Preview</h3>
<p>{text}</p>
    </div>
    </>
  )
}
