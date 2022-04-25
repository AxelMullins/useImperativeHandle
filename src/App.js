import { useRef, useState } from 'react'
import Modal from './Modal'

function App() {
  const [tgModal , setTgModal  ] = useState(false)

  const modalRef = useRef()

  const handleOpenModal = () => {
    modalRef.current.openModal();
    setTgModal(true)
  }

  console.log("parent rendered")

  return (
    <main style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h1>useImperativeHandle</h1>
      <Modal ref={modalRef} setTgModal={setTgModal}/>
      <button onClick={handleOpenModal} style={{visibility: tgModal ? "hidden" : "visible"}}>Open modal</button>
    </main>
  );
}

export default App;
