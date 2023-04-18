import data from "./user.json" assert { type: "json" };
console.log(data.allUser);
document.getElementById("name").innerText = data.allUser;
