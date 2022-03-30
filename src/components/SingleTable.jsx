import React from "react";

const SingleTable = ({ data, date }) => {
  return (
    <>
      {/* {console.log(data)} */}
      {console.log(date)}
      {data.map((value) => (
        <tr key={value.id}>
          <td>{new Date(value.timestamp).toISOString().slice(0, 10)}</td>
          <td>{value.id}</td>
          <td>{value.diff[0].oldValue}</td>
          <td>{value.diff[0].newValue}</td>
        </tr>
      ))}
    </>
  );
};

export default SingleTable;
