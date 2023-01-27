const obj = {
  Warszawa: "Polska",
  Paryż: "Francja",
  Londyn: "Wielka Brytania",
};

for (const [key, value] of Object.entries(obj)) {
  document.write(key + " - " + value );
}
