function insert(num){
    var fz = document.form.textinput.value
    document.form.textinput.value = fz + num
}

function calculate(){
    var fz =document.form.textinput.value
    document.form.textinput.value = eval(fz)
    document.getElementById('prevResult').innerHTML = eval(fz)
}

function clean(){
    document.form.textinput.value = ""
    document.getElementById('prevResult').innerHTML = 0
}

function back(){
    var fz =document.form.textinput.value
    document.form.textinput.value = fz.substring(0,fz.length-1)
    document.getElementById('prevResult').innerHTML=fz.substring(0,fz.length-1)
    let z = fz.substring(fz.length-1,fz.length)
    let y = fz.substring(fz.length-2,fz.length-1)
}

function sqrt() {
    var fz = document.form.textinput.value
    document.form.textinput.value = parseFloat(Math.sqrt(fz)).toFixed(2)
    document.getElementById('prevResult').innerHTML=parseFloat(Math.sqrt(fz)).toFixed(2)
}

function calc_log(){
    var fz = document.form.textinput.value
    document.form.textinput.value = parseFloat(Math.log(fz)).toFixed(2)
    document.getElementById('prevResult').innerHTML=parseFloat(Math.log(fz)).toFixed(2)
}

function exp(){
    var fz = document.form.textinput.value
    document.form.textinput.value = parseFloat(Math.exp(fz)).toFixed(3)
    document.getElementById('prevResult').innerHTML=parseFloat(Math.exp(fz)).toFixed(3)
}

function percent(){
    var fz = document.form.textinput.value
    document.form.textinput.value = fz/100
}


function radian(){
    var fz = document.form.textinput.value
    document.form.textinput.value = parseFloat((fz * (3.14/180)).toFixed(3))
}

function degree(){
    var fz = document.form.textinput.value
    document.form.textinput.value = parseFloat((fz * (180 / 3.14)).toFixed(2))
}

function cos(){
    var fz = document.form.textinput.value
    document.form.textinput.value = parseFloat(Math.cos(fz * (Math.PI / 180)).toFixed(2))
}

function sin(){
    var fz = document.form.textinput.value
    document.form.textinput.value = parseFloat(Math.sin(fz * (Math.PI / 180)).toFixed(2))
}