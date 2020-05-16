import React, { useContext } from "react"
import { Context } from "../contexts/Context"


const Editor = () => {
const {setText} = useContext(Context);
const handleChange = (e) => {
    (setText((e.target.value)))
}

    return ( 
        <div>
            <textarea
            id="editor"
            onChange={handleChange}
            
            />
        </div>
     );
}
 
export default Editor;