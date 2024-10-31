import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({
  setExpenses,
  userDetails,
  setUserDetails,
  editingRowId,
  setEditingRowId,
}) => {
  const [errors, setErrors] = useState({});

  const validateConfig = {
    title: [
      { required: true, message: "please enter title" },
      { minLength: 5, message: "title should be atleast 5 characters long" },
    ],
    category: [{ required: true, message: "please select a category" }],
    amount: [
      { required: true, message: "please enter amount" },
      { pattern: /^[1-9]\d*(\.\d+)?$/, message: "please enter a valid number" },
    ],
    // email: [
    //   { required: true, message: "please enter email" },
    //   {
    //     pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    //     message: "please enter an valid email",
    //   },
    // ],
  };

  const validate = (formData) => {
    // console.log(formData)
    const errorsData = {};
    // console.log(Object.entries(formData));
    Object.entries(formData).forEach(([key, value]) => {
      // console.log(key,value)
      // console.log(validateConfig[key])
      validateConfig[key].some((rule) => {
        // console.log(rule);
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < 5) {
          errorsData[key] = rule.message;
          return true;
        }
        if(rule.pattern && !rule.pattern.test(value)){
          errorsData[key] = rule.message
        }
        // if (rule.pattern && !rule.pattern.test(value)) {
        //   errorsData[key] = rule.message;
        //   return true;
        // }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(userDetails);
    // console.log(Object.keys(validateResult));
    if (Object.keys(validateResult).length) return;

    if (editingRowId) {
      setExpenses((prev) =>
        prev.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...userDetails, id: editingRowId };
          }
          return prevExpense;
        })
      );
      setUserDetails({
        title: "",
        category: "",
        amount: "",
      });
      setEditingRowId("");
      return;
    }
    setExpenses((prev) => [
      ...prev,
      { ...userDetails, id: crypto.randomUUID() },
    ]);

    setUserDetails({
      title: "",
      category: "",
      amount: "",
    });
  };

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      {/* <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={userDetails.title}
          onChange={onchangeHandler}
        />
        <p className="error">{errors.title}</p>
      </div> */}
      <Input
        label="Title"
        id="title"
        name="title"
        value={userDetails.title}
        onChange={onchangeHandler}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={userDetails.category}
        onChange={onchangeHandler}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Select category"
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={userDetails.amount}
        onChange={onchangeHandler}
        error={errors.amount}
      />
      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
};

export default ExpenseForm;
