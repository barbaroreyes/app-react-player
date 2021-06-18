import React ,{useState}from 'react';
import Modal from 'react-modal';
import Description from './description'
import './App.css';

function App() {
  const [open , setOpen] = useState(false);
  
  
  return (
    <div className="App">
      <button class="modal-buttons" onClick={()=>setOpen(true)}>Open Modal</button>
      <Modal isOpen={open}>
        <div >
        <h1>About Game</h1>
        <div>
          <Description/>
        </div>
        <button class="modal-buttons" onClick={()=>setOpen(false)}>close Modal</button>
        </div>
      </Modal>
      
      
    </div>
  );
}

export default App;
