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
      console.log(data);
      console.log(data.id);

      const p = document.querySelector("p");
      p.textContent = `New ID: ${data.id}`;
    })
    .catch((error) => console.log(error.message));
}
