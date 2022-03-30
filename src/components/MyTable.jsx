// import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import api from "../lib/api";
import TableData from "./TableData";

const MyTable = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await api.getUsersDiff();

      const dataInfo = result.data;
      console.log(dataInfo);
      setData(dataInfo);
      setIsError(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <TableData
        data-testid="table-1"
        data={data}
        isError={isError}
        isLoading={isLoading}
        fetchData={fetchData}
      />
    </>
  );
};

export default MyTable;
