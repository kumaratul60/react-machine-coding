/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import Table from "./components/Table";
import { mockData } from "./components/mockData";
import "./App.css";
import PaginationTable from "./components/PaginationTable";

const App = () => {

  // Define Rows and Columns
  const columns = useMemo(
    () => [
      {
        Header: "ID", // what see on UI
        accessor: "id", // Accessor is the key in the mock-data object
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );

  return (
    <div>
      <h1>React Table Example</h1>
      {/* <Table columns={columns} data={mockData} /> */}
      <PaginationTable columns={columns} data={mockData} />
    </div>
  );
};

export default App;
