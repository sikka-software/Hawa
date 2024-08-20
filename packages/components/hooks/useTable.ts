import React, { useState, useEffect } from "react";

const calculateRange = (data: any, rowsPerPage: any) => {
  const range = [];
  const num = Math.ceil(data?.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data: any, page: any, rowsPerPage: any) => {
  return data?.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

// useTable.js
const sortData = (data: any, sortColumn: any, sortDirection: any) => {
  if (sortColumn !== null) {
    return data?.sort((a: any, b: any) => {
      const aValue = a[sortColumn].value;
      const bValue = b[sortColumn].value;

      // Handle non-string values by using simple comparison
      if (typeof aValue === "string" && typeof bValue === "string") {
        if (sortDirection === "asc") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      } else {
        if (sortDirection === "asc") {
          return aValue - bValue;
        } else {
          return bValue - aValue;
        }
      }
    });
  }
  return data;
};

const useTable = (data: any, page: any, rowsPerPage: any, sortColumn: any, sortDirection: any) => {
  const [tableRange, setTableRange] = useState<any>([]);
  const [slice, setSlice] = useState<any>([]);

  useEffect(() => {
    if (data) {
      const range = calculateRange(data, rowsPerPage);
      setTableRange([...range]);

      const sortedData = sortData(data, sortColumn, sortDirection);
      const slicedData = sliceData(sortedData, page, rowsPerPage);
      setSlice([...slicedData]);
    }
  }, [data, setTableRange, page, rowsPerPage, sortColumn, sortDirection]);

  return { slice, range: tableRange };
};

export default useTable;
