import React, {useCallback, useRef, useState} from 'react';
import EditorWindow from './components/Editor/EditorWindow';

function App() {
  let timeout = useRef();
  const [sourceDoc, setSouceDoc] = useState('');
  const forwardSetSouceDoc = useCallback((source) => {
    if(timeout.current) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      setSouceDoc(source);
    },1000)
  }, [])
  return (
    <React.Fragment>
      <EditorWindow sourceDocHandler={forwardSetSouceDoc}/>
      <iframe srcDoc={sourceDoc} frameBorder="0" title="viewBox"></iframe>
    </React.Fragment>
  );
}

export default App;
