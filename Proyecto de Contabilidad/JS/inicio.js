function Clasificacion() {
    let cuenta = document.getElementById("a1").value;
    let monto = document.getElementById("b1").value;
    
    if(cuenta=="Caja"){
        document.getElementById("c1").innerHTML="Activo";
        document.getElementById("d1").innerHTML=monto;
        document.getElementById("e1").innerHTML="";
    }else if(cuenta=="Proveedores"){
        document.getElementById("c1").innerHTML="Pasivo";
        document.getElementById("e1").innerHTML=monto;
        document.getElementById("d1").innerHTML="";
    }else if(cuenta=="Acreedores"){
        document.getElementById("c1").innerHTML="Pasivo";
        document.getElementById("e1").innerHTML=monto;
        document.getElementById("d1").innerHTML="";
    }else if(cuenta=="Aguinaldo"){
        document.getElementById("c1").innerHTML="Gasto";
        document.getElementById("d1").innerHTML=monto;
        document.getElementById("e1").innerHTML="";
    }else{
        document.getElementById("c1").innerHTML="";
        document.getElementById("d1").innerHTML="";
        document.getElementById("e1").innerHTML="";

    }

    let cuenta2 = document.getElementById("a2").value;
    let monto2 = document.getElementById("b2").value;
    if(cuenta2=="Caja"){
        document.getElementById("c2").innerHTML="Activo";
        document.getElementById("d2").innerHTML=monto2;
        document.getElementById("e2").innerHTML="";
    }else if(cuenta2=="Proveedores"){
        document.getElementById("c2").innerHTML="Pasivo";
        document.getElementById("e2").innerHTML=monto2;
        document.getElementById("d2").innerHTML="";
    }else if(cuenta2=="Acreedores"){
        document.getElementById("c2").innerHTML="Pasivo";
        document.getElementById("e2").innerHTML=monto2;
        document.getElementById("d2").innerHTML="";
    }else if(cuenta2=="Aguinaldo"){
        document.getElementById("c2").innerHTML="Gasto";
        document.getElementById("d2").innerHTML=monto2;
        document.getElementById("e2").innerHTML="";
    }else{
        document.getElementById("c2").innerHTML="";
        document.getElementById("d2").innerHTML="";
        document.getElementById("e2").innerHTML="";

    }
    
    let suma;
    suma=parseInt(monto)+parseInt(monto2);
    document.getElementById("d3").innerHTML=suma;
}

