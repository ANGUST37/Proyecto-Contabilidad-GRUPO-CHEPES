function Clasificacion() {
    
    //FILA 1
    let cuenta = document.getElementById("a1").value;
    let monto = document.getElementById("b1").value;
    let debe=0;
    let haber=0;
    //ACTIVOS DB
    if(cuenta=="Caja"||cuenta=="Inventario"||cuenta=="Clientes"||cuenta=="Terrenos"||
        cuenta=="Maquinaria"||cuenta=="Doc por cobrar"||cuenta=="Inversiones"||cuenta=="Seguros por cobrar"
        ||cuenta=="Papeleria y utiles"||cuenta=="IVA por cobrar"||cuenta=="Vehiculos"||cuenta=="Bancos"
        ||cuenta=="Mobiliario y equipo")
    {   document.getElementById("c1").innerHTML="Activo";
        document.getElementById("d1").innerHTML=monto;
        document.getElementById("e1").innerHTML="";
        debe=monto;
    }
    //PASIVOS DB
    else if(cuenta=="Proveedores"||cuenta=="Cuota patronal por pagar"||cuenta=="Cuota laboral por pagar"
        ||cuenta=="Prestamos bancarios"||cuenta=="IVA por pagar"||cuenta=="Acreedores"||cuenta=="Doc por pagar"
        ||cuenta=="Reserva legal"){
        document.getElementById("c1").innerHTML="Pasivo";
        document.getElementById("e1").innerHTML=monto;
        document.getElementById("d1").innerHTML="";
        haber=monto;
    }
    //GASTOS DB
    else if(cuenta=="Bonificacion incentiva"||cuenta=="Horas extras"||cuenta=="Sueldos"||cuenta=="Seguros"||
            cuenta=="Aguinaldo"||cuenta=="Cuota patronal"||cuenta=="Costo de ventas"||cuenta=="Bono 14"){   
        document.getElementById("c1").innerHTML="Gasto";
        document.getElementById("d1").innerHTML=monto;
        document.getElementById("e1").innerHTML="";
        debe=monto;
    }
    //INGRESOS DB
    else if(cuenta=="Ventas"){
        document.getElementById("c1").innerHTML="Ingreso";
        document.getElementById("d1").innerHTML=monto;
        document.getElementById("e1").innerHTML="";
        debe=monto;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta=="Patrimonio"||cuenta=="Utilidades de años anteriores"){
        document.getElementById("c1").innerHTML="Patrimonio";
        document.getElementById("e1").innerHTML=monto;
        document.getElementById("d1").innerHTML="";
        haber=monto;
    }
    else{
        document.getElementById("c1").innerHTML="";
        document.getElementById("d1").innerHTML="";
        document.getElementById("e1").innerHTML="";

    }

    //FILA 2
    let cuenta2 = document.getElementById("a2").value;
    let monto2 = document.getElementById("b2").value;
    let debe2=0;
    let haber2=0;
    //ACTIVOS DB
    if(cuenta2=="Caja"||cuenta2=="Inventario"||cuenta2=="Clientes"||cuenta2=="Terrenos"||
        cuenta2=="Maquinaria"||cuenta2=="Doc por cobrar"||cuenta2=="Inversiones"||cuenta2=="Seguros por cobrar"
        ||cuenta2=="Papeleria y utiles"||cuenta2=="IVA por cobrar"||cuenta2=="Vehiculos"||cuenta2=="Bancos"
        ||cuenta2=="Mobiliario y equipo")
    {   document.getElementById("c2").innerHTML="Activo";
        document.getElementById("d2").innerHTML=monto2;
        document.getElementById("e2").innerHTML="";
        debe2=monto2;
    }
    //PASIVOS DB
    else if(cuenta2=="Proveedores"||cuenta2=="Cuota patronal por pagar"||cuenta2=="Cuota laboral por pagar"
        ||cuenta2=="Prestamos bancarios"||cuenta2=="IVA por pagar"||cuenta2=="Acreedores"||cuenta2=="Doc por pagar"
        ||cuenta2=="Reserva legal"){
        document.getElementById("c2").innerHTML="Pasivo";
        document.getElementById("e2").innerHTML=monto2;
        document.getElementById("d2").innerHTML="";
        haber2=monto2;
    }
    //GASTOS DB
    else if(cuenta2=="Bonificacion incentiva"||cuenta2=="Horas extras"||cuenta2=="Sueldos"||cuenta2=="Seguros"||
            cuenta2=="Aguinaldo"||cuenta2=="Cuota patronal"||cuenta2=="Costo de ventas"||cuenta2=="Bono 14"){   
        document.getElementById("c2").innerHTML="Gasto";
        document.getElementById("d2").innerHTML=monto2;
        document.getElementById("e2").innerHTML="";
        debe2=monto2;
    }
    //INGRESOS DB
    else if(cuenta2=="Ventas"){
        document.getElementById("c2").innerHTML="Ingreso";
        document.getElementById("d2").innerHTML=monto2;
        document.getElementById("e2").innerHTML="";
        debe2=monto2;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta2=="Patrimonio"||cuenta2=="Utilidades de años anteriores"){
        document.getElementById("c2").innerHTML="Patrimonio";
        document.getElementById("e2").innerHTML=monto2;
        document.getElementById("d2").innerHTML="";
        haber2=monto2;
    }
    else{
        document.getElementById("c2").innerHTML="";
        document.getElementById("d2").innerHTML="";
        document.getElementById("e2").innerHTML="";

    }

    //SUMA TOTAL
    let sumaD;
    sumaD=parseInt(debe)+parseInt(debe2);
    document.getElementById("d3").innerHTML=sumaD;

    let sumaH;
    sumaH=parseInt(haber)+parseInt(haber2);
    document.getElementById("e3").innerHTML=sumaH;

}

