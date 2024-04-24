function result() {
  var start = document.getElementById("startNumber");
  var finish = document.getElementById("finishNumber");
  var jumps = document.getElementById("jumps");
  var result = document.getElementById("result");
  if (
    Number(start.value) == 0 ||
    Number(finish.value.start) == 0 ||
    Number(jumps.value) == 0
  ) {
    window.alert(`Please check all input areas`);
  } else {
    result.innerHTML = `Counting`;
    var startNumber = Number(start.value);
    var finishNumber = Number(finish.value);
    var jumpsNumber = Number(jumps.value);
    if (startNumber < finishNumber) {
      //Contagem crescente
      for (
        let contador = startNumber;
        contador <= finishNumber;
        contador += jumpsNumber
      ) {
        result.innerHTML += ` ${contador} \u{1F449}`;
      }
    } else if (finishNumber < startNumber) {
      //Contagem decrescente
      for (
        let contador = startNumber;
        contador > finishNumber;
        contador -= jumpsNumber
      ) {
        result.innerHTML += ` ${contador} \u{1F449}`;
      }
    }
    result.innerHTML += `\u{1F3C1}`;
  }
}
