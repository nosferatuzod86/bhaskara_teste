function calcularBhaskara() {
    var txta = window.document.getElementById('txtvala')
    var a = Number(txta.value)
    var txtb = window.document.getElementById('txtvalb')
    var b = Number(txtb.value)
    var txtc = window.document.getElementById('txtvalc')
    var c = Number(txtc.value)
    var res = window.document.getElementById('res')

    res.innerHTML = `<p>Valores:</p>`
    res.innerHTML += `<p>O A é: ${a}</p>`
    res.innerHTML += `<p>O B é: ${b}</p>`
    res.innerHTML += `<p>O C é: ${c}</p>`

    //cálculo de Delta
    var delta = ((b ** 2)-(4 * a * c));

    

   // if (a != 0) {
    res.innerHTML += `<p>O Delta é: ${delta}</p>`
    if (delta < 0){
        res.innerHTML += `<p>O Delta possui um valor negativo e a conta não pode continuar por se tratar de uma raiz negativa</p>`
    }
    //res.innerHTML += `maldito kakaroto</p>`
    if (a == 0){
        res.innerHTML += `<p>O valor de A é igual a Zero (0), a equação não vai poder ser feita pois não é possível dividir por Zero (0)</p>`
    }
    
   // } else {
   // res.innerHTML = `<p> Cálculo vai dar uma divisão por zero (0).</p>`
   // }
    //var x1 = ((-b - Math.sqrt(delta))/(2*a))
    var x1 = ((-b + Math.sqrt(delta))/(2*a));
    var x2 = ((-b - Math.sqrt(delta))/(2*a));

    res.innerHTML += `<p>O x1 é: ${x1}</p>`

    res.innerHTML += `<p>O x2 é: ${x2}</p>`

}