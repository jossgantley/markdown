import React from 'react';
import ContextProvider from './contexts/Context';
import Editor from './components/Editor';
import Previewer from './components/Previewer';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Editor/>
        <Previewer/>
      </ContextProvider>
      
    </div>
  );
}

export default App;
