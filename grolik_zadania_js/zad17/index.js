const login = prompt("Proszę o podanie nazwy użytkownika");

if (login === "Admin") {
  const password = prompt("Proszę o podanie hasła");
  
  if (password === null) {
    alert("Login canceled");
  } else if (password === "Black Overlord") {
    alert("Welcome!");
  } else {
    alert("Password is incorrect");
  }
} else if (login === null) {
  alert("Login canceled");
} else {
  alert("I do not know you");
}
