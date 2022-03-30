import React from "react";
import Button from "@material-ui/core/Button";
import { Table, Spinner } from "react-bootstrap";
import SingleTable from "./SingleTable";

const TableData = ({ data, isError, isLoading, fetchData }) => {
  return (
    <div className="container-div">
      <center className="table-div">
        <Table>
          {/* {console.log(data)} */}
          <thead>
            <tr>
              <th>Date</th>
              <th>User ID</th>
              <th>Old Value</th>
              <th>New value</th>
            </tr>
          </thead>
          <tbody>
            <SingleTable data={data} />
          </tbody>
        </Table>

        {isLoading ? (
          <Spinner animation="border" />
        ) : isError ? (
          <div className="py-2">
            <p style={{ color: "red" }}>
              we had problems fetching your data. Please try again.
            </p>
            <Button variant="contained" color="primary" onClick={fetchData}>
              Retry
            </Button>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center py-2">
            <Button variant="contained" color="primary" onClick={fetchData}>
              Load more
            </Button>
          </div>
        )}
      </center>
    </div>
  );
};

export default TableData;
