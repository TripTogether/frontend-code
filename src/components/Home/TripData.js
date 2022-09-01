import React, { useState } from "react";

import styled from "styled-components";
import style from "./TripData.module.css";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { Sliders } from "./Sliders";


const tripData = [
  {
    ment: "여행 1",
  },
  {
    ment: "여행 2",
  },
  {
    ment: "여행 3",
  },
  {
    ment: "여행 4",
  },
];

export function TripData() {
  const [heart, setHeart] = useState(false);

  return (
    <ModalWrapper>
      <Sliders dots={true} index={0}>
        {tripData.map((data, index) => {
          return (
            <>
              <div className="lottie" key={index}>

              </div>
              <p className="ment" key={10 + index}>
                {data.ment}
              </p>
              <div className={style.heart}>
                {heart ?
                  <AiOutlineHeart key={20 + index} onClick={() => { setHeart(!heart); }}></AiOutlineHeart> :
                  <AiFillHeart key={20 + index} onClick={() => { setHeart(!heart); }}></AiFillHeart>
                }
              </div>
            </>
          );
        })}
      </Sliders>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  * {
    font-style: normal;
  }

  .question {
    position: relative;
    opacity: 0.4;
    color: #ffffff;
    cursor: pointer;
    margin-left: 5px;
    top: 2px;
  }

  .lottie {
    box-sizing: border-box;
    width: 280px;
    height: 280px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    z-index: 90;
  }

  .coment {
    margin: 35px 5% 15px 5%;

    font-weight: 600;
    font-size: 19px;
    text-align: center;
    color: #ffffff;
  }
  .ment {
    margin-bottom: 20px;
    white-space: pre-wrap; /* 줄바꿈용 */

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    /* light grey */
    color: #00000;
    z-index: 100;
  }
`;