import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MyTable from "../MyTable.jsx";

test("render component", () => {
  render(<MyTable />);
  const MyTableElement = screen.getByTestId("table-1");
  expect(MyTableElement).toBeInTheDocument();
});
