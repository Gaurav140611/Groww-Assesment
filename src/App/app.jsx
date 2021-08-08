import React, { useState, useEffect } from "react";
import PaginationComponent from "../Components/pagination/pagination";
import Select, { NonceProvider } from "react-select";

import "./styles.css";
import useData from "../hooks/useData";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import CircleLoader from "react-spinners/CircleLoader";
import { useHistory, useParams } from "react-router-dom";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const { data, setData, isLoading, setIsLoading, formData, setFormData } =
    useData();
  const history = useHistory();
  const styles = {
    control: (data) => ({
      ...data,
      height: "2.5vw",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#adadad",
      borderRadius: 8,
      fontSize: "0.8vw",
      fontFamily: "Montserrat",
    }),
    menu: (data) => ({
      ...data,
      fontFamily: "Montserrat",
      fontSize: "0.8vw",
    }),
  };

  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["bank_name"]);
  const handleSelectChange = (object, action) => {
    let name = action.name;
    let value = object.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setSearchColumns([value]);
  };

  const handleSelectChange1 = (object, action) => {
    let name = action.name;
    let value = object.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const List = [
    { value: "bank_name", label: "Bank Name" },
    { value: "ifsc", label: "IFSC Code" },
    { value: "bank_id", label: "Bank ID" },
    { value: "address", label: "Address" },
    { value: "branch", label: "Branch" },
    { value: "city", label: "City" },
  ];

  const CITIES = [
    { value: "MUMBAI", label: "MUMBAI" },
    { value: "CHENNAI", label: "CHENNAI" },
    { value: "PUNE", label: "PUNE" },
    { value: "BANGALORE", label: "BANGALORE" },
    { value: "DELHI", label: "DELHI" },
  ];

  const [currentPage, setcurrentPage] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(15);

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);
  return !isLoading ? (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box>
          <Typography variant="h4" color="secondary">
            BANK BAZAAR{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <label>
          <Typography variant="h6" color="primary">
            Search
          </Typography>
        </label>
        <Box className="search">
          <input
            type="text"
            className="searchTerm"
            value={q}
            placeholder="Search Your Category "
            onChange={(e) => {
              setQ(e.target.value);
              setcurrentPage(1);
            }}
          />
          <button class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" color="primary">
          Select Category
        </Typography>
        <Select
          styles={styles}
          name="category"
          onChange={handleSelectChange}
          options={List}
          defaultValue={{ label: "Bank Name", value: 0 }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              text: "black",
              primary25: "white",
              primary: "#24cebd",
              primary50: "#f5fcfb",
            },
          })}
        ></Select>
      </Grid>

      <Grid item xs={4}>
        <label>
          <Typography variant="h6" color="primary">
            Select City
          </Typography>
        </label>
        <Select
          styles={styles}
          name="city"
          onChange={handleSelectChange1}
          options={CITIES}
          defaultValue={{ label: "MUMBAI", value: 0 }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              text: "black",
              primary25: "white",
              primary: "#24cebd",
              primary50: "#f5fcfb",
            },
          })}
        ></Select>
      </Grid>
      <Grid item xs={12}>
        <PaginationComponent
          isLoading={isLoading}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
          data={data}
          search={search}
        />
      </Grid>
    </Grid>
  ) : (
    <Box ml={50} mt={30}>
      {" "}
      <CircleLoader color={"#0bb7a7"} loading={isLoading} size={400} />
    </Box>
  );
}
