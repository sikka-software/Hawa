// useTable.js
import React, { useState, useEffect } from "react"

const calculateRange = (data, rowsPerPage) => {
  const range = []
  const num = Math.ceil(data?.length / rowsPerPage)
  let i = 1
  for (let i = 1; i <= num; i++) {
    range.push(i)
  }
  return range
}

const sliceData = (data, page, rowsPerPage) => {
  return data?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}

// useTable.js
const sortData = (data, sortColumn, sortDirection) => {
  if (sortColumn !== null) {
    return data?.sort((a, b) => {
      const aValue = a[sortColumn].value
      const bValue = b[sortColumn].value

      // Handle non-string values by using simple comparison
      if (typeof aValue === "string" && typeof bValue === "string") {
        if (sortDirection === "asc") {
          return aValue.localeCompare(bValue)
        } else {
          return bValue.localeCompare(aValue)
        }
      } else {
        if (sortDirection === "asc") {
          return aValue - bValue
        } else {
          return bValue - aValue
        }
      }
    })
  }
  return data
}

const useTable = (data, page, rowsPerPage, sortColumn, sortDirection) => {
  const [tableRange, setTableRange] = useState([])
  const [slice, setSlice] = useState([])

  useEffect(() => {
    if (data) {
      const range = calculateRange(data, rowsPerPage)
      setTableRange([...range])

      const sortedData = sortData(data, sortColumn, sortDirection)
      const slicedData = sliceData(sortedData, page, rowsPerPage)
      setSlice([...slicedData])
    }
  }, [data, setTableRange, page, rowsPerPage, sortColumn, sortDirection])

  return { slice, range: tableRange }
}

export default useTable

// import React, { useState, useEffect } from "react"

// const calculateRange = (data, rowsPerPage) => {
//   const range = []
//   const num = Math.ceil(data?.length / rowsPerPage)
//   let i = 1
//   for (let i = 1; i <= num; i++) {
//     range.push(i)
//   }
//   return range
// }

// const sliceData = (data, page, rowsPerPage) => {
//   return data?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
// }

// const sortData = (data, sortColumn, sortDirection) => {
//   if (sortColumn !== null) {
//     return data?.sort((a, b) => {
//       const aValue = a[sortColumn].value
//       const bValue = b[sortColumn].value

//       if (sortDirection === "asc") {
//         return aValue.localeCompare(bValue)
//       } else {
//         return bValue.localeCompare(aValue)
//       }
//     })
//   }
//   return data
// }

// const useTable = (data, page, rowsPerPage, sortColumn, sortDirection) => {
//   const [tableRange, setTableRange] = useState([])
//   const [slice, setSlice] = useState([])

//   useEffect(() => {
//     if (data) {
//       const range = calculateRange(data, rowsPerPage)
//       setTableRange([...range])

//       const sortedData = sortData(data, sortColumn, sortDirection)
//       const slicedData = sliceData(sortedData, page, rowsPerPage)
//       setSlice([...slicedData])
//     }
//   }, [data, setTableRange, page, rowsPerPage, sortColumn, sortDirection])

//   return { slice, range: tableRange }
// }

// export default useTable
//
//
//
//
//
//
//
//
//
//

// import React, { useState, useEffect } from "react"

// const calculateRange = (data, rowsPerPage) => {
//   const range = []
//   const num = Math.ceil(data?.length / rowsPerPage)
//   let i = 1
//   for (let i = 1; i <= num; i++) {
//     range.push(i)
//   }
//   return range
// }

// const sliceData = (data, page, rowsPerPage) => {
//   return data?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
// }

// const useTable = (data, page, rowsPerPage) => {
//   const [tableRange, setTableRange] = useState([])
//   const [slice, setSlice] = useState([])

//   useEffect(() => {
//     if (data) {
//       const range = calculateRange(data, rowsPerPage)
//       setTableRange([...range])

//       const slice = sliceData(data, page, rowsPerPage)
//       setSlice([...slice])
//     }
//   }, [data, setTableRange, page, setSlice, rowsPerPage])

//   return { slice, range: tableRange }
// }

// export default useTable
