import React, { useState } from "react";
import styles from "./Modal2.module.css";
import Modal2 from './Modal2'; 
import Modal from 'react-modal';


const ModalMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        후기 남기기
      </button>
      {isOpen && <Modal2 setIsOpen={setIsOpen} />}
    </main>
  );
};

export default ModalMain;