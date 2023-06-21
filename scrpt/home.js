let chk = document.getElementById("checkbox");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("pagina_esquerda").classList.toggle("dark1");
  document.getElementById("texto").classList.toggle("dark2");
  document.getElementById("inputPag").classList.toggle("dark3");
  document.getElementById("inputPag2").classList.toggle("dark3");
  document.getElementById("btnEsq").classList.toggle("dark4");
});inputPag2
