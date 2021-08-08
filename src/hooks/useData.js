import React from "react";
import { useEffect, useState } from "react";

const useData = (props) => {
  const [data, setData] = useState([]);
  const [IFSC, setIfsc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ category: "", city: "MUMBAI" });
  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem(formData.city) !== null) {
      setIsLoading(false);
      setData(JSON.parse(localStorage.getItem(formData.city.toUpperCase())));
    } else {
      fetch(
        `https://vast-shore-74260.herokuapp.com/banks?city=${formData.city}`
      )
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem(formData.city, JSON.stringify(json));
          setData(json);
          setIsLoading(false);
        });
    }
  }, [formData.city]);

  return {
    data,
    setData,
    isLoading,
    setIsLoading,
    formData,
    setFormData,
    IFSC,
    setIfsc,
  };
};

export default useData;
