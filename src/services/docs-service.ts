export const fetchDocs = () => {
  return fetch("http://localhost:8080/docs")
    .then((response) => response.json())
    .catch((e) => {
      console.error(e);
    });
};

export const postComment = () => {

  const someBody = {
    title: "Hello!",
  };

  fetch("http://localhost:8080/docs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(someBody)
  });
};
