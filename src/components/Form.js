import React, { useContext } from "react";
import axios from "axios";
import CompanyContext from "../contexts/CompanyContext";
const apiKey = process.env.REACT_APP_API_KEY;

const Form = () => {
  const { company, setCompany } = useContext(CompanyContext);

  const onChangeHandler = (e) => {
    setCompany({ [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let url = "https://api.builtwith.com/free1/api.json?";
    let key = "KEY=" + apiKey;
    let qry = "&LOOKUP=" + company.domain;
    let call = url + key + qry;
    return axios.get(call).then((response) => setCompany(response.data.groups));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        name="domain"
        type="text"
        placeholder="domain"
        onChange={onChangeHandler}
      />
      <input type="submit" value="Fetch Domain" />
    </form>
  );
};

export default Form;
