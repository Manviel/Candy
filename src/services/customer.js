export const getCustomers = async (params) => {
  const jwt = sessionStorage.getItem("jwt");

  const { page, limit } = params;

  const response = await fetch(
    `${process.env.REACT_APP_API}/customers?page=${page}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  const json = await response.json();

  return json;
};
