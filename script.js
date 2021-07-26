function insert(num){
    var fz = document.form.textinput.value
    document.form.textinput.value = fz + num
}

function calculate(){
    var fz =document.form.textinput.value
    document.form.textinput.value = eval(fz)
}

function clean(){
    document.form.textinput.value = ""
}

function back(){
    var fz =document.form.textinput.value
    document.form.textinput.value = fz.substring(0,fz.length-1)
}

function sqrt() {
    var fz = document.form.textinput.value
    document.form.textinput.value = Math.sqrt(fz)
}

function calc_log(){
    var fz = document.form.textinput.value
    document.form.textinput.value = Math.log(fz)
}

function exp(){
    var fz = document.form.textinput.value
    document.form.textinput.value = Math.exp(fz)
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
