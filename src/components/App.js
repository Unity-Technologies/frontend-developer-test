import React from "react";
import "../App.css";
import Box from "@material-ui/core/Box";
import MyTable from "./MyTable.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectUser from "./ProjectUser.jsx";

export const App = () => {
  return (
    <>
      <div data-testid="app-box" xs={12} md={4} lg={6}>
        <MyTable />
        <ProjectUser />
      </div>
    </>
  );
};

export default App;
