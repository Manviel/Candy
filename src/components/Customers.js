import { useEffect, useState } from "react";
import { Redirect } from "wouter";

import { getCustomers } from "../services/customer";

import { useCustomerStore } from "../libs/store";

import "../styles/list.css";

const Customers = () => {
  const jwt = sessionStorage.getItem("jwt");

  if (!jwt) return <Redirect to="/login" />;

  const [page, setPage] = useState(0);

  const { state, dispatch } = useCustomerStore();

  const customers = state.customers;

  const loadCustomers = (param) => {
    getCustomers({ page: param, limit: 10 }).then((result) => {
      dispatch({ type: "load", payload: result });
    });
  };

  useEffect(() => {
    if (customers.length === 0) {
      loadCustomers(page);
    }
  }, [customers.length]);

  const handleNext = () => {
    setPage(page + 1);
    loadCustomers(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
    loadCustomers(page - 1);
  };

  return (
    <div className="file space">
      <h2 className="title">Customers</h2>
      {customers.length > 0 ? (
        <ul>
          {customers.map((c) => (
            <li key={c._id} className="card">
              <div>
                <h4>{c.name}</h4>
                <address>{c.address}</address>
              </div>

              <p>{c.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found</p>
      )}

      <section className="header">
        <button className="btn" onClick={handlePrev} disabled={page === 0}>
          Previous
        </button>
        <button onClick={handleNext} className="btn">
          Next
        </button>
      </section>
    </div>
  );
};

export default Customers;
