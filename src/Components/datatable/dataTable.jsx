import { Button, Icon } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useData from "../../hooks/useData";

export default function Datatable({ isLoading, data, currentPage }) {
  const history = useHistory();
  const columns = data[0] && Object.keys(data[0]);
  const [selectedRow, setSelectedRow] = useState(-1);
  const [selectedRowPage, setSelectedRowPage] = useState(-1);
  const handleClick = (item) => history.push(`/bank-details/${item}`);
  const { setIfsc } = useData();

  return (
    <table className="styled-table">
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            onClick={(e) => {
              setSelectedRow(index);
              setSelectedRowPage(currentPage);
              handleClick(row.ifsc);
              setIfsc(row.ifsc);
            }}
            className={
              selectedRow == index && selectedRowPage === currentPage
                ? "active-row"
                : null
            }
          >
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
