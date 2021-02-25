import React, { useContext } from "react";
import CompanyContext from "../contexts/CompanyContext";

const ShowResults = () => {
  const { company } = useContext(CompanyContext);

  return (
    <div id="results">
      {company.length > 0 &&
        company.map((inc, idx) => {
          return (
            <ul key={idx}>
              <li>{inc.name}</li>
              <ul>
                {inc.categories.map((tech, id) => {
                  return <li key={id}>{tech.name}</li>;
                })}
              </ul>
            </ul>
          );
        })}
    </div>
  );
};

export default ShowResults;
