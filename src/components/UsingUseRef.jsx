import React, { useState } from "react";

const UsingUseRef = ({ setExpenses }) => {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");

  const [userDetails, setUserDetails] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // const titleRef = useRef();
  // const categoryRef = useRef();
  // const amountRef = useRef();

  //component will re-render when the state variable is updated

  //using useRef it will not cause the re-render of the component but it remember the value that has updated
  // const myRef = useRef(0)

  //updating the let also will not re-rendering the component
  // let myNum = 0;

  // const myRef = useRef(0)

  // // useRef is used to directly access the DOM node and modify its background color.
  // useEffect(()=>{
  //   // console.log(myRef.current);
  //   // myRef.current.style.backgroundColor = "red"
  //   console.log(myRef.current.value);
  // },[])

  const onchangeHandler = (e) => {
    const { name, value } = e.target;

    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // const expenselist = { ...getFormData(e.target), id: crypto.randomUUID() };
    // setExpenses((prev) => [...prev, expenselist]);
    // console.log(getFormData(e.target))
    // e.target.reset();
    // const expense = {title,category,amount,id:crypto.randomUUID()};
    // setExpenses((prev)=>[...prev,expense])
    // setTitle('');
    // setCategory('');
    // setAmount('')
    setExpenses((prev) => [
      ...prev,
      { ...userDetails, id: crypto.randomUUID() },
    ]);

    setUserDetails({
      title: "",
      category: "",
      amount: "",
    });

    // setExpenses((prev) => [
    //   ...prev,
    //   {
    //     title: titleRef.current.value,
    //     category: categoryRef.current.value,
    //     amount: amountRef.current.value,
    //     id: crypto.randomUUID(),
    //   },
    // ]);

    // console.log({
    //   title:titleRef.current.value,
    //   category:categoryRef.current.value,
    //   amount:amountRef.current.value,
    //   id:crypto.randomUUID()
    // })
  };

  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };

  // useEffect(() => {
  //   console.log('rendering');
  // });
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={userDetails.title}
          onChange={onchangeHandler}
          // ref={titleRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={userDetails.category}
          onChange={onchangeHandler}
          // ref={categoryRef}
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
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={userDetails.amount}
          onChange={onchangeHandler}
          // ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default UsingUseRef;
