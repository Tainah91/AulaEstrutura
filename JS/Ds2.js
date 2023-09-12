/*


Mostre apenas os números pares

inicio=2
condição= até 12
*/

/*
PODE SER ESSA FUNÇÃO


function showNumbersEven() {

    alert(2)
    alert(4)
    alert(6)
    alert(8)
    alert(10)
    alert(12)

}
*/
/*
function showNumbersEven(){
      let contador = 0
      while (contador < 14){
          alert (contador)
          contador = contador + 2
      }
}
*/

function showNumbersEven(){
    for(let contador=0;contador<14;contador+=2)
    alert (contador)
}