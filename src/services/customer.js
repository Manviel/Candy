export const getCustomers = async () => {
  const jwt = sessionStorage.getItem("jwt");

  const response = await fetch(`${process.env.REACT_APP_API}/customers`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const json = await response.json();

  return json;
};
