import { useState } from 'react';
import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseList from './ExpenseList';
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };

    const filteredList = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                selected = {filteredYear} 
                onAddedFilter = {filterChangeHandler}/>
                <ExpensesChart expenses={filteredList} />
                <ExpenseList items={filteredList}/>
            </Card>
        </div>
    );
    

}

export default Expenses;