let botonSuma=document.getElementById("cantidad-controles__sumar");
let botonResta=document.getElementById("cantidad-controles__restar");

// botones Baby yoda //

   function addItem() {
    valor = document.getElementById("input-cant");
    valor.value ++;
     calcularPrecio();
     calcularSubtotal();
     cantidadElementos();
     calcularTotal();
    } 
    

   function removeItem() {
    valor = document.getElementById("input-cant");
    if (valor.value > 1)valor.value --;
     calcularPrecio();
     calcularSubtotal();
     cantidadElementos();
     calcularTotal();
    }

    function calcularPrecio(){
        valor = document.getElementById("input-cant").value * 1799.99 //1799.99 valor a tomar de la base
        document.getElementById("precio-totalItem").textContent=valor;
    }


    function calcularSubtotal(){
       subtotales=  parseFloat (document.getElementById("precio-totalItem").textContent) +
                    parseFloat  (document.getElementById("precio-totalItem2").textContent);
        document.getElementById("subtotal").textContent = subtotales;
    }
     

    function calcularTotal(){
       total =  parseFloat(document.getElementById("subtotal").textContent) 
               + parseFloat (document.getElementById("envio").textContent);
       document.getElementById("precio-total").textContent = ('$ ' + total);      
    }


    function cantidadElementos(){
        cantElemts = parseInt (document.getElementById("input-cant").value) + parseInt (document.getElementById("input-cantidad").value);
        document.getElementById("cant-elementos").textContent = cantElemts;
    }

    
//------- BOTONES DE PIDGEOTO--------//

function addItem2() {
    valor = document.getElementById("input-cantidad");
    valor.value ++;
     calcularPrecio2();
     calcularSubtotal();
     cantidadElementos();
     calcularTotal();
    } 

function removeItem2() {
    valor = document.getElementById("input-cantidad");
    if (valor.value > 1)valor.value --;
     calcularPrecio2();
     calcularSubtotal();
     cantidadElementos();
     calcularTotal();
    }  
    
    function calcularPrecio2(){
        valor = document.getElementById("input-cantidad").value * 1799.99 //1799.99 valor a tomar de la base
        document.getElementById("precio-totalItem2").textContent=valor;
    }  
    

 //  asignacion a botones de baby yoda //
    
    botonSuma.onclick=addItem;
    botonResta.onclick=removeItem;