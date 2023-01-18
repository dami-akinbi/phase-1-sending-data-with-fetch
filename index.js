// Add your code here
function submitData(username, userEmail) {
  return fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: username, email: userEmail }),
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => console.log(error.message));
}
