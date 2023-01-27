while (true) {
  const input = prompt("Podaj liczbę większą niż 100");
  
  if (input === null || parseInt(input) > 100) {
    break;
  }
  alert("Podana liczba nie jest większa niż 100. Spróbuj ponownie.");
}
