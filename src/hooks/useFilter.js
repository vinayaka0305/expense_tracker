import { useState } from "react";

export function useFilter(dataList, callback) {
  const [query, setQuery] = useState("");

//   console.log(callback);

  const filteredData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );
  return [filteredData, setQuery];
}
