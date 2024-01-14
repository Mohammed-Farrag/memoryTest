import { useState } from "react";
import Navbar from "./components/Navbar"
import SingleNumber from "./components/SingleNumber"

function App() {
  const [mode, setMode] = useState('close');
  // const [time, setTime] = useState(60);
  const [alert, setAlert] = useState();
  const [compNum, setCompNum] = useState(null);

  const [numbers, setNumbers] = useState([
    { id: 1, status: 'close' },
    { id: 1, status: 'close' },
    { id: 2, status: 'close' },
    { id: 2, status: 'close' },
    { id: 3, status: 'close' },
    { id: 3, status: 'close' },
    { id: 4, status: 'close' },
    { id: 4, status: 'close' },
    { id: 5, status: 'close' },
    { id: 5, status: 'close' },
    { id: 6, status: 'close' },
    { id: 6, status: 'close' },
    { id: 7, status: 'close' },
    { id: 7, status: 'close' },
    { id: 8, status: 'close' },
    { id: 8, status: 'close' },
  ].sort(() => Math.random() - .5))



  const clickHandler = (num, index) => {
    if (mode == 'close') {
      changeStatus(index, 'open')
      setCompNum(num);
      setMode('openToCheck');
    } else {
      changeStatus(index, 'open')
      setTimeout(() => {
        deepComp(num, compNum);
        setCompNum(null);
        setMode('close')
      }, 2000)
    }
  }


  const changeStatus = (index, st) => {
    let newnumbers = numbers.map((n, i) => {
      if (i === index) {
         n.status = st
        return n;
      }
      return n;
    });
    setNumbers([...newnumbers])
  }

  const changeStatusById  = (id, st) => {
    let newnumbers = numbers.map((n) => {
      if (n.id === id) {
         n.status = st
        return n;
      }
      return n;
    });
    setNumbers([...newnumbers])
  }

  const deepComp = (firstNum, secondNum) => {
    let ind1 = numbers.indexOf({id: firstNum.id});
    let ind2 = numbers.indexOf({id: secondNum.id}, ind1);
    changeStatus(ind1, 'open');
    changeStatus(ind2, 'open');

    if(firstNum.id === secondNum.id){ 
      setAlert('The Same');
      changeStatusById(firstNum.id, 'done');
    } else {
    
      setMode('close')
      changeStatusById(firstNum.id, 'close')
      changeStatusById(secondNum.id, 'close')
      setAlert('Not the Same');
    }
  }


  return (
    <>
      <Navbar />

      <div className="numbers flex flex-wrap max-w-[600px] mx-auto">
        <p className="text-center w-full text-3xl font-bold">{alert}</p>
        {numbers.map((el, index) => (

          <SingleNumber status={el.status} key={index} num={el.id} click={() => clickHandler(el, index)} />

        ))}
      </div>
    </>
  )
}

export default App
