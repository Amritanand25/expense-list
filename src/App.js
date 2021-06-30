import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';
import React,{ useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Books',
    amount: 500,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New Fan', amount: 1000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Food Item',
    amount: 400,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Laptop',
    amount: 45000,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    // console.log("Int APP Js")
    // console.log(expense);
    setExpenses([expense, ...expenses]);

  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
