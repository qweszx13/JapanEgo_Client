/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useRef } from 'react';
import { useDispatch } from 'react-redux';
import CardMake from '../CardMaker/CardMaker';
import CardModal from '../KanjiCardModal/KanjiCardModal';
import { ReactComponent as Search } from '../../../Assets/svg/search.svg';


const data = [//더미 데이터 카드(홈화면에 표시되는 카드)에 표시할 데이터 더미
  {
    kanji: 'kanji 1',
    grade: 'N1',
    dataNum: 1
  },
  {
    kanji: 'kanji 2',
    grade: 'N2',
    dataNum: 2
  },
  {
    kanji: 'kanji 3',
    grade: 'N3',
    dataNum: 3
  },
  {
    kanji: 'kanji 4',
    grade: 'N4',
    dataNum: 4
  },{
    kanji: 'kanji 5',
    grade: 'N1',
    dataNum: 5
  },
  {
    kanji: 'kanji 6',
    grade: 'N2',
    dataNum: 6
  },
  {
    kanji: 'kanji 7',
    grade: 'N3',
    dataNum: 7
  },
  {
    kanji: 'kanji 8',
    grade: 'N4',
    dataNum: 8
  },{
    kanji: 'kanji 9',
    grade: 'N1',
    dataNum: 9
  },
  {
    kanji: 'kanji 10',
    grade: 'N2',
    dataNum: 10
  },
  {
    kanji: 'kanji 11',
    grade: 'N3',
    dataNum: 11
  },
  {
    kanji: 'kanji 12',
    grade: 'N4',
    dataNum: 12
  },{
    kanji: 'kanji 13',
    grade: 'N1',
    dataNum: 13
  },
  {
    kanji: 'kanji 14',
    grade: 'N2',
    dataNum: 14
  },
  {
    kanji: 'kanji 15',
    grade: 'N3',
    dataNum: 15
  },
  {
    kanji: 'kanji 16',
    grade: 'N4',
    dataNum: 16
  },
];//더미끝 

export default function EgoSection(){

  useEffect(()=>{
    //한자 추가될때,한자 삭제 될때
    dataSet();
  },[]);

  const inputRef = useRef();

  const dispatch = useDispatch();

  const dataSet = ()=>{
    dispatch({type:"KANJI_LIST_INFO",listInfo:data});//데이터 보내서 카드 생성
  }
  
  return(
    <div className="h-full w-full overflow-auto animate-smoothy">

      <label className="relative block w-3/4 ml-auto mr-auto mb-3 mt-3">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
          <Search></Search>
        </span>
        <input ref={inputRef} onChange={(e)=>{
          console.log(inputRef.current.value);
        }} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
      </label>
      <label className="relative block w-3/4 ml-auto mr-auto mb-3 mt-3 text-center">
        <ruby>
          
          <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-400">今日の漢字</p>
          <rt className="text-sm dark:text-gray-400 md:text-lg lg:text-2xl">きょうのかんじ</rt>
        </ruby>
      </label>
      <CardMake></CardMake>
      <CardModal></CardModal>
    </div>
  )
  
}