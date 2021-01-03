import { useEffect, useState } from "react";
import { Redirect } from "wouter";

import { getCustomers } from "../services/customer";

const Customers = () => {
  const jwt = sessionStorage.getItem("jwt");

  if (!jwt) return <Redirect to="/login" />;

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then((result) => {
      setCustomers(result);
    });
  }, []);

  return (
    <>
      <h1>Customers</h1>
      <ul>
        {customers.map((c) => (
          <li key={c._id}>{c.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Customers;
