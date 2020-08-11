let fetchInit = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default"
  };
fetch ("http://localhost:3000/users", fetchInit).then (
    data=>data.json(),
    err=>console.log(err)
).then (
    users=>console.log(users)
);  




/* const fetchData = fetch("http://localhost:3000/users", fetchInit);
fetchData.then(data => data.json()).then(data => console.log(data)); */




//A fetch() egy Promise-szal tér vissza, amit bátran használunk is. Elkérjük a JSON-t, és feldolgozzuk, mint az imént:
/* const postPromise = fetch("http://localhost:3000/users");
postPromise
  .then(data => data.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  }); */