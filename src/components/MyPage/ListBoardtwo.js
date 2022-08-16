import React, { Component } from 'react';

import style from '../../components/List/ListBoard.module.css';

import axios from 'axios';
import ModalMain from './ModalMain';
class ListBoardtwo extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data : [],
        page:1,
        limit:10,
      }
    }
  
    componentDidMount() {
      this._getListData();
      this._setPage();
    }

  
    _getListData = async function() { 
      const {limit,page}=this.state;
      //테이블 데이터 전체 수
      const total_cnt = await axios('/get/board_cnt');
      console.log(total_cnt.data.cnt)

      //데이터 가져오기
      const data_list = await axios('/get/board', {
        method : 'GET',
        headers: new Headers()
      })

      //전체 페이지 수 구하기
      let page_arr = [];

      for(let i = 1; i <= Math.ceil(total_cnt.data.cnt / limit); i++) {
        page_arr.push(i);
      }
      console.log(page_arr)
      
      this.setState({ data : data_list , all_page:page_arr})
    }

    //페이지 변경 함수 state 값 초기화 방지
    _changePage = function(el) {
      this.setState({ page : el })
      sessionStorage.setItem('page', el)
    }

    //page 값을 고정하기 위한 함수 설정
    _setPage = function() {
      if(sessionStorage.page) {
        this.setState({ page : Number(sessionStorage.page) })
        return Number(sessionStorage.page);
      }
      
      this.setState({ page : 1 })
      return 1;
    }

  
    render() {
        const ListBoard=this.state.data  //수정 전 ListBoard 
        const { all_page, page } = this.state;


       return (
          <div>

     {ListBoard ? data.map( (data,i) => {
            return(
    <div className={style.listboard}>
            <h1>{data.title}</h1>
    <h2>{data.content}</h2>
    <img className={style.people} src="img/people.png" alt="people" /><h3>{data.number}</h3>
    <img className={style.smallheart} src="img/smallheart.png" alt="smallheart" /><h4>{data.heart}</h4>
    <img className={style.chatbubble} src="img/chatbubble.png" alt="chatbubble" /><h5>{data.chat}</h5>
    <img className={style.calendar} src="img/calendar.png" alt="calendar" /><h6>{data.date}</h6>
    <ModalMain></ModalMain>
     </div>
            )
          })
            : null }

            </div>

       );


        
      }
    }
    
    export default ListBoardtwo;

    const data=[
      {
      title:"강릉 1박2일",
      content:"속초에서 놀고먹는 브이로그",
      number:"7명",
      heart:"120",
      chat:"30",
      date:"2020.05.27 ~ 2020.05.28"
    },
    {
      title:"부산 2박3일",
      content:"부산에서 놀고먹는 브이로그",
      number:"6명",
      heart:"20",
      chat:"5",
      date:"2020.05.27 ~ 2020.05.28"
    }
    ]