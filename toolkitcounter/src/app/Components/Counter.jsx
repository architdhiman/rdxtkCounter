import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,sub,increaseByAmount} from "../../features/counter/counterslice"

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const initialAmount = useSelector((state) => state.counter.amount); // initial amount from Redux store
    const [amount, setAmount] = useState(initialAmount);
    const dispatch = useDispatch();

    useEffect(() => {
      setAmount(initialAmount);
    }, [initialAmount]);
  
    return (
      <div>
        Counter called <br />
        <button onClick={() => dispatch(add())}>INC+</button>
        <button onClick={() => dispatch(sub())}>DEC+</button> <br />
        {count} <br />
        <input
          type="text"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(increaseByAmount(amount))}>ADD</button>
      </div>
    );
  };

export default Counter