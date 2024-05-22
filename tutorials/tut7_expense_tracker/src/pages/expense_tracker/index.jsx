import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransaction";
import "./styles.css";

export const ExpenseTracker = () => {

    const { addTransaction } = useAddTransaction();
    const { transactions } = useGetTransactions();

    const [description, setDescription] = useState("");
    const [transAmount, setTransAmount] = useState(0);
    const [transType, setTransType] = useState("expense");

    const onSubmit = async (e) => {
        e.preventDefault();
        addTransaction({
            description,
            transAmount,
            transType
        });
    };
    return (
        <>
            <div className="expense-tracker">
                <div className="container">
                    <h1>Expense tracker</h1>
                    <div className="balance">
                        <h3>Your Balance</h3>
                        <h2>R0.00</h2>
                    </div>
                    <div className="summary">
                        <div className="income">
                            <h4>Income</h4>
                            <p>R0.00</p>
                        </div>
                        <div className="expenses">
                            <h4>Expenses</h4>
                            <p>R0.00</p>
                        </div>
                    </div>
                    <form className="add-transaction" onSubmit={onSubmit}>
                        <input type="text"
                            placeholder="description"
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="amount"
                            required
                            onChange={(e) => setTransAmount(e.target.value)}
                        />
                        <input type="radio"
                            id="expense"
                            value="expense"
                            checked={transType === "expense"}
                            onChange={(e) => setTransType(e.target.value)}
                        />
                        <label for="expense">Expense</label>
                        <input
                            type="radio"
                            id="income"
                            value="income"
                            checked={transType === "income"}
                            onChange={(e) => setTransType(e.target.value)}
                        />
                        <label for="income">Income</label>

                        <button type="submit">Add Transaction</button>
                    </form>
                </div>
            </div>
            <div className="transactions">
                <h3>Transactions</h3>
                <ul>
                    {transactions.map((transaction) => {
                        const { description, transAmount, transType } = transaction;
                        return <li>
                            <h4>{description}</h4>
                            <p>R{transAmount} <label style={{color: transType==="expense"?"red":"green"}}>{transType}</label></p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}