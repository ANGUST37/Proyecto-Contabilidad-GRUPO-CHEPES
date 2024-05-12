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

    //FILA 3
    let cuenta3 = document.getElementById("a3").value;
    let monto3 = document.getElementById("b3").value;
    let debe3=0;
    let haber3=0;
    //ACTIVOS DB
    if(cuenta3=="Caja"||cuenta3=="Inventario"||cuenta3=="Clientes"||cuenta3=="Terrenos"||
        cuenta3=="Maquinaria"||cuenta3=="Doc por cobrar"||cuenta3=="Inversiones"||cuenta3=="Seguros por cobrar"
        ||cuenta3=="Papeleria y utiles"||cuenta3=="IVA por cobrar"||cuenta3=="Vehiculos"||cuenta3=="Bancos"
        ||cuenta3=="Mobiliario y equipo")
    {   document.getElementById("c3").innerHTML="Activo";
        document.getElementById("d3").innerHTML=monto3;
        document.getElementById("e3").innerHTML="";
        debe3=monto3;
    }
    //PASIVOS DB
    else if(cuenta3=="Proveedores"||cuenta3=="Cuota patronal por pagar"||cuenta3=="Cuota laboral por pagar"
        ||cuenta3=="Prestamos bancarios"||cuenta3=="IVA por pagar"||cuenta3=="Acreedores"||cuenta3=="Doc por pagar"
        ||cuenta3=="Reserva legal"){
        document.getElementById("c3").innerHTML="Pasivo";
        document.getElementById("e3").innerHTML=monto3;
        document.getElementById("d3").innerHTML="";
        haber3=monto3;
    }
    //GASTOS DB
    else if(cuenta3=="Bonificacion incentiva"||cuenta3=="Horas extras"||cuenta3=="Sueldos"||cuenta3=="Seguros"||
            cuenta3=="Aguinaldo"||cuenta3=="Cuota patronal"||cuenta3=="Costo de ventas"||cuenta3=="Bono 14"){   
        document.getElementById("c3").innerHTML="Gasto";
        document.getElementById("d3").innerHTML=monto3;
        document.getElementById("e3").innerHTML="";
        debe3=monto3;
    }
    //INGRESOS DB
    else if(cuenta3=="Ventas"){
        document.getElementById("c3").innerHTML="Ingreso";
        document.getElementById("d3").innerHTML=monto3;
        document.getElementById("e3").innerHTML="";
        debe3=monto3;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta3=="Patrimonio"||cuenta3=="Utilidades de años anteriores"){
        document.getElementById("c3").innerHTML="Patrimonio";
        document.getElementById("e3").innerHTML=monto3;
        document.getElementById("d3").innerHTML="";
        haber3=monto3;
    }
    else{
        document.getElementById("c3").innerHTML="";
        document.getElementById("d3").innerHTML="";
        document.getElementById("e3").innerHTML="";

    }

    //FILA 4
    let cuenta4 = document.getElementById("a4").value;
    let monto4 = document.getElementById("b4").value;
    let debe4=0;
    let haber4=0;
    //ACTIVOS DB
    if(cuenta4=="Caja"||cuenta4=="Inventario"||cuenta4=="Clientes"||cuenta4=="Terrenos"||
        cuenta4=="Maquinaria"||cuenta4=="Doc por cobrar"||cuenta4=="Inversiones"||cuenta4=="Seguros por cobrar"
        ||cuenta4=="Papeleria y utiles"||cuenta4=="IVA por cobrar"||cuenta4=="Vehiculos"||cuenta4=="Bancos"
        ||cuenta4=="Mobiliario y equipo")
    {   document.getElementById("c4").innerHTML="Activo";
        document.getElementById("d4").innerHTML=monto4;
        document.getElementById("e4").innerHTML="";
        debe4=monto4;
    }
    //PASIVOS DB
    else if(cuenta4=="Proveedores"||cuenta4=="Cuota patronal por pagar"||cuenta4=="Cuota laboral por pagar"
        ||cuenta4=="Prestamos bancarios"||cuenta4=="IVA por pagar"||cuenta4=="Acreedores"||cuenta4=="Doc por pagar"
        ||cuenta4=="Reserva legal"){
        document.getElementById("c4").innerHTML="Pasivo";
        document.getElementById("e4").innerHTML=monto4;
        document.getElementById("d4").innerHTML="";
        haber4=monto4;
    }
    //GASTOS DB
    else if(cuenta4=="Bonificacion incentiva"||cuenta4=="Horas extras"||cuenta4=="Sueldos"||cuenta4=="Seguros"||
            cuenta4=="Aguinaldo"||cuenta4=="Cuota patronal"||cuenta4=="Costo de ventas"||cuenta4=="Bono 14"){   
        document.getElementById("c4").innerHTML="Gasto";
        document.getElementById("d4").innerHTML=monto4;
        document.getElementById("e4").innerHTML="";
        debe4=monto4;
    }
    //INGRESOS DB
    else if(cuenta4=="Ventas"){
        document.getElementById("c4").innerHTML="Ingreso";
        document.getElementById("d4").innerHTML=monto4;
        document.getElementById("e4").innerHTML="";
        debe4=monto4;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta4=="Patrimonio"||cuenta4=="Utilidades de años anteriores"){
        document.getElementById("c4").innerHTML="Patrimonio";
        document.getElementById("e4").innerHTML=monto4;
        document.getElementById("d4").innerHTML="";
        haber4=monto4;
    }
    else{
        document.getElementById("c4").innerHTML="";
        document.getElementById("d4").innerHTML="";
        document.getElementById("e4").innerHTML="";

    }

    //FILA 5
    let cuenta5 = document.getElementById("a5").value;
    let monto5 = document.getElementById("b5").value;
    let debe5=0;
    let haber5=0;
    //ACTIVOS DB
    if(cuenta5=="Caja"||cuenta5=="Inventario"||cuenta5=="Clientes"||cuenta5=="Terrenos"||
        cuenta5=="Maquinaria"||cuenta5=="Doc por cobrar"||cuenta5=="Inversiones"||cuenta5=="Seguros por cobrar"
        ||cuenta5=="Papeleria y utiles"||cuenta5=="IVA por cobrar"||cuenta5=="Vehiculos"||cuenta5=="Bancos"
        ||cuenta5=="Mobiliario y equipo")
    {   document.getElementById("c5").innerHTML="Activo";
        document.getElementById("d5").innerHTML=monto5;
        document.getElementById("e5").innerHTML="";
        debe5=monto5;
    }
    //PASIVOS DB
    else if(cuenta5=="Proveedores"||cuenta5=="Cuota patronal por pagar"||cuenta5=="Cuota laboral por pagar"
        ||cuenta5=="Prestamos bancarios"||cuenta5=="IVA por pagar"||cuenta5=="Acreedores"||cuenta5=="Doc por pagar"
        ||cuenta5=="Reserva legal"){
        document.getElementById("c5").innerHTML="Pasivo";
        document.getElementById("e5").innerHTML=monto5;
        document.getElementById("d5").innerHTML="";
        haber5=monto5;
    }
    //GASTOS DB
    else if(cuenta5=="Bonificacion incentiva"||cuenta5=="Horas extras"||cuenta5=="Sueldos"||cuenta5=="Seguros"||
            cuenta5=="Aguinaldo"||cuenta5=="Cuota patronal"||cuenta5=="Costo de ventas"||cuenta5=="Bono 14"){   
        document.getElementById("c5").innerHTML="Gasto";
        document.getElementById("d5").innerHTML=monto5;
        document.getElementById("e5").innerHTML="";
        debe5=monto5;
    }
    //INGRESOS DB
    else if(cuenta5=="Ventas"){
        document.getElementById("c5").innerHTML="Ingreso";
        document.getElementById("d5").innerHTML=monto5;
        document.getElementById("e5").innerHTML="";
        debe5=monto5;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta5=="Patrimonio"||cuenta5=="Utilidades de años anteriores"){
        document.getElementById("c5").innerHTML="Patrimonio";
        document.getElementById("e5").innerHTML=monto5;
        document.getElementById("d5").innerHTML="";
        haber5=monto5;
    }
    else{
        document.getElementById("c5").innerHTML="";
        document.getElementById("d5").innerHTML="";
        document.getElementById("e5").innerHTML="";

    }
    
    //FILA 6
    let cuenta6 = document.getElementById("a6").value;
    let monto6 = document.getElementById("b6").value;
    let debe6=0;
    let haber6=0;
    //ACTIVOS DB
    if(cuenta6=="Caja"||cuenta6=="Inventario"||cuenta6=="Clientes"||cuenta6=="Terrenos"||
        cuenta6=="Maquinaria"||cuenta6=="Doc por cobrar"||cuenta6=="Inversiones"||cuenta6=="Seguros por cobrar"
        ||cuenta6=="Papeleria y utiles"||cuenta6=="IVA por cobrar"||cuenta6=="Vehiculos"||cuenta6=="Bancos"
        ||cuenta6=="Mobiliario y equipo")
    {   document.getElementById("c6").innerHTML="Activo";
        document.getElementById("d6").innerHTML=monto6;
        document.getElementById("e6").innerHTML="";
        debe6=monto6;
    }
    //PASIVOS DB
    else if(cuenta6=="Proveedores"||cuenta6=="Cuota patronal por pagar"||cuenta6=="Cuota laboral por pagar"
        ||cuenta6=="Prestamos bancarios"||cuenta6=="IVA por pagar"||cuenta6=="Acreedores"||cuenta6=="Doc por pagar"
        ||cuenta6=="Reserva legal"){
        document.getElementById("c6").innerHTML="Pasivo";
        document.getElementById("e6").innerHTML=monto6;
        document.getElementById("d6").innerHTML="";
        haber6=monto6;
    }
    //GASTOS DB
    else if(cuenta6=="Bonificacion incentiva"||cuenta6=="Horas extras"||cuenta6=="Sueldos"||cuenta6=="Seguros"||
            cuenta6=="Aguinaldo"||cuenta6=="Cuota patronal"||cuenta6=="Costo de ventas"||cuenta6=="Bono 14"){   
        document.getElementById("c6").innerHTML="Gasto";
        document.getElementById("d6").innerHTML=monto6;
        document.getElementById("e6").innerHTML="";
        debe6=monto6;
    }
    //INGRESOS DB
    else if(cuenta6=="Ventas"){
        document.getElementById("c6").innerHTML="Ingreso";
        document.getElementById("d6").innerHTML=monto6;
        document.getElementById("e6").innerHTML="";
        debe6=monto6;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta6=="Patrimonio"||cuenta6=="Utilidades de años anteriores"){
        document.getElementById("c6").innerHTML="Patrimonio";
        document.getElementById("e6").innerHTML=monto6;
        document.getElementById("d6").innerHTML="";
        haber6=monto6;
    }
    else{
        document.getElementById("c6").innerHTML="";
        document.getElementById("d6").innerHTML="";
        document.getElementById("e6").innerHTML="";

    }

    //FILA 7
    let cuenta7 = document.getElementById("a7").value;
    let monto7 = document.getElementById("b7").value;
    let debe7=0;
    let haber7=0;
    //ACTIVOS DB
    if(cuenta7=="Caja"||cuenta7=="Inventario"||cuenta7=="Clientes"||cuenta7=="Terrenos"||
        cuenta7=="Maquinaria"||cuenta7=="Doc por cobrar"||cuenta7=="Inversiones"||cuenta7=="Seguros por cobrar"
        ||cuenta7=="Papeleria y utiles"||cuenta7=="IVA por cobrar"||cuenta7=="Vehiculos"||cuenta7=="Bancos"
        ||cuenta7=="Mobiliario y equipo")
    {   document.getElementById("c7").innerHTML="Activo";
        document.getElementById("d7").innerHTML=monto7;
        document.getElementById("e7").innerHTML="";
        debe7=monto7;
    }
    //PASIVOS DB
    else if(cuenta7=="Proveedores"||cuenta7=="Cuota patronal por pagar"||cuenta7=="Cuota laboral por pagar"
        ||cuenta7=="Prestamos bancarios"||cuenta7=="IVA por pagar"||cuenta7=="Acreedores"||cuenta7=="Doc por pagar"
        ||cuenta7=="Reserva legal"){
        document.getElementById("c7").innerHTML="Pasivo";
        document.getElementById("e7").innerHTML=monto7;
        document.getElementById("d7").innerHTML="";
        haber7=monto7;
    }
    //GASTOS DB
    else if(cuenta7=="Bonificacion incentiva"||cuenta7=="Horas extras"||cuenta7=="Sueldos"||cuenta7=="Seguros"||
            cuenta7=="Aguinaldo"||cuenta7=="Cuota patronal"||cuenta7=="Costo de ventas"||cuenta7=="Bono 14"){   
        document.getElementById("c7").innerHTML="Gasto";
        document.getElementById("d7").innerHTML=monto7;
        document.getElementById("e7").innerHTML="";
        debe7=monto7;
    }
    //INGRESOS DB
    else if(cuenta7=="Ventas"){
        document.getElementById("c7").innerHTML="Ingreso";
        document.getElementById("d7").innerHTML=monto7;
        document.getElementById("e7").innerHTML="";
        debe7=monto7;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta7=="Patrimonio"||cuenta7=="Utilidades de años anteriores"){
        document.getElementById("c7").innerHTML="Patrimonio";
        document.getElementById("e7").innerHTML=monto7;
        document.getElementById("d7").innerHTML="";
        haber7=monto7;
    }
    else{
        document.getElementById("c7").innerHTML="";
        document.getElementById("d7").innerHTML="";
        document.getElementById("e7").innerHTML="";

    }

    //FILA 8
    let cuenta8 = document.getElementById("a8").value;
    let monto8 = document.getElementById("b8").value;
    let debe8=0;
    let haber8=0;
    //ACTIVOS DB
    if(cuenta8=="Caja"||cuenta8=="Inventario"||cuenta8=="Clientes"||cuenta8=="Terrenos"||
        cuenta8=="Maquinaria"||cuenta8=="Doc por cobrar"||cuenta8=="Inversiones"||cuenta8=="Seguros por cobrar"
        ||cuenta8=="Papeleria y utiles"||cuenta8=="IVA por cobrar"||cuenta8=="Vehiculos"||cuenta8=="Bancos"
        ||cuenta8=="Mobiliario y equipo")
    {   document.getElementById("c8").innerHTML="Activo";
        document.getElementById("d8").innerHTML=monto8;
        document.getElementById("e8").innerHTML="";
        debe8=monto8;
    }
    //PASIVOS DB
    else if(cuenta8=="Proveedores"||cuenta8=="Cuota patronal por pagar"||cuenta8=="Cuota laboral por pagar"
        ||cuenta8=="Prestamos bancarios"||cuenta8=="IVA por pagar"||cuenta8=="Acreedores"||cuenta8=="Doc por pagar"
        ||cuenta8=="Reserva legal"){
        document.getElementById("c8").innerHTML="Pasivo";
        document.getElementById("e8").innerHTML=monto8;
        document.getElementById("d8").innerHTML="";
        haber8=monto8;
    }
    //GASTOS DB
    else if(cuenta8=="Bonificacion incentiva"||cuenta8=="Horas extras"||cuenta8=="Sueldos"||cuenta8=="Seguros"||
            cuenta8=="Aguinaldo"||cuenta8=="Cuota patronal"||cuenta8=="Costo de ventas"||cuenta8=="Bono 14"){   
        document.getElementById("c8").innerHTML="Gasto";
        document.getElementById("d8").innerHTML=monto8;
        document.getElementById("e8").innerHTML="";
        debe8=monto8;
    }
    //INGRESOS DB
    else if(cuenta8=="Ventas"){
        document.getElementById("c8").innerHTML="Ingreso";
        document.getElementById("d8").innerHTML=monto8;
        document.getElementById("e8").innerHTML="";
        debe8=monto8;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta8=="Patrimonio"||cuenta8=="Utilidades de años anteriores"){
        document.getElementById("c8").innerHTML="Patrimonio";
        document.getElementById("e8").innerHTML=monto8;
        document.getElementById("d8").innerHTML="";
        haber8=monto8;
    }
    else{
        document.getElementById("c8").innerHTML="";
        document.getElementById("d8").innerHTML="";
        document.getElementById("e8").innerHTML="";

    }

    //FILA 9
    let cuenta9 = document.getElementById("a9").value;
    let monto9 = document.getElementById("b9").value;
    let debe9=0;
    let haber9=0;
    //ACTIVOS DB
    if(cuenta9=="Caja"||cuenta9=="Inventario"||cuenta9=="Clientes"||cuenta9=="Terrenos"||
        cuenta9=="Maquinaria"||cuenta9=="Doc por cobrar"||cuenta9=="Inversiones"||cuenta9=="Seguros por cobrar"
        ||cuenta9=="Papeleria y utiles"||cuenta9=="IVA por cobrar"||cuenta9=="Vehiculos"||cuenta9=="Bancos"
        ||cuenta9=="Mobiliario y equipo")
    {   document.getElementById("c9").innerHTML="Activo";
        document.getElementById("d9").innerHTML=monto9;
        document.getElementById("e9").innerHTML="";
        debe9=monto9;
    }
    //PASIVOS DB
    else if(cuenta9=="Proveedores"||cuenta9=="Cuota patronal por pagar"||cuenta9=="Cuota laboral por pagar"
        ||cuenta9=="Prestamos bancarios"||cuenta9=="IVA por pagar"||cuenta9=="Acreedores"||cuenta9=="Doc por pagar"
        ||cuenta9=="Reserva legal"){
        document.getElementById("c9").innerHTML="Pasivo";
        document.getElementById("e9").innerHTML=monto9;
        document.getElementById("d9").innerHTML="";
        haber9=monto9;
    }
    //GASTOS DB
    else if(cuenta9=="Bonificacion incentiva"||cuenta9=="Horas extras"||cuenta9=="Sueldos"||cuenta9=="Seguros"||
            cuenta9=="Aguinaldo"||cuenta9=="Cuota patronal"||cuenta9=="Costo de ventas"||cuenta9=="Bono 14"){   
        document.getElementById("c9").innerHTML="Gasto";
        document.getElementById("d9").innerHTML=monto9;
        document.getElementById("e9").innerHTML="";
        debe9=monto9;
    }
    //INGRESOS DB
    else if(cuenta9=="Ventas"){
        document.getElementById("c9").innerHTML="Ingreso";
        document.getElementById("d9").innerHTML=monto9;
        document.getElementById("e9").innerHTML="";
        debe9=monto9;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta9=="Patrimonio"||cuenta9=="Utilidades de años anteriores"){
        document.getElementById("c9").innerHTML="Patrimonio";
        document.getElementById("e9").innerHTML=monto9;
        document.getElementById("d9").innerHTML="";
        haber9=monto9;
    }
    else{
        document.getElementById("c9").innerHTML="";
        document.getElementById("d9").innerHTML="";
        document.getElementById("e9").innerHTML="";

    }

    //FILA 10
    let cuenta10 = document.getElementById("a10").value;
    let monto10 = document.getElementById("b10").value;
    let debe10=0;
    let haber10=0;
    //ACTIVOS DB
    if(cuenta10=="Caja"||cuenta10=="Inventario"||cuenta10=="Clientes"||cuenta10=="Terrenos"||
        cuenta10=="Maquinaria"||cuenta10=="Doc por cobrar"||cuenta10=="Inversiones"||cuenta10=="Seguros por cobrar"
        ||cuenta10=="Papeleria y utiles"||cuenta10=="IVA por cobrar"||cuenta10=="Vehiculos"||cuenta10=="Bancos"
        ||cuenta10=="Mobiliario y equipo")
    {   document.getElementById("c10").innerHTML="Activo";
        document.getElementById("d10").innerHTML=monto10;
        document.getElementById("e10").innerHTML="";
        debe10=monto10;
    }
    //PASIVOS DB
    else if(cuenta10=="Proveedores"||cuenta10=="Cuota patronal por pagar"||cuenta10=="Cuota laboral por pagar"
        ||cuenta10=="Prestamos bancarios"||cuenta10=="IVA por pagar"||cuenta10=="Acreedores"||cuenta10=="Doc por pagar"
        ||cuenta10=="Reserva legal"){
        document.getElementById("c10").innerHTML="Pasivo";
        document.getElementById("e10").innerHTML=monto10;
        document.getElementById("d10").innerHTML="";
        haber10=monto10;
    }
    //GASTOS DB
    else if(cuenta10=="Bonificacion incentiva"||cuenta10=="Horas extras"||cuenta10=="Sueldos"||cuenta10=="Seguros"||
            cuenta10=="Aguinaldo"||cuenta10=="Cuota patronal"||cuenta10=="Costo de ventas"||cuenta10=="Bono 14"){   
        document.getElementById("c10").innerHTML="Gasto";
        document.getElementById("d10").innerHTML=monto10;
        document.getElementById("e10").innerHTML="";
        debe10=monto10;
    }
    //INGRESOS DB
    else if(cuenta10=="Ventas"){
        document.getElementById("c10").innerHTML="Ingreso";
        document.getElementById("d10").innerHTML=monto10;
        document.getElementById("e10").innerHTML="";
        debe10=monto10;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta10=="Patrimonio"||cuenta10=="Utilidades de años anteriores"){
        document.getElementById("c10").innerHTML="Patrimonio";
        document.getElementById("e10").innerHTML=monto10;
        document.getElementById("d10").innerHTML="";
        haber10=monto10;
    }
    else{
        document.getElementById("c10").innerHTML="";
        document.getElementById("d10").innerHTML="";
        document.getElementById("e10").innerHTML="";

    }

    //FILA 11
    let cuenta11 = document.getElementById("a11").value;
    let monto11 = document.getElementById("b11").value;
    let debe11=0;
    let haber11=0;
    //ACTIVOS DB
    if(cuenta11=="Caja"||cuenta11=="Inventario"||cuenta11=="Clientes"||cuenta11=="Terrenos"||
        cuenta11=="Maquinaria"||cuenta11=="Doc por cobrar"||cuenta11=="Inversiones"||cuenta11=="Seguros por cobrar"
        ||cuenta11=="Papeleria y utiles"||cuenta11=="IVA por cobrar"||cuenta11=="Vehiculos"||cuenta11=="Bancos"
        ||cuenta11=="Mobiliario y equipo")
    {   document.getElementById("c11").innerHTML="Activo";
        document.getElementById("d11").innerHTML=monto11;
        document.getElementById("e11").innerHTML="";
        debe11=monto11;
    }
    //PASIVOS DB
    else if(cuenta11=="Proveedores"||cuenta11=="Cuota patronal por pagar"||cuenta11=="Cuota laboral por pagar"
        ||cuenta11=="Prestamos bancarios"||cuenta11=="IVA por pagar"||cuenta11=="Acreedores"||cuenta11=="Doc por pagar"
        ||cuenta11=="Reserva legal"){
        document.getElementById("c11").innerHTML="Pasivo";
        document.getElementById("e11").innerHTML=monto11;
        document.getElementById("d11").innerHTML="";
        haber11=monto11;
    }
    //GASTOS DB
    else if(cuenta11=="Bonificacion incentiva"||cuenta11=="Horas extras"||cuenta11=="Sueldos"||cuenta11=="Seguros"||
            cuenta11=="Aguinaldo"||cuenta11=="Cuota patronal"||cuenta11=="Costo de ventas"||cuenta11=="Bono 14"){   
        document.getElementById("c11").innerHTML="Gasto";
        document.getElementById("d11").innerHTML=monto11;
        document.getElementById("e11").innerHTML="";
        debe11=monto11;
    }
    //INGRESOS DB
    else if(cuenta11=="Ventas"){
        document.getElementById("c11").innerHTML="Ingreso";
        document.getElementById("d11").innerHTML=monto11;
        document.getElementById("e11").innerHTML="";
        debe11=monto11;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta11=="Patrimonio"||cuenta11=="Utilidades de años anteriores"){
        document.getElementById("c11").innerHTML="Patrimonio";
        document.getElementById("e11").innerHTML=monto11;
        document.getElementById("d11").innerHTML="";
        haber11=monto11;
    }
    else{
        document.getElementById("c11").innerHTML="";
        document.getElementById("d11").innerHTML="";
        document.getElementById("e11").innerHTML="";

    }

    //FILA 12
    let cuenta12 = document.getElementById("a12").value;
    let monto12 = document.getElementById("b12").value;
    let debe12=0;
    let haber12=0;
    //ACTIVOS DB
    if(cuenta12=="Caja"||cuenta12=="Inventario"||cuenta12=="Clientes"||cuenta12=="Terrenos"||
        cuenta12=="Maquinaria"||cuenta12=="Doc por cobrar"||cuenta12=="Inversiones"||cuenta12=="Seguros por cobrar"
        ||cuenta12=="Papeleria y utiles"||cuenta12=="IVA por cobrar"||cuenta12=="Vehiculos"||cuenta12=="Bancos"
        ||cuenta12=="Mobiliario y equipo")
    {   document.getElementById("c12").innerHTML="Activo";
        document.getElementById("d12").innerHTML=monto12;
        document.getElementById("e12").innerHTML="";
        debe12=monto12;
    }
    //PASIVOS DB
    else if(cuenta12=="Proveedores"||cuenta12=="Cuota patronal por pagar"||cuenta12=="Cuota laboral por pagar"
        ||cuenta12=="Prestamos bancarios"||cuenta12=="IVA por pagar"||cuenta12=="Acreedores"||cuenta12=="Doc por pagar"
        ||cuenta12=="Reserva legal"){
        document.getElementById("c12").innerHTML="Pasivo";
        document.getElementById("e12").innerHTML=monto12;
        document.getElementById("d12").innerHTML="";
        haber12=monto12;
    }
    //GASTOS DB
    else if(cuenta12=="Bonificacion incentiva"||cuenta12=="Horas extras"||cuenta12=="Sueldos"||cuenta12=="Seguros"||
            cuenta12=="Aguinaldo"||cuenta12=="Cuota patronal"||cuenta12=="Costo de ventas"||cuenta12=="Bono 14"){   
        document.getElementById("c12").innerHTML="Gasto";
        document.getElementById("d12").innerHTML=monto12;
        document.getElementById("e12").innerHTML="";
        debe12=monto12;
    }
    //INGRESOS DB
    else if(cuenta12=="Ventas"){
        document.getElementById("c12").innerHTML="Ingreso";
        document.getElementById("d12").innerHTML=monto12;
        document.getElementById("e12").innerHTML="";
        debe12=monto12;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta12=="Patrimonio"||cuenta12=="Utilidades de años anteriores"){
        document.getElementById("c12").innerHTML="Patrimonio";
        document.getElementById("e12").innerHTML=monto12;
        document.getElementById("d12").innerHTML="";
        haber12=monto12;
    }
    else{
        document.getElementById("c12").innerHTML="";
        document.getElementById("d12").innerHTML="";
        document.getElementById("e12").innerHTML="";

    }

    //FILA 13
    let cuenta13 = document.getElementById("a13").value;
    let monto13 = document.getElementById("b13").value;
    let debe13=0;
    let haber13=0;
    //ACTIVOS DB
    if(cuenta13=="Caja"||cuenta13=="Inventario"||cuenta13=="Clientes"||cuenta13=="Terrenos"||
        cuenta13=="Maquinaria"||cuenta13=="Doc por cobrar"||cuenta13=="Inversiones"||cuenta13=="Seguros por cobrar"
        ||cuenta13=="Papeleria y utiles"||cuenta13=="IVA por cobrar"||cuenta13=="Vehiculos"||cuenta13=="Bancos"
        ||cuenta13=="Mobiliario y equipo")
    {   document.getElementById("c13").innerHTML="Activo";
        document.getElementById("d13").innerHTML=monto13;
        document.getElementById("e13").innerHTML="";
        debe13=monto13;
    }
    //PASIVOS DB
    else if(cuenta13=="Proveedores"||cuenta13=="Cuota patronal por pagar"||cuenta13=="Cuota laboral por pagar"
        ||cuenta13=="Prestamos bancarios"||cuenta13=="IVA por pagar"||cuenta13=="Acreedores"||cuenta13=="Doc por pagar"
        ||cuenta13=="Reserva legal"){
        document.getElementById("c13").innerHTML="Pasivo";
        document.getElementById("e13").innerHTML=monto13;
        document.getElementById("d13").innerHTML="";
        haber13=monto13;
    }
    //GASTOS DB
    else if(cuenta13=="Bonificacion incentiva"||cuenta13=="Horas extras"||cuenta13=="Sueldos"||cuenta13=="Seguros"||
            cuenta13=="Aguinaldo"||cuenta13=="Cuota patronal"||cuenta13=="Costo de ventas"||cuenta13=="Bono 14"){   
        document.getElementById("c13").innerHTML="Gasto";
        document.getElementById("d13").innerHTML=monto13;
        document.getElementById("e13").innerHTML="";
        debe13=monto13;
    }
    //INGRESOS DB
    else if(cuenta13=="Ventas"){
        document.getElementById("c13").innerHTML="Ingreso";
        document.getElementById("d13").innerHTML=monto13;
        document.getElementById("e13").innerHTML="";
        debe13=monto13;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta13=="Patrimonio"||cuenta13=="Utilidades de años anteriores"){
        document.getElementById("c13").innerHTML="Patrimonio";
        document.getElementById("e13").innerHTML=monto13;
        document.getElementById("d13").innerHTML="";
        haber13=monto13;
    }
    else{
        document.getElementById("c13").innerHTML="";
        document.getElementById("d13").innerHTML="";
        document.getElementById("e13").innerHTML="";

    }

    //FILA 14
    let cuenta14 = document.getElementById("a14").value;
    let monto14 = document.getElementById("b14").value;
    let debe14=0;
    let haber14=0;
    //ACTIVOS DB
    if(cuenta14=="Caja"||cuenta14=="Inventario"||cuenta14=="Clientes"||cuenta14=="Terrenos"||
        cuenta14=="Maquinaria"||cuenta14=="Doc por cobrar"||cuenta14=="Inversiones"||cuenta14=="Seguros por cobrar"
        ||cuenta14=="Papeleria y utiles"||cuenta14=="IVA por cobrar"||cuenta14=="Vehiculos"||cuenta14=="Bancos"
        ||cuenta14=="Mobiliario y equipo")
    {   document.getElementById("c14").innerHTML="Activo";
        document.getElementById("d14").innerHTML=monto14;
        document.getElementById("e14").innerHTML="";
        debe14=monto14;
    }
    //PASIVOS DB
    else if(cuenta14=="Proveedores"||cuenta14=="Cuota patronal por pagar"||cuenta14=="Cuota laboral por pagar"
        ||cuenta14=="Prestamos bancarios"||cuenta14=="IVA por pagar"||cuenta14=="Acreedores"||cuenta14=="Doc por pagar"
        ||cuenta14=="Reserva legal"){
        document.getElementById("c14").innerHTML="Pasivo";
        document.getElementById("e14").innerHTML=monto14;
        document.getElementById("d14").innerHTML="";
        haber14=monto14;
    }
    //GASTOS DB
    else if(cuenta14=="Bonificacion incentiva"||cuenta14=="Horas extras"||cuenta14=="Sueldos"||cuenta14=="Seguros"||
            cuenta14=="Aguinaldo"||cuenta14=="Cuota patronal"||cuenta14=="Costo de ventas"||cuenta14=="Bono 14"){   
        document.getElementById("c14").innerHTML="Gasto";
        document.getElementById("d14").innerHTML=monto14;
        document.getElementById("e14").innerHTML="";
        debe14=monto14;
    }
    //INGRESOS DB
    else if(cuenta14=="Ventas"){
        document.getElementById("c14").innerHTML="Ingreso";
        document.getElementById("d14").innerHTML=monto14;
        document.getElementById("e14").innerHTML="";
        debe14=monto14;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta14=="Patrimonio"||cuenta14=="Utilidades de años anteriores"){
        document.getElementById("c14").innerHTML="Patrimonio";
        document.getElementById("e14").innerHTML=monto14;
        document.getElementById("d14").innerHTML="";
        haber14=monto14;
    }
    else{
        document.getElementById("c14").innerHTML="";
        document.getElementById("d14").innerHTML="";
        document.getElementById("e14").innerHTML="";

    }

    //FILA 15
    let cuenta15 = document.getElementById("a15").value;
    let monto15 = document.getElementById("b15").value;
    let debe15=0;
    let haber15=0;
    //ACTIVOS DB
    if(cuenta15=="Caja"||cuenta15=="Inventario"||cuenta15=="Clientes"||cuenta15=="Terrenos"||
        cuenta15=="Maquinaria"||cuenta15=="Doc por cobrar"||cuenta15=="Inversiones"||cuenta15=="Seguros por cobrar"
        ||cuenta15=="Papeleria y utiles"||cuenta15=="IVA por cobrar"||cuenta15=="Vehiculos"||cuenta15=="Bancos"
        ||cuenta15=="Mobiliario y equipo")
    {   document.getElementById("c15").innerHTML="Activo";
        document.getElementById("d15").innerHTML=monto15;
        document.getElementById("e15").innerHTML="";
        debe15=monto15;
    }
    //PASIVOS DB
    else if(cuenta15=="Proveedores"||cuenta15=="Cuota patronal por pagar"||cuenta15=="Cuota laboral por pagar"
        ||cuenta15=="Prestamos bancarios"||cuenta15=="IVA por pagar"||cuenta15=="Acreedores"||cuenta15=="Doc por pagar"
        ||cuenta15=="Reserva legal"){
        document.getElementById("c15").innerHTML="Pasivo";
        document.getElementById("e15").innerHTML=monto15;
        document.getElementById("d15").innerHTML="";
        haber15=monto15;
    }
    //GASTOS DB
    else if(cuenta15=="Bonificacion incentiva"||cuenta15=="Horas extras"||cuenta15=="Sueldos"||cuenta15=="Seguros"||
            cuenta15=="Aguinaldo"||cuenta15=="Cuota patronal"||cuenta15=="Costo de ventas"||cuenta15=="Bono 14"){   
        document.getElementById("c15").innerHTML="Gasto";
        document.getElementById("d15").innerHTML=monto15;
        document.getElementById("e15").innerHTML="";
        debe15=monto15;
    }
    //INGRESOS DB
    else if(cuenta15=="Ventas"){
        document.getElementById("c15").innerHTML="Ingreso";
        document.getElementById("d15").innerHTML=monto15;
        document.getElementById("e15").innerHTML="";
        debe15=monto15;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta15=="Patrimonio"||cuenta15=="Utilidades de años anteriores"){
        document.getElementById("c15").innerHTML="Patrimonio";
        document.getElementById("e15").innerHTML=monto15;
        document.getElementById("d15").innerHTML="";
        haber15=monto15;
    }
    else{
        document.getElementById("c15").innerHTML="";
        document.getElementById("d15").innerHTML="";
        document.getElementById("e15").innerHTML="";

    }

    //FILA 16
    let cuenta16 = document.getElementById("a16").value;
    let monto16 = document.getElementById("b16").value;
    let debe16=0;
    let haber16=0;
    //ACTIVOS DB
    if(cuenta16=="Caja"||cuenta16=="Inventario"||cuenta16=="Clientes"||cuenta16=="Terrenos"||
        cuenta16=="Maquinaria"||cuenta16=="Doc por cobrar"||cuenta16=="Inversiones"||cuenta16=="Seguros por cobrar"
        ||cuenta16=="Papeleria y utiles"||cuenta16=="IVA por cobrar"||cuenta16=="Vehiculos"||cuenta16=="Bancos"
        ||cuenta16=="Mobiliario y equipo")
    {   document.getElementById("c16").innerHTML="Activo";
        document.getElementById("d16").innerHTML=monto16;
        document.getElementById("e16").innerHTML="";
        debe16=monto16;
    }
    //PASIVOS DB
    else if(cuenta16=="Proveedores"||cuenta16=="Cuota patronal por pagar"||cuenta16=="Cuota laboral por pagar"
        ||cuenta16=="Prestamos bancarios"||cuenta16=="IVA por pagar"||cuenta16=="Acreedores"||cuenta16=="Doc por pagar"
        ||cuenta16=="Reserva legal"){
        document.getElementById("c16").innerHTML="Pasivo";
        document.getElementById("e16").innerHTML=monto16;
        document.getElementById("d16").innerHTML="";
        haber16=monto16;
    }
    //GASTOS DB
    else if(cuenta16=="Bonificacion incentiva"||cuenta16=="Horas extras"||cuenta16=="Sueldos"||cuenta16=="Seguros"||
            cuenta16=="Aguinaldo"||cuenta16=="Cuota patronal"||cuenta16=="Costo de ventas"||cuenta16=="Bono 14"){   
        document.getElementById("c16").innerHTML="Gasto";
        document.getElementById("d16").innerHTML=monto16;
        document.getElementById("e16").innerHTML="";
        debe16=monto16;
    }
    //INGRESOS DB
    else if(cuenta16=="Ventas"){
        document.getElementById("c16").innerHTML="Ingreso";
        document.getElementById("d16").innerHTML=monto16;
        document.getElementById("e16").innerHTML="";
        debe16=monto16;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta16=="Patrimonio"||cuenta16=="Utilidades de años anteriores"){
        document.getElementById("c16").innerHTML="Patrimonio";
        document.getElementById("e16").innerHTML=monto16;
        document.getElementById("d16").innerHTML="";
        haber16=monto16;
    }
    else{
        document.getElementById("c16").innerHTML="";
        document.getElementById("d16").innerHTML="";
        document.getElementById("e16").innerHTML="";

    }

    //FILA 17
    let cuenta17 = document.getElementById("a17").value;
    let monto17 = document.getElementById("b17").value;
    let debe17=0;
    let haber17=0;
    //ACTIVOS DB
    if(cuenta17=="Caja"||cuenta17=="Inventario"||cuenta17=="Clientes"||cuenta17=="Terrenos"||
        cuenta17=="Maquinaria"||cuenta17=="Doc por cobrar"||cuenta17=="Inversiones"||cuenta17=="Seguros por cobrar"
        ||cuenta17=="Papeleria y utiles"||cuenta17=="IVA por cobrar"||cuenta17=="Vehiculos"||cuenta17=="Bancos"
        ||cuenta17=="Mobiliario y equipo")
    {   document.getElementById("c17").innerHTML="Activo";
        document.getElementById("d17").innerHTML=monto17;
        document.getElementById("e17").innerHTML="";
        debe17=monto17;
    }
    //PASIVOS DB
    else if(cuenta17=="Proveedores"||cuenta17=="Cuota patronal por pagar"||cuenta17=="Cuota laboral por pagar"
        ||cuenta17=="Prestamos bancarios"||cuenta17=="IVA por pagar"||cuenta17=="Acreedores"||cuenta17=="Doc por pagar"
        ||cuenta17=="Reserva legal"){
        document.getElementById("c17").innerHTML="Pasivo";
        document.getElementById("e17").innerHTML=monto17;
        document.getElementById("d17").innerHTML="";
        haber17=monto17;
    }
    //GASTOS DB
    else if(cuenta17=="Bonificacion incentiva"||cuenta17=="Horas extras"||cuenta17=="Sueldos"||cuenta17=="Seguros"||
            cuenta17=="Aguinaldo"||cuenta17=="Cuota patronal"||cuenta17=="Costo de ventas"||cuenta17=="Bono 14"){   
        document.getElementById("c17").innerHTML="Gasto";
        document.getElementById("d17").innerHTML=monto17;
        document.getElementById("e17").innerHTML="";
        debe17=monto17;
    }
    //INGRESOS DB
    else if(cuenta17=="Ventas"){
        document.getElementById("c17").innerHTML="Ingreso";
        document.getElementById("d17").innerHTML=monto17;
        document.getElementById("e17").innerHTML="";
        debe17=monto17;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta17=="Patrimonio"||cuenta17=="Utilidades de años anteriores"){
        document.getElementById("c17").innerHTML="Patrimonio";
        document.getElementById("e17").innerHTML=monto17;
        document.getElementById("d17").innerHTML="";
        haber17=monto17;
    }
    else{
        document.getElementById("c17").innerHTML="";
        document.getElementById("d17").innerHTML="";
        document.getElementById("e17").innerHTML="";

    }

    //FILA 18
    let cuenta18 = document.getElementById("a18").value;
    let monto18 = document.getElementById("b18").value;
    let debe18=0;
    let haber18=0;
    //ACTIVOS DB
    if(cuenta18=="Caja"||cuenta18=="Inventario"||cuenta18=="Clientes"||cuenta18=="Terrenos"||
        cuenta18=="Maquinaria"||cuenta18=="Doc por cobrar"||cuenta18=="Inversiones"||cuenta18=="Seguros por cobrar"
        ||cuenta18=="Papeleria y utiles"||cuenta18=="IVA por cobrar"||cuenta18=="Vehiculos"||cuenta18=="Bancos"
        ||cuenta18=="Mobiliario y equipo")
    {   document.getElementById("c18").innerHTML="Activo";
        document.getElementById("d18").innerHTML=monto18;
        document.getElementById("e18").innerHTML="";
        debe18=monto18;
    }
    //PASIVOS DB
    else if(cuenta18=="Proveedores"||cuenta18=="Cuota patronal por pagar"||cuenta18=="Cuota laboral por pagar"
        ||cuenta18=="Prestamos bancarios"||cuenta18=="IVA por pagar"||cuenta18=="Acreedores"||cuenta18=="Doc por pagar"
        ||cuenta18=="Reserva legal"){
        document.getElementById("c18").innerHTML="Pasivo";
        document.getElementById("e18").innerHTML=monto18;
        document.getElementById("d18").innerHTML="";
        haber18=monto18;
    }
    //GASTOS DB
    else if(cuenta18=="Bonificacion incentiva"||cuenta18=="Horas extras"||cuenta18=="Sueldos"||cuenta18=="Seguros"||
            cuenta18=="Aguinaldo"||cuenta18=="Cuota patronal"||cuenta18=="Costo de ventas"||cuenta18=="Bono 14"){   
        document.getElementById("c18").innerHTML="Gasto";
        document.getElementById("d18").innerHTML=monto18;
        document.getElementById("e18").innerHTML="";
        debe18=monto18;
    }
    //INGRESOS DB
    else if(cuenta18=="Ventas"){
        document.getElementById("c18").innerHTML="Ingreso";
        document.getElementById("d18").innerHTML=monto18;
        document.getElementById("e18").innerHTML="";
        debe18=monto18;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta18=="Patrimonio"||cuenta18=="Utilidades de años anteriores"){
        document.getElementById("c18").innerHTML="Patrimonio";
        document.getElementById("e18").innerHTML=monto18;
        document.getElementById("d18").innerHTML="";
        haber18=monto18;
    }
    else{
        document.getElementById("c18").innerHTML="";
        document.getElementById("d18").innerHTML="";
        document.getElementById("e18").innerHTML="";

    }

    //FILA 19
    let cuenta19 = document.getElementById("a19").value;
    let monto19 = document.getElementById("b19").value;
    let debe19=0;
    let haber19=0;
    //ACTIVOS DB
    if(cuenta19=="Caja"||cuenta19=="Inventario"||cuenta19=="Clientes"||cuenta19=="Terrenos"||
        cuenta19=="Maquinaria"||cuenta19=="Doc por cobrar"||cuenta19=="Inversiones"||cuenta19=="Seguros por cobrar"
        ||cuenta19=="Papeleria y utiles"||cuenta19=="IVA por cobrar"||cuenta19=="Vehiculos"||cuenta19=="Bancos"
        ||cuenta19=="Mobiliario y equipo")
    {   document.getElementById("c19").innerHTML="Activo";
        document.getElementById("d19").innerHTML=monto19;
        document.getElementById("e19").innerHTML="";
        debe19=monto19;
    }
    //PASIVOS DB
    else if(cuenta19=="Proveedores"||cuenta19=="Cuota patronal por pagar"||cuenta19=="Cuota laboral por pagar"
        ||cuenta19=="Prestamos bancarios"||cuenta19=="IVA por pagar"||cuenta19=="Acreedores"||cuenta19=="Doc por pagar"
        ||cuenta19=="Reserva legal"){
        document.getElementById("c19").innerHTML="Pasivo";
        document.getElementById("e19").innerHTML=monto19;
        document.getElementById("d19").innerHTML="";
        haber19=monto19;
    }
    //GASTOS DB
    else if(cuenta19=="Bonificacion incentiva"||cuenta19=="Horas extras"||cuenta19=="Sueldos"||cuenta19=="Seguros"||
            cuenta19=="Aguinaldo"||cuenta19=="Cuota patronal"||cuenta19=="Costo de ventas"||cuenta19=="Bono 14"){   
        document.getElementById("c19").innerHTML="Gasto";
        document.getElementById("d19").innerHTML=monto19;
        document.getElementById("e19").innerHTML="";
        debe19=monto19;
    }
    //INGRESOS DB
    else if(cuenta19=="Ventas"){
        document.getElementById("c19").innerHTML="Ingreso";
        document.getElementById("d19").innerHTML=monto19;
        document.getElementById("e19").innerHTML="";
        debe19=monto19;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta19=="Patrimonio"||cuenta19=="Utilidades de años anteriores"){
        document.getElementById("c19").innerHTML="Patrimonio";
        document.getElementById("e19").innerHTML=monto19;
        document.getElementById("d19").innerHTML="";
        haber19=monto19;
    }
    else{
        document.getElementById("c19").innerHTML="";
        document.getElementById("d19").innerHTML="";
        document.getElementById("e19").innerHTML="";

    }

    //FILA 20
    let cuenta20 = document.getElementById("a20").value;
    let monto20 = document.getElementById("b20").value;
    let debe20=0;
    let haber20=0;
    //ACTIVOS DB
    if(cuenta20=="Caja"||cuenta20=="Inventario"||cuenta20=="Clientes"||cuenta20=="Terrenos"||
        cuenta20=="Maquinaria"||cuenta20=="Doc por cobrar"||cuenta20=="Inversiones"||cuenta20=="Seguros por cobrar"
        ||cuenta20=="Papeleria y utiles"||cuenta20=="IVA por cobrar"||cuenta20=="Vehiculos"||cuenta20=="Bancos"
        ||cuenta20=="Mobiliario y equipo")
    {   document.getElementById("c20").innerHTML="Activo";
        document.getElementById("d20").innerHTML=monto20;
        document.getElementById("e20").innerHTML="";
        debe20=monto20;
    }
    //PASIVOS DB
    else if(cuenta20=="Proveedores"||cuenta20=="Cuota patronal por pagar"||cuenta20=="Cuota laboral por pagar"
        ||cuenta20=="Prestamos bancarios"||cuenta20=="IVA por pagar"||cuenta20=="Acreedores"||cuenta20=="Doc por pagar"
        ||cuenta20=="Reserva legal"){
        document.getElementById("c20").innerHTML="Pasivo";
        document.getElementById("e20").innerHTML=monto20;
        document.getElementById("d20").innerHTML="";
        haber20=monto20;
    }
    //GASTOS DB
    else if(cuenta20=="Bonificacion incentiva"||cuenta20=="Horas extras"||cuenta20=="Sueldos"||cuenta20=="Seguros"||
            cuenta20=="Aguinaldo"||cuenta20=="Cuota patronal"||cuenta20=="Costo de ventas"||cuenta20=="Bono 14"){   
        document.getElementById("c20").innerHTML="Gasto";
        document.getElementById("d20").innerHTML=monto20;
        document.getElementById("e20").innerHTML="";
        debe20=monto20;
    }
    //INGRESOS DB
    else if(cuenta20=="Ventas"){
        document.getElementById("c20").innerHTML="Ingreso";
        document.getElementById("d20").innerHTML=monto20;
        document.getElementById("e20").innerHTML="";
        debe20=monto20;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta20=="Patrimonio"||cuenta20=="Utilidades de años anteriores"){
        document.getElementById("c20").innerHTML="Patrimonio";
        document.getElementById("e20").innerHTML=monto20;
        document.getElementById("d20").innerHTML="";
        haber20=monto20;
    }
    else{
        document.getElementById("c20").innerHTML="";
        document.getElementById("d20").innerHTML="";
        document.getElementById("e20").innerHTML="";

    }

    //FILA 21
    let cuenta21 = document.getElementById("a21").value;
    let monto21 = document.getElementById("b21").value;
    let debe21=0;
    let haber21=0;
    //ACTIVOS DB
    if(cuenta21=="Caja"||cuenta21=="Inventario"||cuenta21=="Clientes"||cuenta21=="Terrenos"||
        cuenta21=="Maquinaria"||cuenta21=="Doc por cobrar"||cuenta21=="Inversiones"||cuenta21=="Seguros por cobrar"
        ||cuenta21=="Papeleria y utiles"||cuenta21=="IVA por cobrar"||cuenta21=="Vehiculos"||cuenta21=="Bancos"
        ||cuenta21=="Mobiliario y equipo")
    {   document.getElementById("c21").innerHTML="Activo";
        document.getElementById("d21").innerHTML=monto21;
        document.getElementById("e21").innerHTML="";
        debe21=monto21;
    }
    //PASIVOS DB
    else if(cuenta21=="Proveedores"||cuenta21=="Cuota patronal por pagar"||cuenta21=="Cuota laboral por pagar"
        ||cuenta21=="Prestamos bancarios"||cuenta21=="IVA por pagar"||cuenta21=="Acreedores"||cuenta21=="Doc por pagar"
        ||cuenta21=="Reserva legal"){
        document.getElementById("c21").innerHTML="Pasivo";
        document.getElementById("e21").innerHTML=monto21;
        document.getElementById("d21").innerHTML="";
        haber21=monto21;
    }
    //GASTOS DB
    else if(cuenta21=="Bonificacion incentiva"||cuenta21=="Horas extras"||cuenta21=="Sueldos"||cuenta21=="Seguros"||
            cuenta21=="Aguinaldo"||cuenta21=="Cuota patronal"||cuenta21=="Costo de ventas"||cuenta21=="Bono 14"){   
        document.getElementById("c21").innerHTML="Gasto";
        document.getElementById("d21").innerHTML=monto21;
        document.getElementById("e21").innerHTML="";
        debe21=monto21;
    }
    //INGRESOS DB
    else if(cuenta21=="Ventas"){
        document.getElementById("c21").innerHTML="Ingreso";
        document.getElementById("d21").innerHTML=monto21;
        document.getElementById("e21").innerHTML="";
        debe21=monto21;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta21=="Patrimonio"||cuenta21=="Utilidades de años anteriores"){
        document.getElementById("c21").innerHTML="Patrimonio";
        document.getElementById("e21").innerHTML=monto21;
        document.getElementById("d21").innerHTML="";
        haber21=monto21;
    }
    else{
        document.getElementById("c21").innerHTML="";
        document.getElementById("d21").innerHTML="";
        document.getElementById("e21").innerHTML="";

    }

    //FILA 22
    let cuenta22 = document.getElementById("a22").value;
    let monto22 = document.getElementById("b22").value;
    let debe22=0;
    let haber22=0;
    //ACTIVOS DB
    if(cuenta22=="Caja"||cuenta22=="Inventario"||cuenta22=="Clientes"||cuenta22=="Terrenos"||
        cuenta22=="Maquinaria"||cuenta22=="Doc por cobrar"||cuenta22=="Inversiones"||cuenta22=="Seguros por cobrar"
        ||cuenta22=="Papeleria y utiles"||cuenta22=="IVA por cobrar"||cuenta22=="Vehiculos"||cuenta22=="Bancos"
        ||cuenta22=="Mobiliario y equipo")
    {   document.getElementById("c22").innerHTML="Activo";
        document.getElementById("d22").innerHTML=monto22;
        document.getElementById("e22").innerHTML="";
        debe22=monto22;
    }
    //PASIVOS DB
    else if(cuenta22=="Proveedores"||cuenta22=="Cuota patronal por pagar"||cuenta22=="Cuota laboral por pagar"
        ||cuenta22=="Prestamos bancarios"||cuenta22=="IVA por pagar"||cuenta22=="Acreedores"||cuenta22=="Doc por pagar"
        ||cuenta22=="Reserva legal"){
        document.getElementById("c22").innerHTML="Pasivo";
        document.getElementById("e22").innerHTML=monto22;
        document.getElementById("d22").innerHTML="";
        haber22=monto22;
    }
    //GASTOS DB
    else if(cuenta22=="Bonificacion incentiva"||cuenta22=="Horas extras"||cuenta22=="Sueldos"||cuenta22=="Seguros"||
            cuenta22=="Aguinaldo"||cuenta22=="Cuota patronal"||cuenta22=="Costo de ventas"||cuenta22=="Bono 14"){   
        document.getElementById("c22").innerHTML="Gasto";
        document.getElementById("d22").innerHTML=monto22;
        document.getElementById("e22").innerHTML="";
        debe22=monto22;
    }
    //INGRESOS DB
    else if(cuenta22=="Ventas"){
        document.getElementById("c22").innerHTML="Ingreso";
        document.getElementById("d22").innerHTML=monto22;
        document.getElementById("e22").innerHTML="";
        debe22=monto22;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta22=="Patrimonio"||cuenta22=="Utilidades de años anteriores"){
        document.getElementById("c22").innerHTML="Patrimonio";
        document.getElementById("e22").innerHTML=monto22;
        document.getElementById("d22").innerHTML="";
        haber22=monto22;
    }
    else{
        document.getElementById("c22").innerHTML="";
        document.getElementById("d22").innerHTML="";
        document.getElementById("e22").innerHTML="";

    }

    //FILA 23
    let cuenta23 = document.getElementById("a23").value;
    let monto23 = document.getElementById("b23").value;
    let debe23=0;
    let haber23=0;
    //ACTIVOS DB
    if(cuenta23=="Caja"||cuenta23=="Inventario"||cuenta23=="Clientes"||cuenta23=="Terrenos"||
        cuenta23=="Maquinaria"||cuenta23=="Doc por cobrar"||cuenta23=="Inversiones"||cuenta23=="Seguros por cobrar"
        ||cuenta23=="Papeleria y utiles"||cuenta23=="IVA por cobrar"||cuenta23=="Vehiculos"||cuenta23=="Bancos"
        ||cuenta23=="Mobiliario y equipo")
    {   document.getElementById("c23").innerHTML="Activo";
        document.getElementById("d23").innerHTML=monto23;
        document.getElementById("e23").innerHTML="";
        debe23=monto23;
    }
    //PASIVOS DB
    else if(cuenta23=="Proveedores"||cuenta23=="Cuota patronal por pagar"||cuenta23=="Cuota laboral por pagar"
        ||cuenta23=="Prestamos bancarios"||cuenta23=="IVA por pagar"||cuenta23=="Acreedores"||cuenta23=="Doc por pagar"
        ||cuenta23=="Reserva legal"){
        document.getElementById("c23").innerHTML="Pasivo";
        document.getElementById("e23").innerHTML=monto23;
        document.getElementById("d23").innerHTML="";
        haber23=monto23;
    }
    //GASTOS DB
    else if(cuenta23=="Bonificacion incentiva"||cuenta23=="Horas extras"||cuenta23=="Sueldos"||cuenta23=="Seguros"||
            cuenta23=="Aguinaldo"||cuenta23=="Cuota patronal"||cuenta23=="Costo de ventas"||cuenta23=="Bono 14"){   
        document.getElementById("c23").innerHTML="Gasto";
        document.getElementById("d23").innerHTML=monto23;
        document.getElementById("e23").innerHTML="";
        debe23=monto23;
    }
    //INGRESOS DB
    else if(cuenta23=="Ventas"){
        document.getElementById("c23").innerHTML="Ingreso";
        document.getElementById("d23").innerHTML=monto23;
        document.getElementById("e23").innerHTML="";
        debe23=monto23;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta23=="Patrimonio"||cuenta23=="Utilidades de años anteriores"){
        document.getElementById("c23").innerHTML="Patrimonio";
        document.getElementById("e23").innerHTML=monto23;
        document.getElementById("d23").innerHTML="";
        haber23=monto23;
    }
    else{
        document.getElementById("c23").innerHTML="";
        document.getElementById("d23").innerHTML="";
        document.getElementById("e23").innerHTML="";

    }

    //FILA 24
    let cuenta24 = document.getElementById("a24").value;
    let monto24 = document.getElementById("b24").value;
    let debe24=0;
    let haber24=0;
    //ACTIVOS DB
    if(cuenta24=="Caja"||cuenta24=="Inventario"||cuenta24=="Clientes"||cuenta24=="Terrenos"||
        cuenta24=="Maquinaria"||cuenta24=="Doc por cobrar"||cuenta24=="Inversiones"||cuenta24=="Seguros por cobrar"
        ||cuenta24=="Papeleria y utiles"||cuenta24=="IVA por cobrar"||cuenta24=="Vehiculos"||cuenta24=="Bancos"
        ||cuenta24=="Mobiliario y equipo")
    {   document.getElementById("c24").innerHTML="Activo";
        document.getElementById("d24").innerHTML=monto24;
        document.getElementById("e24").innerHTML="";
        debe24=monto24;
    }
    //PASIVOS DB
    else if(cuenta24=="Proveedores"||cuenta24=="Cuota patronal por pagar"||cuenta24=="Cuota laboral por pagar"
        ||cuenta24=="Prestamos bancarios"||cuenta24=="IVA por pagar"||cuenta24=="Acreedores"||cuenta24=="Doc por pagar"
        ||cuenta24=="Reserva legal"){
        document.getElementById("c24").innerHTML="Pasivo";
        document.getElementById("e24").innerHTML=monto24;
        document.getElementById("d24").innerHTML="";
        haber24=monto24;
    }
    //GASTOS DB
    else if(cuenta24=="Bonificacion incentiva"||cuenta24=="Horas extras"||cuenta24=="Sueldos"||cuenta24=="Seguros"||
            cuenta24=="Aguinaldo"||cuenta24=="Cuota patronal"||cuenta24=="Costo de ventas"||cuenta24=="Bono 14"){   
        document.getElementById("c24").innerHTML="Gasto";
        document.getElementById("d24").innerHTML=monto24;
        document.getElementById("e24").innerHTML="";
        debe24=monto24;
    }
    //INGRESOS DB
    else if(cuenta24=="Ventas"){
        document.getElementById("c24").innerHTML="Ingreso";
        document.getElementById("d24").innerHTML=monto24;
        document.getElementById("e24").innerHTML="";
        debe24=monto24;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta24=="Patrimonio"||cuenta24=="Utilidades de años anteriores"){
        document.getElementById("c24").innerHTML="Patrimonio";
        document.getElementById("e24").innerHTML=monto24;
        document.getElementById("d24").innerHTML="";
        haber24=monto24;
    }
    else{
        document.getElementById("c24").innerHTML="";
        document.getElementById("d24").innerHTML="";
        document.getElementById("e24").innerHTML="";

    }

    //FILA 25
    let cuenta25 = document.getElementById("a25").value;
    let monto25 = document.getElementById("b25").value;
    let debe25=0;
    let haber25=0;
    //ACTIVOS DB
    if(cuenta25=="Caja"||cuenta25=="Inventario"||cuenta25=="Clientes"||cuenta25=="Terrenos"||
        cuenta25=="Maquinaria"||cuenta25=="Doc por cobrar"||cuenta25=="Inversiones"||cuenta25=="Seguros por cobrar"
        ||cuenta25=="Papeleria y utiles"||cuenta25=="IVA por cobrar"||cuenta25=="Vehiculos"||cuenta25=="Bancos"
        ||cuenta25=="Mobiliario y equipo")
    {   document.getElementById("c25").innerHTML="Activo";
        document.getElementById("d25").innerHTML=monto25;
        document.getElementById("e25").innerHTML="";
        debe25=monto25;
    }
    //PASIVOS DB
    else if(cuenta25=="Proveedores"||cuenta25=="Cuota patronal por pagar"||cuenta25=="Cuota laboral por pagar"
        ||cuenta25=="Prestamos bancarios"||cuenta25=="IVA por pagar"||cuenta25=="Acreedores"||cuenta25=="Doc por pagar"
        ||cuenta25=="Reserva legal"){
        document.getElementById("c25").innerHTML="Pasivo";
        document.getElementById("e25").innerHTML=monto25;
        document.getElementById("d25").innerHTML="";
        haber25=monto25;
    }
    //GASTOS DB
    else if(cuenta25=="Bonificacion incentiva"||cuenta25=="Horas extras"||cuenta25=="Sueldos"||cuenta25=="Seguros"||
            cuenta25=="Aguinaldo"||cuenta25=="Cuota patronal"||cuenta25=="Costo de ventas"||cuenta25=="Bono 14"){   
        document.getElementById("c25").innerHTML="Gasto";
        document.getElementById("d25").innerHTML=monto25;
        document.getElementById("e25").innerHTML="";
        debe25=monto25;
    }
    //INGRESOS DB
    else if(cuenta25=="Ventas"){
        document.getElementById("c25").innerHTML="Ingreso";
        document.getElementById("d25").innerHTML=monto25;
        document.getElementById("e25").innerHTML="";
        debe25=monto25;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta25=="Patrimonio"||cuenta25=="Utilidades de años anteriores"){
        document.getElementById("c25").innerHTML="Patrimonio";
        document.getElementById("e25").innerHTML=monto25;
        document.getElementById("d25").innerHTML="";
        haber25=monto25;
    }
    else{
        document.getElementById("c25").innerHTML="";
        document.getElementById("d25").innerHTML="";
        document.getElementById("e25").innerHTML="";

    }

    //FILA 26
    let cuenta26 = document.getElementById("a26").value;
    let monto26 = document.getElementById("b26").value;
    let debe26=0;
    let haber26=0;
    //ACTIVOS DB
    if(cuenta26=="Caja"||cuenta26=="Inventario"||cuenta26=="Clientes"||cuenta26=="Terrenos"||
        cuenta26=="Maquinaria"||cuenta26=="Doc por cobrar"||cuenta26=="Inversiones"||cuenta26=="Seguros por cobrar"
        ||cuenta26=="Papeleria y utiles"||cuenta26=="IVA por cobrar"||cuenta26=="Vehiculos"||cuenta26=="Bancos"
        ||cuenta26=="Mobiliario y equipo")
    {   document.getElementById("c26").innerHTML="Activo";
        document.getElementById("d26").innerHTML=monto26;
        document.getElementById("e26").innerHTML="";
        debe26=monto26;
    }
    //PASIVOS DB
    else if(cuenta26=="Proveedores"||cuenta26=="Cuota patronal por pagar"||cuenta26=="Cuota laboral por pagar"
        ||cuenta26=="Prestamos bancarios"||cuenta26=="IVA por pagar"||cuenta26=="Acreedores"||cuenta26=="Doc por pagar"
        ||cuenta26=="Reserva legal"){
        document.getElementById("c26").innerHTML="Pasivo";
        document.getElementById("e26").innerHTML=monto26;
        document.getElementById("d26").innerHTML="";
        haber26=monto26;
    }
    //GASTOS DB
    else if(cuenta26=="Bonificacion incentiva"||cuenta26=="Horas extras"||cuenta26=="Sueldos"||cuenta26=="Seguros"||
            cuenta26=="Aguinaldo"||cuenta26=="Cuota patronal"||cuenta26=="Costo de ventas"||cuenta26=="Bono 14"){   
        document.getElementById("c26").innerHTML="Gasto";
        document.getElementById("d26").innerHTML=monto26;
        document.getElementById("e26").innerHTML="";
        debe26=monto26;
    }
    //INGRESOS DB
    else if(cuenta26=="Ventas"){
        document.getElementById("c26").innerHTML="Ingreso";
        document.getElementById("d26").innerHTML=monto26;
        document.getElementById("e26").innerHTML="";
        debe26=monto26;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta26=="Patrimonio"||cuenta26=="Utilidades de años anteriores"){
        document.getElementById("c26").innerHTML="Patrimonio";
        document.getElementById("e26").innerHTML=monto26;
        document.getElementById("d26").innerHTML="";
        haber26=monto26;
    }
    else{
        document.getElementById("c26").innerHTML="";
        document.getElementById("d26").innerHTML="";
        document.getElementById("e26").innerHTML="";

    }

    //FILA 27
    let cuenta27 = document.getElementById("a27").value;
    let monto27 = document.getElementById("b27").value;
    let debe27=0;
    let haber27=0;
    //ACTIVOS DB
    if(cuenta27=="Caja"||cuenta27=="Inventario"||cuenta27=="Clientes"||cuenta27=="Terrenos"||
        cuenta27=="Maquinaria"||cuenta27=="Doc por cobrar"||cuenta27=="Inversiones"||cuenta27=="Seguros por cobrar"
        ||cuenta27=="Papeleria y utiles"||cuenta27=="IVA por cobrar"||cuenta27=="Vehiculos"||cuenta27=="Bancos"
        ||cuenta27=="Mobiliario y equipo")
    {   document.getElementById("c27").innerHTML="Activo";
        document.getElementById("d27").innerHTML=monto27;
        document.getElementById("e27").innerHTML="";
        debe27=monto27;
    }
    //PASIVOS DB
    else if(cuenta27=="Proveedores"||cuenta27=="Cuota patronal por pagar"||cuenta27=="Cuota laboral por pagar"
        ||cuenta27=="Prestamos bancarios"||cuenta27=="IVA por pagar"||cuenta27=="Acreedores"||cuenta27=="Doc por pagar"
        ||cuenta27=="Reserva legal"){
        document.getElementById("c27").innerHTML="Pasivo";
        document.getElementById("e27").innerHTML=monto27;
        document.getElementById("d27").innerHTML="";
        haber27=monto27;
    }
    //GASTOS DB
    else if(cuenta27=="Bonificacion incentiva"||cuenta27=="Horas extras"||cuenta27=="Sueldos"||cuenta27=="Seguros"||
            cuenta27=="Aguinaldo"||cuenta27=="Cuota patronal"||cuenta27=="Costo de ventas"||cuenta27=="Bono 14"){   
        document.getElementById("c27").innerHTML="Gasto";
        document.getElementById("d27").innerHTML=monto27;
        document.getElementById("e27").innerHTML="";
        debe27=monto27;
    }
    //INGRESOS DB
    else if(cuenta27=="Ventas"){
        document.getElementById("c27").innerHTML="Ingreso";
        document.getElementById("d27").innerHTML=monto27;
        document.getElementById("e27").innerHTML="";
        debe27=monto27;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta27=="Patrimonio"||cuenta27=="Utilidades de años anteriores"){
        document.getElementById("c27").innerHTML="Patrimonio";
        document.getElementById("e27").innerHTML=monto27;
        document.getElementById("d27").innerHTML="";
        haber27=monto27;
    }
    else{
        document.getElementById("c27").innerHTML="";
        document.getElementById("d27").innerHTML="";
        document.getElementById("e27").innerHTML="";

    }

    //FILA 28
    let cuenta28 = document.getElementById("a28").value;
    let monto28 = document.getElementById("b28").value;
    let debe28=0;
    let haber28=0;
    //ACTIVOS DB
    if(cuenta28=="Caja"||cuenta28=="Inventario"||cuenta28=="Clientes"||cuenta28=="Terrenos"||
        cuenta28=="Maquinaria"||cuenta28=="Doc por cobrar"||cuenta28=="Inversiones"||cuenta28=="Seguros por cobrar"
        ||cuenta28=="Papeleria y utiles"||cuenta28=="IVA por cobrar"||cuenta28=="Vehiculos"||cuenta28=="Bancos"
        ||cuenta28=="Mobiliario y equipo")
    {   document.getElementById("c28").innerHTML="Activo";
        document.getElementById("d28").innerHTML=monto28;
        document.getElementById("e28").innerHTML="";
        debe28=monto28;
    }
    //PASIVOS DB
    else if(cuenta28=="Proveedores"||cuenta28=="Cuota patronal por pagar"||cuenta28=="Cuota laboral por pagar"
        ||cuenta28=="Prestamos bancarios"||cuenta28=="IVA por pagar"||cuenta28=="Acreedores"||cuenta28=="Doc por pagar"
        ||cuenta28=="Reserva legal"){
        document.getElementById("c28").innerHTML="Pasivo";
        document.getElementById("e28").innerHTML=monto28;
        document.getElementById("d28").innerHTML="";
        haber28=monto28;
    }
    //GASTOS DB
    else if(cuenta28=="Bonificacion incentiva"||cuenta28=="Horas extras"||cuenta28=="Sueldos"||cuenta28=="Seguros"||
            cuenta28=="Aguinaldo"||cuenta28=="Cuota patronal"||cuenta28=="Costo de ventas"||cuenta28=="Bono 14"){   
        document.getElementById("c28").innerHTML="Gasto";
        document.getElementById("d28").innerHTML=monto28;
        document.getElementById("e28").innerHTML="";
        debe28=monto28;
    }
    //INGRESOS DB
    else if(cuenta28=="Ventas"){
        document.getElementById("c28").innerHTML="Ingreso";
        document.getElementById("d28").innerHTML=monto28;
        document.getElementById("e28").innerHTML="";
        debe28=monto28;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta28=="Patrimonio"||cuenta28=="Utilidades de años anteriores"){
        document.getElementById("c28").innerHTML="Patrimonio";
        document.getElementById("e28").innerHTML=monto28;
        document.getElementById("d28").innerHTML="";
        haber28=monto28;
    }
    else{
        document.getElementById("c28").innerHTML="";
        document.getElementById("d28").innerHTML="";
        document.getElementById("e28").innerHTML="";

    }

    //FILA 29
    let cuenta29 = document.getElementById("a29").value;
    let monto29 = document.getElementById("b29").value;
    let debe29=0;
    let haber29=0;
    //ACTIVOS DB
    if(cuenta29=="Caja"||cuenta29=="Inventario"||cuenta29=="Clientes"||cuenta29=="Terrenos"||
        cuenta29=="Maquinaria"||cuenta29=="Doc por cobrar"||cuenta29=="Inversiones"||cuenta29=="Seguros por cobrar"
        ||cuenta29=="Papeleria y utiles"||cuenta29=="IVA por cobrar"||cuenta29=="Vehiculos"||cuenta29=="Bancos"
        ||cuenta29=="Mobiliario y equipo")
    {   document.getElementById("c29").innerHTML="Activo";
        document.getElementById("d29").innerHTML=monto29;
        document.getElementById("e29").innerHTML="";
        debe29=monto29;
    }
    //PASIVOS DB
    else if(cuenta29=="Proveedores"||cuenta29=="Cuota patronal por pagar"||cuenta29=="Cuota laboral por pagar"
        ||cuenta29=="Prestamos bancarios"||cuenta29=="IVA por pagar"||cuenta29=="Acreedores"||cuenta29=="Doc por pagar"
        ||cuenta29=="Reserva legal"){
        document.getElementById("c29").innerHTML="Pasivo";
        document.getElementById("e29").innerHTML=monto29;
        document.getElementById("d29").innerHTML="";
        haber29=monto29;
    }
    //GASTOS DB
    else if(cuenta29=="Bonificacion incentiva"||cuenta29=="Horas extras"||cuenta29=="Sueldos"||cuenta29=="Seguros"||
            cuenta29=="Aguinaldo"||cuenta29=="Cuota patronal"||cuenta29=="Costo de ventas"||cuenta29=="Bono 14"){   
        document.getElementById("c29").innerHTML="Gasto";
        document.getElementById("d29").innerHTML=monto29;
        document.getElementById("e29").innerHTML="";
        debe29=monto29;
    }
    //INGRESOS DB
    else if(cuenta29=="Ventas"){
        document.getElementById("c29").innerHTML="Ingreso";
        document.getElementById("d29").innerHTML=monto29;
        document.getElementById("e29").innerHTML="";
        debe29=monto29;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta29=="Patrimonio"||cuenta29=="Utilidades de años anteriores"){
        document.getElementById("c29").innerHTML="Patrimonio";
        document.getElementById("e29").innerHTML=monto29;
        document.getElementById("d29").innerHTML="";
        haber29=monto29;
    }
    else{
        document.getElementById("c29").innerHTML="";
        document.getElementById("d29").innerHTML="";
        document.getElementById("e29").innerHTML="";

    }

    //FILA 30
    let cuenta30 = document.getElementById("a30").value;
    let monto30 = document.getElementById("b30").value;
    let debe30=0;
    let haber30=0;
    //ACTIVOS DB
    if(cuenta30=="Caja"||cuenta30=="Inventario"||cuenta30=="Clientes"||cuenta30=="Terrenos"||
        cuenta30=="Maquinaria"||cuenta30=="Doc por cobrar"||cuenta30=="Inversiones"||cuenta30=="Seguros por cobrar"
        ||cuenta30=="Papeleria y utiles"||cuenta30=="IVA por cobrar"||cuenta30=="Vehiculos"||cuenta30=="Bancos"
        ||cuenta30=="Mobiliario y equipo")
    {   document.getElementById("c30").innerHTML="Activo";
        document.getElementById("d30").innerHTML=monto30;
        document.getElementById("e30").innerHTML="";
        debe30=monto30;
    }
    //PASIVOS DB
    else if(cuenta30=="Proveedores"||cuenta30=="Cuota patronal por pagar"||cuenta30=="Cuota laboral por pagar"
        ||cuenta30=="Prestamos bancarios"||cuenta30=="IVA por pagar"||cuenta30=="Acreedores"||cuenta30=="Doc por pagar"
        ||cuenta30=="Reserva legal"){
        document.getElementById("c30").innerHTML="Pasivo";
        document.getElementById("e30").innerHTML=monto30;
        document.getElementById("d30").innerHTML="";
        haber30=monto30;
    }
    //GASTOS DB
    else if(cuenta30=="Bonificacion incentiva"||cuenta30=="Horas extras"||cuenta30=="Sueldos"||cuenta30=="Seguros"||
            cuenta30=="Aguinaldo"||cuenta30=="Cuota patronal"||cuenta30=="Costo de ventas"||cuenta30=="Bono 14"){   
        document.getElementById("c30").innerHTML="Gasto";
        document.getElementById("d30").innerHTML=monto30;
        document.getElementById("e30").innerHTML="";
        debe30=monto30;
    }
    //INGRESOS DB
    else if(cuenta30=="Ventas"){
        document.getElementById("c30").innerHTML="Ingreso";
        document.getElementById("d30").innerHTML=monto30;
        document.getElementById("e30").innerHTML="";
        debe30=monto30;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta30=="Patrimonio"||cuenta30=="Utilidades de años anteriores"){
        document.getElementById("c30").innerHTML="Patrimonio";
        document.getElementById("e30").innerHTML=monto30;
        document.getElementById("d30").innerHTML="";
        haber30=monto30;
    }
    else{
        document.getElementById("c30").innerHTML="";
        document.getElementById("d30").innerHTML="";
        document.getElementById("e30").innerHTML="";

    }

    //FILA 31
    let cuenta31 = document.getElementById("a31").value;
    let monto31 = document.getElementById("b31").value;
    let debe31=0;
    let haber31=0;
    //ACTIVOS DB
    if(cuenta31=="Caja"||cuenta31=="Inventario"||cuenta31=="Clientes"||cuenta31=="Terrenos"||
        cuenta31=="Maquinaria"||cuenta31=="Doc por cobrar"||cuenta31=="Inversiones"||cuenta31=="Seguros por cobrar"
        ||cuenta31=="Papeleria y utiles"||cuenta31=="IVA por cobrar"||cuenta31=="Vehiculos"||cuenta31=="Bancos"
        ||cuenta31=="Mobiliario y equipo")
    {   document.getElementById("c31").innerHTML="Activo";
        document.getElementById("d31").innerHTML=monto31;
        document.getElementById("e31").innerHTML="";
        debe31=monto31;
    }
    //PASIVOS DB
    else if(cuenta31=="Proveedores"||cuenta31=="Cuota patronal por pagar"||cuenta31=="Cuota laboral por pagar"
        ||cuenta31=="Prestamos bancarios"||cuenta31=="IVA por pagar"||cuenta31=="Acreedores"||cuenta31=="Doc por pagar"
        ||cuenta31=="Reserva legal"){
        document.getElementById("c31").innerHTML="Pasivo";
        document.getElementById("e31").innerHTML=monto31;
        document.getElementById("d31").innerHTML="";
        haber31=monto31;
    }
    //GASTOS DB
    else if(cuenta31=="Bonificacion incentiva"||cuenta31=="Horas extras"||cuenta31=="Sueldos"||cuenta31=="Seguros"||
            cuenta31=="Aguinaldo"||cuenta31=="Cuota patronal"||cuenta31=="Costo de ventas"||cuenta31=="Bono 14"){   
        document.getElementById("c31").innerHTML="Gasto";
        document.getElementById("d31").innerHTML=monto31;
        document.getElementById("e31").innerHTML="";
        debe31=monto31;
    }
    //INGRESOS DB
    else if(cuenta31=="Ventas"){
        document.getElementById("c31").innerHTML="Ingreso";
        document.getElementById("d31").innerHTML=monto31;
        document.getElementById("e31").innerHTML="";
        debe31=monto31;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta31=="Patrimonio"||cuenta31=="Utilidades de años anteriores"){
        document.getElementById("c31").innerHTML="Patrimonio";
        document.getElementById("e31").innerHTML=monto31;
        document.getElementById("d31").innerHTML="";
        haber31=monto31;
    }
    else{
        document.getElementById("c31").innerHTML="";
        document.getElementById("d31").innerHTML="";
        document.getElementById("e31").innerHTML="";

    }

    //FILA 32
    let cuenta32 = document.getElementById("a32").value;
    let monto32 = document.getElementById("b32").value;
    let debe32=0;
    let haber32=0;
    //ACTIVOS DB
    if(cuenta32=="Caja"||cuenta32=="Inventario"||cuenta32=="Clientes"||cuenta32=="Terrenos"||
        cuenta32=="Maquinaria"||cuenta32=="Doc por cobrar"||cuenta32=="Inversiones"||cuenta32=="Seguros por cobrar"
        ||cuenta32=="Papeleria y utiles"||cuenta32=="IVA por cobrar"||cuenta32=="Vehiculos"||cuenta32=="Bancos"
        ||cuenta32=="Mobiliario y equipo")
    {   document.getElementById("c32").innerHTML="Activo";
        document.getElementById("d32").innerHTML=monto32;
        document.getElementById("e32").innerHTML="";
        debe32=monto32;
    }
    //PASIVOS DB
    else if(cuenta32=="Proveedores"||cuenta32=="Cuota patronal por pagar"||cuenta32=="Cuota laboral por pagar"
        ||cuenta32=="Prestamos bancarios"||cuenta32=="IVA por pagar"||cuenta32=="Acreedores"||cuenta32=="Doc por pagar"
        ||cuenta32=="Reserva legal"){
        document.getElementById("c32").innerHTML="Pasivo";
        document.getElementById("e32").innerHTML=monto32;
        document.getElementById("d32").innerHTML="";
        haber32=monto32;
    }
    //GASTOS DB
    else if(cuenta32=="Bonificacion incentiva"||cuenta32=="Horas extras"||cuenta32=="Sueldos"||cuenta32=="Seguros"||
            cuenta32=="Aguinaldo"||cuenta32=="Cuota patronal"||cuenta32=="Costo de ventas"||cuenta32=="Bono 14"){   
        document.getElementById("c32").innerHTML="Gasto";
        document.getElementById("d32").innerHTML=monto32;
        document.getElementById("e32").innerHTML="";
        debe32=monto32;
    }
    //INGRESOS DB
    else if(cuenta32=="Ventas"){
        document.getElementById("c32").innerHTML="Ingreso";
        document.getElementById("d32").innerHTML=monto32;
        document.getElementById("e32").innerHTML="";
        debe32=monto32;
    }
    //PATRIMONIO-CAPITAL DB
    else if(cuenta32=="Patrimonio"||cuenta32=="Utilidades de años anteriores"){
        document.getElementById("c32").innerHTML="Patrimonio";
        document.getElementById("e32").innerHTML=monto32;
        document.getElementById("d32").innerHTML="";
        haber32=monto32;
    }
    else{
        document.getElementById("c32").innerHTML="";
        document.getElementById("d32").innerHTML="";
        document.getElementById("e32").innerHTML="";

    }

     

    


    //SUMA TOTAL
    let sumaD;
    sumaD=parseInt(debe)+parseInt(debe2)+parseInt(debe3)+parseInt(debe4)+parseInt(debe5)+parseInt(debe6)
    +parseInt(debe7)+parseInt(debe8)+parseInt(debe9)+parseInt(debe10)+parseInt(debe11)+parseInt(debe12)
    +parseInt(debe13)+parseInt(debe14)+parseInt(debe15)+parseInt(debe16)+parseInt(debe17)+parseInt(debe18)+parseInt(debe19)+parseInt(debe20)
    +parseInt(debe21)+parseInt(debe22)+parseInt(debe23)+parseInt(debe24)+parseInt(debe25)+parseInt(debe26)
    +parseInt(debe27)+parseInt(debe28)+parseInt(debe29)+parseInt(debe30)+parseInt(debe31)+parseInt(debe32);
    document.getElementById("d33").innerHTML=sumaD;

    let sumaH;
    sumaH=parseInt(haber)+parseInt(haber2)+parseInt(haber3)+parseInt(haber4)+parseInt(haber5)+parseInt(haber6)
    +parseInt(haber7)+parseInt(haber8)+parseInt(haber9)+parseInt(haber10)+parseInt(haber11)+parseInt(haber12)
    +parseInt(haber13)+parseInt(haber14)+parseInt(haber15)+parseInt(haber16)+parseInt(haber17)+parseInt(haber18)+parseInt(haber19)+parseInt(haber20)
    +parseInt(haber21)+parseInt(haber22)+parseInt(haber23)+parseInt(haber24)+parseInt(haber25)+parseInt(haber26)
    +parseInt(haber27)+parseInt(haber28)+parseInt(haber29)+parseInt(haber30)+parseInt(haber31)+parseInt(haber32);
    document.getElementById("e33").innerHTML=sumaH;

}

function Jorn(){
    let caja = document.getElementById("j1").value;
    let clientes = document.getElementById("m1").value;
    let mostrard;
    let mostrarh;
    mostrard = document.getElementById("k1").innerHTML=caja;
    mostrarh = document.getElementById("o1").innerHTML=clientes;
    mostrard = document.getElementById("t1").innerHTML=caja;
    mostrarh = document.getElementById("tt1").innerHTML=clientes;
    //let sumaD;
    //sumaD=parseInt(debe)+parseInt(debe2);
    //document.getElementById("d33").innerHTML=sumaD;

    //P3
    let caja2 = document.getElementById("j2").value;
    let clientes2 = document.getElementById("m2").value;
    let mostrard2;
    let mostrarh2;
    mostrard2 = document.getElementById("k2").innerHTML=caja2;
    mostrarh2 = document.getElementById("o2").innerHTML=clientes2;
    mostrard2 = document.getElementById("t2").innerHTML=caja2;
    mostrarh2 = document.getElementById("tt2").innerHTML=clientes2;

    //P4
    let caja3 = document.getElementById("j3").value;
    let clientes3 = document.getElementById("m3").value;
    let caja4 = document.getElementById("mm3").value;
    let proveedores = document.getElementById("mmm3").value;
    let mostrard3;
    let mostrarh3;
    mostrard3 = document.getElementById("k3").innerHTML=caja3;
    mostrard3 = document.getElementById("n3").innerHTML=clientes3;
    mostrarh3 = document.getElementById("oo3").innerHTML=caja4;
    mostrarh3 = document.getElementById("ooo3").innerHTML=proveedores;


    let sumaD;
    sumaD=parseInt(caja3)+parseInt(clientes3);
    document.getElementById("t3").innerHTML=sumaD;
    let sumaH;
    sumaH=parseInt(caja4)+parseInt(proveedores);
    document.getElementById("tt3").innerHTML=sumaH;

    
}
