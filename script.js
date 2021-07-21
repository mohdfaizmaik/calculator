function insert(num){
    var text = document.form.textinput.value
    document.form.textinput.value = text + num
}

function calculate(){
    var text =document.form.textinput.value
    document.form.textinput.value = eval(text)
}

function clean(){
    document.form.textinput.value = ""
}

function back(){
    var text =document.form.textinput.value
    document.form.textinput.value = text.substring(0,text.length-1)
}

function sqrt() {
    var text = document.form.textinput.value
    document.form.textinput.value = Math.sqrt(text)
}