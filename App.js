/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
function App() {

  let post = ' 우동 맛집';
  // let [글제목, b] = useState('남자 코트 추천');
  // let [글제목1, c] = useState('강남 우동맛집');
  // let [글제목2, d] = useState('파이썬독학');
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '맛집 추천', '자바독학']);
  let [logo, setLogo] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState(0); // 기본값 따봉은 0
  let [따봉1, 따봉변경1] = useState(0);
  let [따봉2, 따봉변경2] = useState(0);
  let [modal, setModal] = useState(false);
  let [코트변경, 성별변경] = useState(['여자 코트 추천']);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // let a = num[0]; //1
  // let c = num[1]; //2
  [1, 2, 3].map(function (a) {
    return '1233211'
  })

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <button onClick={() => {
        {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy)
        }
      }}>가나다순정렬</button>

      <button onClick={() => {
        let arr = [1, 2, 3];

        let copy = 글제목;
        copy[0] = '남자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉} </h4>
        <p>12월 30일 발행</p>
      </div>
      <div className="list">
        <h4>{코트변경} <span onClick={() => { 성별변경('남자 코트 추천') }}>👍</span></h4>
        <p>12월 30일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>12월 30일 발행</p>
      </div> */}

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(true); setTitle(i) }}>{글제목[i]}<span
                onClick={() => { e.stopPropagation(); 따봉변경(따봉 + 1) }}>👍</span> {따봉}
              </h4>
              <p>1월 14일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }


      <div className="list">
        <h4 onClick={() => {
          if (modal == false) {
            console.log(modal)
            setModal(true)
          }
          else {
            setModal(false)
          }
        }} >{글제목[2]}</h4>
        <p>12월 30일 발행</p>
      </div>

      <input onChange={(e) => { 입력값변경(e.target.value); console.log('e:', e) }} />
      <button onClick={() => {
        글제목변경(글제목.concat(입력값)); console.log()
        // let copy = [...글제목];
        // copy.unshift(입력값);
        // 글제목변경(copy)
      }}>글발행</button>
      {
        modal == true ? <Modal title={title} 글제목={글제목} /> : null
      }
      <Modal2></Modal2>


    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}


class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'kim',
      age: 20
    }
  }
  render() {
    return (
      <div>안녕{this.state.age}
        <button onClick={() => {
          this.setState({ age: 21 })
        }}>버튼</button>
      </div>
    )
  }
}

function Car() {
  return (
    <>
      <div className="car">
        <h4>품종</h4>
        <p>색상</p>
      </div>
      <div></div>
    </>
  )
}
export default App;