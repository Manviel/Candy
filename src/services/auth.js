export const loginUser = async (formValues) => {
  const response = await fetch(`${process.env.REACT_APP_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });

  const json = await response.json();

  return json;
};

export const registerUser = async (formValues) => {
  const response = await fetch(`${process.env.REACT_APP_API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });

  const json = await response.json();

  return json;
};
