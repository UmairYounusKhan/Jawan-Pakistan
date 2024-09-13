import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCounter, minusCounter, resetCounter } from './store/slices/CounterSlice';
import './Counter.css'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RestoreIcon from '@mui/icons-material/Restore';

const Counter = () => {
    const selector = useSelector((state) => state.counterReducer.counter
    );
    console.log(selector);
    const dispatch = useDispatch();
    return (
        <div className="counter-container">
            <div className="counter-box">
                <h1>Counter App</h1>
                <h2>Counter: {selector}</h2>
                <div className="icon-group">
                    <ControlPointIcon className="icon add-icon" onClick={() => dispatch(addCounter())} />
                    <RemoveCircleIcon className="icon minus-icon" onClick={() => dispatch(minusCounter())} />
                    <RestoreIcon className="icon reset-icon" onClick={() => dispatch(resetCounter())} />
                </div>
            </div>
        </div>


    )
}

export default Counter
