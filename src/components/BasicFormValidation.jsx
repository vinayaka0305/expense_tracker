import React, { useState } from "react";

const BasicFormValidation = ({ setExpenses }) => {
  const [userDetails, setUserDetails] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    // console.log(formData)
    const errorsData = {};
    if (!formData.title) {
      errorsData.title = "Title is required";
    }
    if (!formData.category) {
      errorsData.category = "Please select a Category";
    }
    if (!formData.amount) {
      errorsData.amount = "Amount is required";
    }

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(userDetails);
    // console.log(Object.keys(validateResult));
    if (Object.keys(validateResult).length) return;
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
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={userDetails.title}
          onChange={onchangeHandler}
        />
        <p className="error">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={userDetails.category}
          onChange={onchangeHandler}
        >
          <option value="" hidden>
            Select Category
          </option>

          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={userDetails.amount}
          onChange={onchangeHandler}
        />
        <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default BasicFormValidation;
