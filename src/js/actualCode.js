function pimp() {
  console.log('RODANDO')
  var el = document.getElementById("text");
  if (el) {
    el.style = "color: #93a1a1; background-color: #002b36";
  } else {
    console.log('achei nao');
  }
};

pimp();