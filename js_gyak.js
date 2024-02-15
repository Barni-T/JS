let szolitas = window.prompt("Hogy nevezzem?");
document.getElementById("szolitas").innerHTML = szolitas;
let szamlalo = 1;
function nyom(){
    szamlalo++;
    if(szamlalo % 2 == 0){
        document.getElementById("meg_alatt").style.display = "block";
    }
    else{
        document.getElementById("meg_alatt").style.display = "none";
    }
}
function rajta(){
    document.getElementById("meg_2").style.background = "green";
    document.getElementById("meg_2").innerHTML = "Nyomjon meg!";
}
function nincs_rajta(){
    document.getElementById("meg_2").style.background = "red";
    document.getElementById("meg_2").innerHTML = "Vidd át rajtam!";
}
let jelszo;
function mehet(){
    jelszo = document.getElementById("jelszo").value;
}
function vicc(){
    window.alert("Akar látni valami vicceset? :)");
    window.alert("Ismerős? :D " + jelszo);
}
function igen(){
    document.getElementById("kar").style.display = "none";
    document.getElementById("lab").style.display = "block";
    document.getElementById("in").style.display = "block";
    document.getElementById("osszeg").style.display = "none";
    document.getElementById("ellenor").style.display = "block";
    document.getElementById("nem_jo").style.display = "none";
}
function nem(){
    document.getElementById("lab").style.display = "none";
    document.getElementById("in").style.display = "none";
    document.getElementById("kar").style.display = "block";
    document.getElementById("osszeg").style.display = "none";
    document.getElementById("ellenor").style.display = "none";
    document.getElementById("nem_jo").style.display = "none";
}
let jelszo_2;
function ellen(){
    jelszo_2 = document.getElementById("in").value;
    if(jelszo == jelszo_2){
        document.getElementById("osszeg").style.display = "block";
        document.getElementById("nem_jo").style.display = "none";
    }
    else{
        document.getElementById("nem_jo").style.display = "block";
        document.getElementById("osszeg").style.display = "none";
    }
}