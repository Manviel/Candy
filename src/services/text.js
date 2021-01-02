export const getDataMuse = async () => {
  const response = await fetch(`http://localhost:3080/`);

  const json = await response.json();

  return json;
};

export const getMuseWords = async (query) => {
  const response = await fetch(
    `https://api.datamuse.com/words?rel_syn=${query}`
  );

  const json = await response.json();

  return json;
};
