var foot = document.getElementById('foot');
foot.addEventListener('input' , function(){
    let f = this.value;
    let i = f*12;
    inche.value = i;
});
var inche= document.getElementById("inche");

inche.addEventListener('input',function(){
    let i = this.value;
    let f = i/12;

    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    foot.value = f;
});