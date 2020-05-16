import React, { useContext, useEffect} from "react";
import {Context} from "../contexts/Context";
import marked from "marked"



const Previewer = () => {
    const {setText, text} = useContext(Context);
    const str=`# Welcome

 ## This is not a sub-heading

**This is bold**

Here is some code: \`<div></div>\`

Here is some multi-line code: 
\`\`\`
randomFunction = () =>{
    console.log("This is cool");
}
\`\`\`
Here is a link: [example link]("https://example.io")

Here is an unordered list:

- item 1
- item 2
- item 3

Here is an ordered list:

1. item 1
2. item 2
3. item 3

Here is a 
> block quote

Here is an embedded image

![React Logo](https://goo.gl/Umyytc)
`
    



   
    
    useEffect(() => {
    
      document.getElementById("editor").value=str; 
      setText(str);
       
    }, [str, setText])
   
   
    const createMarkup = () =>{
        
        return {__html: marked(text)};
      
    }
    return ( 
        <div dangerouslySetInnerHTML={createMarkup()} id="preview">
           
        </div>
     );

    }
export default Previewer;
