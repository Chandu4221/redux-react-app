export const getUserData = dispatch => {
  dispatch({ type: "LOADING" });
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(jsonData => {
      dispatch({ type: "LOADED", payload: jsonData });
    })
    .catch(err => {
      dispatch({ type: "ERROR", payload: err });
    });
};
