export const loginUser = async (formValues) => {
  const response = await fetch(`http://localhost:3080/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });

  const json = await response.json();

  return json;
};
