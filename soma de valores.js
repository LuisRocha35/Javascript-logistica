function somar() {
    var t1 = window.document.getElementById('text1')
    var t2 = window.document.getElementById('text2')
    var res = window.document.getElementById('res')
    var tn1 = Number(t1.value)
    var tn2 = Number(t2.value)
    var valor = tn1 + tn2
    res.innerHTML = `A soma do numero ${tn1} com ${tn2} resulta em <strong>${valor}</strong>`
  }