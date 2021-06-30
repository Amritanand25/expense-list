import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
   const [isEditing, setISEditing] = useState(false);
 
    const saveExpanseDataHandler = (enteredExpenseData) =>{
       const expenseData = {
           ...enteredExpenseData,
           id: Math.random().toString()
       };
    //    console.log(expenseData)
       props.onAddExpense(expenseData);
       setISEditing(false);
    }

    const startEditingHandler = () => {
       setISEditing(true);
    }

    const stopEditingHandler = () => {
       setISEditing(false);
    }

 return (
     <div className="new-expense">
        { !isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
        { isEditing && <ExpenseForm onSaveExpanseData={ saveExpanseDataHandler } onCancel = {stopEditingHandler} /> }
     </div>
 )
}

export default NewExpense;