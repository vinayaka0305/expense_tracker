import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import { useLoacalStorage } from "./hooks/useLocalStorage";

function App() {
  // const [userDetails, setUserDetails] = useState({
  //   title: "",
  //   category: "",
  //   amount: "",
  //   // email: "",
  // });
  const [userDetails, setUserDetails] = useLoacalStorage('userDetails',{
    title: "",
    category: "",
    amount: "",
    // email: "",
  });
  const [expenses, setExpenses] = useLoacalStorage("expenses",expenseData);
  // const [expenses, setExpenses] = useState(expenseData);
  // const [editingRowId, setEditingRowId] = useState("");
  const [editingRowId, setEditingRowId] = useLoacalStorage("editingRowId",'');

  // const [localData, setLocalData] = useLoacalStorage("myNum", [1, 2, 3]);
  // console.log(localData);

  return (
    <main>
      <h1 >
        Track Your Expense
      </h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setUserDetails={setUserDetails}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
