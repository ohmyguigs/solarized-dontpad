function pimp() {
  console.debug('pimp my dontpad, rodando!');
  var el = document.getElementById("text");
  if (el) {
    el.style = "color: #93a1a1; background-color: #002b36";
    console.debug('P.I.M.P');
  } else {
    console.debug('vishe... achei não');
  }
};

pimp();
