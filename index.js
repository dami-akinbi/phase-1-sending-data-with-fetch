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
    .then((res) => res.json())
    .then((data) => {
      document.body.innerHTML = data["id"];
    })
    .catch((error) => {
      document.body.innerHTML = error.message;
    });
}
