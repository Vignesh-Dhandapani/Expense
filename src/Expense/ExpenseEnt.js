
import '../css/App.css';
import React, { useState } from 'react';

function Section() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [balance, setbalance] = useState(0)
  const [date, setDate] = useState(' ')

  const handleAdd = () => {
    setList(prevList => [...prevList, inputValue + 'Add']);
    setDate(new Date().toISOString())
    let c = inputValue
    let d = parseInt(balance) + parseInt(c)
    setbalance(d)
   
    setInputValue('');
  };

  const handleRemove = () => {
    setList(prevList => [...prevList, inputValue + 'Remove']);
    setDate(new Date().toISOString())
    let c = inputValue
    let d = parseInt(balance) - parseInt(c)
    setbalance(d)
    setInputValue('');
  };

  const deleteAmount = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className='Expenses'>
        <div className='Expense'>
          <div className='amount'>
            <h2 className='header1'>Expense Tracker - Basic</h2>

            <h5>Balance:{balance} </h5>
            <input
              type="number"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              required /><br></br>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
          </div>


          <div className='transaction'>
            <h2 className='header2'>Transactions: </h2>
            {list.length === 0 ? (
              <p>No expenses entered yet.</p>
            ) : (
              <ul>

                {list.map((item, index) => (
                  <>
                    <li key={index}>{date}  {item} {<button className='cancelbtn' onClick={() => deleteAmount(index)}>X</button>}</li>
                  </>
                ))}
              </ul>
            )
            }
          </div>
        </div>
      </div>

    </>
  );
}

export default Section;

