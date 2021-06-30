
import './Expenses.css';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import React, {useState} from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
   //console.log("Expenses.js");
   //console.log(selectedYear);
   setSelectedFilter(selectedYear);
  }

  const filteredExpenses = props.items.filter( (expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  })

  // let expensesContent = 'No Expenses Found!';
  // if(filteredExpenses.length > 0)
  // {
  //   expensesContent = (
  //     filteredExpenses.map( expense => (
  //       <ExpenseItem 
  //        key = {expense.id}
  //        title = {expense.title}
  //        amount = {expense.amount}
  //        date = {expense.date}
  //       />
  //      ) )
  //   )
  // }

  return (
    <div>
   
    <Card className="expenses">
    <ExpenseFilter selected={selectedFilter} onChangeFilter={filterChangeHandler} />
     <ExpensesChart expenses = {filteredExpenses} />
     <ExpensesList items={filteredExpenses} /> 
    </Card>
    </div>
  );
}

export default Expenses;
