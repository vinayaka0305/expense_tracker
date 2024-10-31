import React from "react";

const ContextMenu = ({
  menuPosition,
  setMenuPositon,
  setExpenses,
  rowId,
  setUserDetails,
  expenses,
  setEditingRowId
}) => {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          // console.log("editing");
          // console.log(rowId);
          const {title,category,amount} = expenses.find((expense)=>expense.id === rowId)
          // console.log(foundExpense);
          setEditingRowId(rowId);
          setUserDetails({title,category,amount});
          setMenuPositon({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          // console.log("deleting");
          setExpenses((prev) => prev.filter((expense) => expense.id !== rowId));
          setMenuPositon({});
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
