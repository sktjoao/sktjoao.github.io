function changeInput(elementId){
    var outputValueTo = document.getElementById('inputBox');
    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
        outputValueTo.value = elementId.textContent;
      } else {
    
        outputValueTo.value += elementId.textContent;
      }
}

function clearField(){
  document.getElementById('inputBox').value = 0;
}

function calcular(){
  var outputValueTo = document.getElementById('inputBox').value;
  console.log(outputValueTo);
  var resultado = parseFloat(eval(outputValueTo));
  document.getElementById('inputBox').value = resultado;
}


