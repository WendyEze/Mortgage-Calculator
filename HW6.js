

function calculate(){
    var p = parseFloat(document.getElementById("principal").value)
    var yr = parseFloat(document.getElementById("rate").value)
    var t = parseInt(document.getElementById("term").value)

    if (p <= 0 || yr <= 0 || t <= 0 || isNaN(p) || isNaN(yr) || isNaN(t)){
        alert("Please enter a valid positive numerical value.")
        return
    }

    var monthr = yr / 12

    var monpay = p * monthr/(1-(1/(1+yr)**t))
    var sumpay = monpay * t
    var totali = sumpay - p

    m = document.getElementById("monthly")
    s = document.getElementById("sum")
    i = document.getElementById("totalinterest")

    console.log(m)
    console.log(s)
    console.log(i)

    // m.innerHTML = m.innerHTML + monpay.toFixed(2)
    // s.innerHTML = s.innerHTML + sumpay.toFixed(2)
    // i.innerHTML = i.innerHTML + totali.toFixed(2)

    m.innerHTML = monpay.toFixed(2)
    s.innerHTML = sumpay.toFixed(2)
    i.innerHTML = totali.toFixed(2)
    
}

function clearform(){
    document.getElementById("Calculator").reset();

    document.getElementById("monthly").innerHTML = "--"
    document.getElementById("sum").innerHTML = "--"
    document.getElementById("totalinterest").innerHTML = "--"
}