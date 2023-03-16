import React, {useState} from 'react'

export default function TextForm(props) {
  
    const handleupperbtn=()=>{
        let newtext = text.toUpperCase()
        settext(newtext)
        props.Showalert("success","Converted into Upper Case.")
    }
    const handleLowerbtn = ()=>{
        let lowercase = text.toLowerCase();
        settext(lowercase)
        props.Showalert("success","Converted into Lower Case.")
    }
    const CopyText=()=>{
      let text = document.getElementById("myBox")
      text.select();
      text.setSelectionRange(0, 10000)
      navigator.clipboard.writeText(text.value)
      props.Showalert("success","Text Copied.")
    }
    const Capitilize =()=>{
      let capital = text.charAt(0).toUpperCase() + text.slice(1)
      settext(capital);
      props.Showalert("success","You text is Capitilized")
    }
    const Extraspace = () =>{
      let newText = text.split(/[ ]+ /);
      settext(newText.join(" "));
      props.Showalert("success","Extra space was removed.")
    }
    const Clearbtn = ()=>{
      let cleartext =  window.confirm("Are you Sure to clear the Text?");
        if(true){
        cleartext = '';
        }
        settext(cleartext)
        props.Showalert("success","Text Cleared.")
        
    }
    const handleonChange=(event)=>{
        settext(event.target.value)
    }
    const [text, settext] = useState('');
  return (
    <div className= "container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" placeholder='Enter the Text' style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}  rows="10"> {text}</textarea>
        
        </div>
          <button className="btn btn-outline-info mx-1" onClick={handleupperbtn}>Convert into UpperCase</button>
          <button className="btn btn-outline-warning mx-1" onClick={handleLowerbtn}>Convert into LowerCase</button>
          <button className="btn btn-outline-primary mx-1" onClick={CopyText}>Copy to Clipboard</button>
          <button className="btn btn-outline-success mx-1" onClick={Capitilize}>Capilitize</button>
          <button className="btn btn-outline-dark mx-1" onClick={Extraspace}>Remove Extra Spaces</button>
          <button className="btn btn-outline-danger mx-1" onClick={Clearbtn}>Clear Text</button>
          <div className="container my-4" style={{Color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>Your Text Contain { text.split(" ").length} Words and {text.length} Characters </p>
            <p>According to our research normal reader can this text in this minutes: {0.008 * text.split(" ").length} </p>
            <h3>Preview</h3>
            <p>{text.length>0? text: "Enter any text in the Textbox to preview at here." }</p>
          </div>
    </div>
  )
}
