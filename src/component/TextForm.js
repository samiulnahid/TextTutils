import React,{useState} from 'react'



export default function TextForm(props) {
      const [text, setText] = useState("Enter text here");
    //   const [isUpperCase, setIsUpperCase] = useState(false);
    //   console.log("text: ", text);
    // //   console.log("settext: ", setText);
    //   setText("new text")
    //   console.log("text: ", text);
    // //   console.log("settext: ", setText);

    const handleUpClick = () =>{
        // console.log("UPPERCASE was CLICKS");

        // if(isUpperCase){
            // let newText = text.toLowerCase();
            // setText(newText)
            // setIsUpperCase(false)

        // }
        // else{
            let newText = text.toUpperCase();
            setText(newText)
            // setIsUpperCase(true)

        // }
          props.showAlert("converted to upper Case" , "success")

        
    }
     const handleLowClick = () =>{
        
            let newText = text.toLowerCase();
            setText(newText)
              props.showAlert("converted to lower Case" , "success")
    
        
    }
    const handleCapFirstLetterClick = () =>{

        let firstchar = text.charAt(0); // storing the first char of the string
        let newText= firstchar.toUpperCase(); // converting that to uppercase
        setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice

          

            props.showAlert("converted to capitalize first letter from all sentence" , "success")
        
        // setText(newTEXT)
        
    }

      const handleClearText = () =>{
        
        setText("")
          props.showAlert("seccessfully clean all text" , "success")
    }


    //cap korle word ar first letter
    const handleCapClick = () =>{

            //     let CapitalizeWords = text[0].toUpperCase();  
            //     for (let i = 1; i <= text.length - 1; i++) {  
            //         let currentCharacter,  previousCharacter = text[i - 1];  
            //         if (previousCharacter === ' ') {  
            //             currentCharacter = text[i].toUpperCase();  
            //         } else {  
            //             currentCharacter = text[i];  
            //         }  
            //         CapitalizeWords = CapitalizeWords + currentCharacter;  
            //     }  
            //  setText(CapitalizeWords);


            let newText = text.split(" ").map((currentValue) => {
                let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
                return newText;
            });
           setText(newText.join(" "));

             props.showAlert("converted to capitalized first letter from every Individual word" , "success")
        
    }

    /// copy text
    const COPYIT=(event)=>{

        // ///ata copy korle copy button a click korar pore input / textarea faka hoi a jabe..mane sob text sathe sathe clear hoi a jabe. 

        //     setText(event.target.value);
        //     let newtext=navigator.clipboard.writeText(text);
        //     console.log(newtext);
        //     alert("text copied successfully");


            // /// another way
            ///   ///ata copy korle copy button a click korar pore input / textarea faka hoi a jabe na..mane textarea vitor j likha silo ta thakbei and oi likha copy o hobe.

            let text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value)

            props.showAlert("successfully copyed all text" , "success")
          
    };


    
    const clickUniqueWords=() => {
        let set = new Set(text.split(' '));
        setText(text + '\nNo. of unique words :'+set.size);

        props.showAlert("find all number of unique word" , "success")
    }


    //// remove extra spaces
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ] +/)
        setText(newText.join(" "))

        props.showAlert("successfully removed all extra space" , "success")
    }


    ///kono kisu type korar sathe sathe handleOnChange ar madhome text ar value protinioto type onujaiyi change hote thaker setText ar madhome
    const handleOnChange = (event) =>{

        // console.log("on change");
        setText(event.target.value)
      

    }


    return (

        <>
            <div className="container" style={{ color :props.mode === 'light' ? 'black': ' white' }}>

                <h3 >{props.heading} </h3>
                
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    {/* type korar jonne onChange use korte hobe.. r textarea value type ar sathe sathe change korar jonne textarea vitore value obossoi state hote hobe. jemon akhane --- value= {text}   */}
                    <textarea className="form-control" 
                              value= {text} 
                              onChange={handleOnChange} 
                              style={{backgroundColor :props.mode === 'light' ? 'white': ' gray', color :props.mode === 'light' ? 'black': ' white' }} 
                              id="myBox" 
                              rows="13">

                    </textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleUpClick}> convert to uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleLowClick}> convert to lowercase</button>
                <button className="btn btn-outline-primary m-2" onClick={handleCapFirstLetterClick}> Cpitalized first letter</button>
                <button className="btn btn-outline-primary m-2" onClick={handleCapClick}> Cpitalized</button>
                <button className="btn btn-outline-primary m-2" onClick={COPYIT}> COPY IT</button>
                <button className="btn btn-outline-primary m-2" onClick={clickUniqueWords}> Unique Words</button>
                <button className="btn btn-outline-primary m-2" onClick={handleExtraSpaces}>Remove Spaces</button>
                <button className="btn btn-outline-primary m-2" onClick={handleClearText}>Clear </button>
                
            </div>
            <div className="container my-3" style={{ color :props.mode === 'light' ? 'black': ' white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2> preview </h2>
                <pre>{text.length>0 ? text : "enter somthing to Preview it here"}</pre>
            </div>
        </>
    )
}
