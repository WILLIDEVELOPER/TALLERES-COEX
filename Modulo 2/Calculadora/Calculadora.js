function operaciones(op) {
  var ops = {
    sumar: function sumarNumeros(n1, n2) {
      return parseInt(n1) + parseInt(n2);
    },

    restar: function restarNumeros(n1, n2) {
      return parseInt(n1) - parseInt(n2);
    },

    multiplicar: function multiplicarNumeros(n1, n2) {
      return parseInt(n1) * parseInt(n2);
    },

    dividir: function dividirNumeros(n1, n2) {
      return parseInt(n1) / parseInt(n2);
    },
  };

  var operacion;
  let history = []
  let datos = {
    numeros: [],
    operacion: "",
    resultado: 0,
  }

  switch (op) {
    case "sumar":
      var operando1 = document.getElementById("resultado").value;
      document.getElementById("resultado").value = operando1 + "+";
      operacion = document.getElementById("resultado").value;
      document.getElementById("memoria").value = "suma";
      break;
    case "restar":
      var operando1 = document.getElementById("resultado").value;
      document.getElementById("resultado").value = operando1 + "-";
      operacion = document.getElementById("resultado").value;
      document.getElementById("memoria").value = "resta";
      break;
    case "multiplicar":
      var operando1 = document.getElementById("resultado").value;
      document.getElementById("resultado").value = operando1 + "*";
      operacion = document.getElementById("resultado").value;
      document.getElementById("memoria").value = "multiplicacion";
      break;
    case "dividir":
      var operando1 = document.getElementById("resultado").value;
      document.getElementById("resultado").value = operando1 + "/";
      operacion = document.getElementById("resultado").value;
      document.getElementById("memoria").value = "division";
      break;

    case "igual":
      operacion = document.getElementById("resultado").value;

      var memoriaop = document.getElementById("memoria").value;

      switch (memoriaop) {
        case "suma":
          var operandos = operacion.split("+");
          var resultado = ops.sumar(operandos[0], operandos[1]);
          datos.numeros.push(operandos[0], operandos[1])
          datos.operacion = memoriaop
          datos.resultado = resultado
          history.push(datos)
          datos = {}

          history.forEach(el =>{
            console.log(el);
          })
          document.getElementById("resultado").value = resultado;
          break;
        case "resta":
          var operandos = operacion.split("-");
          var resultado = ops.restar(operandos[0], operandos[1]);
          document.getElementById("resultado").value = resultado;
          break;
        case "multiplicacion":
          var operandos = operacion.split("*");
          var resultado = ops.multiplicar(operandos[0], operandos[1]);
          document.getElementById("resultado").value = resultado;
          break;
        case "division":
          var operandos = operacion.split("/");
          var resultado = ops.dividir(operandos[0], operandos[1]);
          document.getElementById("resultado").value = resultado;
          break;
      }
      break;
    case "limpiar":
        document.getElementById("resultado").value = 0
        break;
  }
}
