import { forwardRef, useImperativeHandle, useState } from "react";

// Por mas que no use props lo debo colocar
const Modal = (props, ref) => {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));

  console.log("child rendered");

  if (!modalState) return null;

 const closeModal = () =>{
  setModalState(false);
  props.setTgModal(false)
 }

  return (
    <div style={{background: "green", padding: "20px", color: "white"}}>
      <h2>This is my modal</h2>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default forwardRef(Modal);
