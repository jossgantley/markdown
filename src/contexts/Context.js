import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
   
    const [text, setText] = useState("")
 
    return ( 
        <div>
            <Context.Provider value={{text, setText}}>
                {props.children}
            </Context.Provider>
        </div>
     );
}
 
export default ContextProvider;