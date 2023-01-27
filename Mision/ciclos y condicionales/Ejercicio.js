let samsung = parseInt(
  prompt("Ingrese la cantidad de celulares samsung disponibles")
);
let iphone = parseInt(
  prompt("Ingrese la cantidad de celulares iphone disponibles")
);
let xiaomi = parseInt(
  prompt("Ingrese la cantidad de celulares xiaomi disponibles")
);
let motorola = parseInt(
  prompt("Ingrese la cantidad de celulares motorola disponibles")
);
let huawei = parseInt(
  prompt("Ingrese la cantidad de celulares huawei disponibles")
);
let oppo = parseInt(
  prompt("Ingrese la cantidad de celulares oppo disponibles")
);

let cantVe = parseInt(prompt("Hay 6 marcas, cuantas desea vender(2,3,4....)"));

let opcion = 0;
let precioS = 0;
let precioI = 0;
let precioX = 0;
let precioM = 0;
let precioH = 0;
let precioOpp = 0;

let sToVen = 0;
let iToVen = 0;
let xToVen = 0;
let mToVen = 0;
let hToVen = 0;
let OppToVen = 0;

let sumatoria = 0
let precioTotalVentas = 0

if (
  samsung >= 0 &&
  iphone >= 0 &&
  xiaomi >= 0 &&
  motorola >= 0 &&
  huawei >= 0 &&
  oppo >= 0
) {
  if (cantVe > 0 && cantVe <= 6) {
    for (let index = 0; index < cantVe; index++) {
      opcion = parseInt(
        prompt(`De que marca desea vender: \n
                              1. -samsung 10k \n
                              2. -iphone 10k \n
                              3. -xiaomi 8k \n
                              4. -motorola 9k \n
                              5. -huawei 7k \n
                              6. -oppo 5k`)
      );
      switch (opcion) {
        case 1:
          precioS = 10000;
          sToVen = parseInt(prompt("Cuantos samsungs desea vender"));
          if (sToVen > 0 && sToVen <= samsung) {
            console.log("Puedes vender samsungs");
            console.log("Precio x Samsung: ", precioS);
            precioS = precioS * sToVen;
            console.log(
              "Precio total por todos los sansungs a vender: ",
              precioS
            );
            console.log("samsungs vendidos: ", sToVen);
            samsung = samsung - sToVen;
          } else if (sToVen > samsung || sToVen <= 0) {
            precioS = 0
            sToVen = 0
            console.log(
              "Puede que no haya suficientes sansungs o no quieras vender sansungs"
            );
            console.log("La cantidad de samsungs actual es: ", samsung);
          }
          break;
        case 2:
          precioI = 10000;
          iToVen = parseInt(prompt("Cuantos iphones desea vender"));
          if (iToVen > 0 && iToVen <= iphone) {
            console.log("Puedes vender iphones");
            console.log("Precio x Iphone: ", precioI);
            precioI = precioI * iToVen;
            console.log(
              "Precio total por todos los iphones a vender: ",
              precioI
            );
            console.log("iphones vendidos: ", iToVen);
            iphone = iphone - iToVen;
          } else if (iToVen > iphone || iToVen <= 0) {
            precioI = 0
            iToVen = 0
            console.log(
              "Puede que no haya suficientes iphones o no quieras vender iphones"
            );
            console.log("La cantidad de iphones actual es: ", iphone);
          }
          break;
        case 3:
          precioX = 8000;
          xToVen = parseInt(prompt("Cuantos xiaomis desea vender"));
          if (xToVen > 0 && xToVen <= xiaomi) {
            console.log("Puedes vender xiaomis");
            console.log("Precio x Xiaomi: ", precioX);
            precioX = precioX * xToVen;
            console.log("Precio total por todos los xiaomis: ", precioX);
            console.log("Xiamois vendidos: ", xToVen);
            xiaomi = xiaomi - xToVen;
          } else if (xToVen > xiaomi || xToVen <= 0) {
            precioX = 0
            xToVen = 0
            console.log(
              "Puede que no haya suficientes xiaomis o no quieras vender xiaomis"
            );
            console.log("La cantidad de xiaomis actual es: ", xiaomi);
          }
          break;
        case 4:
          precioM = 9000;
          mToVen = parseInt(prompt("Cuantos motorolas desea vender"));
          if (mToVen > 0 && mToVen <= motorola) {
            console.log("Puedes vender motorolas");
            console.log("Precio x Motorola: ", precioM);
            precioM = precioM * mToVen;
            console.log("Precio total por todos los motorolas: ", precioM);
            console.log("Motorolas vendidos: ", mToVen);
            motorola = motorola - mToVen;
          } else if (mToVen > motorola || mToVen <= 0) {
            precioM = 0
            mToVen = 0
            console.log(
              "Puede que no haya suficientes motorolas o no quieras vender motorolas"
            );
            console.log("La cantidad de motorolas actual es: ", motorola);
          }
          break;
        case 5:
          precioH = 7000;
          hToVen = parseInt(prompt("Cuantos huaweis desea vender"));
          if (hToVen > 0 && hToVen <= huawei) {
            console.log("Puedes vender huaweis");
            console.log("Precio x Huaweis: ", precioH);
            precioH = precioH * hToVen;
            console.log("Precio total por todos los huaweis: ", precioH);
            console.log("Huaweis vendidos: ", hToVen);
            huawei = huawei - hToVen;
          } else if (hToVen > huawei || hToVen <= 0) {
            precioH = 0
            hToVen = 0
            console.log(
              "Puede que no haya suficientes huaweis o no quieras vender huaweis"
            );
            console.log("La cantidad de huaweis actual es: ", huawei);
          }
          break;
        case 6:
          precioOpp = 5000;
          OppToVen = parseInt(prompt("Cuantos Oppos desea vender"));
          if (OppToVen > 0 && OppToVen <= oppo) {
            console.log("Puedes vender Oppos");
            console.log("Precio x Oppo: ", precioOpp);
            precioOpp = precioOpp * OppToVen;
            console.log("Precio total por todos los oppos: ", precioOpp);
            console.log("Oppos vendidos: ", OppToVen);
            oppo = oppo - OppToVen;
          } else if (OppToVen > oppo || OppToVen <= 0) {
            precioOpp = 0
            OppToVen = 0
            console.log(
              "Puede que no haya suficientes oppos o no quieras vender oppos"
            );
            console.log("La cantidad de oppos actual es: ", oppo);
          }
          break;

        default:
          alert("Esta marca de celular no esta dentro de nuestro inventario");
          opcion = parseInt(
            prompt(`De que marca desea vender: \n
                                    1. -samsung 10k \n
                                    2. -iphone 10k \n
                                    3. -xiaomi 8k \n
                                    4. -motorola 9k \n
                                    5. -huawei 7k \n
                                    6. -oppo 5k`)
          );
          break;
      }
    }
    precioTotalVentas = precioS + precioI + precioX + precioM + precioH + precioOpp
    sumatoria = sToVen + hToVen + mToVen + OppToVen + iToVen + xToVen
    console.log("VENTA REALIZADA CORRECTAMENTE")
    console.log(`Samsungs vendidos: ${sToVen} \n
    Huaweis vendidos: ${hToVen} \n
    Iphones vendidos: ${iToVen} \n
    Xiaomis Vendidos: ${xToVen} \n
    Oppos Vendidos: ${OppToVen} \n
    Motorolas Vendidos: ${mToVen} \n
    Total de celulares vendidos: ${sumatoria} \n
    Total dinero recaudado por la venta: ${precioTotalVentas}`);     
  } else {
    alert("Error mire la consola")
    console.log("Ingrese un numero valido de marcas a vender, SOLO HAY 6");
  }
}else{
    alert("Ingrese un numero valido para cada existencia de celular correspondiente a su cantidad")
}
