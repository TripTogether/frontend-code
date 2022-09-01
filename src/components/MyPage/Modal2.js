import React from "react";
import styles from "./Modal2.module.css";
import { RiCloseLine } from "react-icons/ri";
import StarRating from "./StarRating";


const Modal2 = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h4 className={styles.heading}>후기를 남겨보세요!!</h4>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.modalContent2}>
            여행 코스는 어떠셨나요?
            <StarRating></StarRating>
            
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              {/* submit 버튼 만들기 */}
              <button className={styles.submitBtn} onClick={() => setIsOpen(false)}>
                작성 완료
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal2;