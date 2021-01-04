import { useEffect } from "react";
import { Redirect } from "wouter";

import { getCustomers } from "../services/customer";

import { useCustomerStore } from "../libs/store";

import "../styles/list.css";

const Customers = () => {
  const jwt = sessionStorage.getItem("jwt");

  if (!jwt) return <Redirect to="/login" />;

  const { state, dispatch } = useCustomerStore();

  const customers = state.customers;

  useEffect(() => {
    if (customers.length === 0) {
      getCustomers().then((result) => {
        dispatch({ type: "load", payload: result });
      });
    }
  }, [customers.length]);

  return (
    <div className="file space">
      <h2 className="title">Customers</h2>
      {customers.length > 0 ? (
        <ul>
          {customers.map((c) => (
            <li key={c._id} className="card">
              <div>
                <p>{c.name}</p>
                <p>{c.address}</p>
              </div>

              <p>{c.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

export default Customers;
