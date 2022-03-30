// import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import api from "../lib/api";
import TableData from "./TableData";

const ProjectUser = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await api.getProjectsDiff();
      const dataInfo = result.data;
      console.log(dataInfo);
      setData(dataInfo);
      setDate(dataInfo[0].diff.timestamp);
      console.log(dataInfo[0].diff.timestamp);
      setIsError(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  return (
    <TableData
      data={data}
      date={date}
      isError={isError}
      isLoading={isLoading}
      fetchData={fetchData}
    />
  );
};

export default ProjectUser;
