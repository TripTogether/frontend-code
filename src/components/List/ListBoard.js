import React, { Component } from 'react';

import style from '../../components/List/ListBoard.module.css';

import axios from 'axios';

class ListBoard extends Component {
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
        const ListBoard=this.state.data
        const { all_page, page } = this.state;

        return (
          <div>
            <div className={style.listboard}>
            <h1>제목</h1>
    <h2>내용</h2>
    <img className={style.people} src="img/people.png" alt="people" /><h3>인원수</h3>
    <img className={style.smallheart} src="img/smallheart.png" alt="smallheart" /><h4>좋아요</h4>
    <img className={style.chatbubble} src="img/chatbubble.png" alt="chatbubble" /><h5>댓글</h5>
    <img className={style.calendar} src="img/calendar.png" alt="calendar" /><h6>날짜</h6>
     </div>
               <div className='paging_div'>
               <div> </div>
               <div>
                 <ul>
                   {all_page ? all_page.map( (el, key) => {
                     return(
                       el === page ? <li key={key} className='page_num'> <b> {el} </b> </li>
                                   : <li key={key} className='page_num' onClick={() => this._changePage(el)}> {el} </li>
                     )
                   })
                   
                   : null}
                 </ul>
               </div>
               <div> </div>
             </div>
            </div>
        );

        
      }
    }
    
    

export default ListBoard;
