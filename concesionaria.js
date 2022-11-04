const autos = require('./autos')

const concesionaria = {
    auto :autos,
    buscarAuto : (patente) => {
    /* let autoEncontrado = null;

    autos.forEach(auto =>{
        if(auto.patente === patente){
            autoEncontrado = auto
        }
    });

    return autoEncontrado }, */


/* let autoencontrado = autos.filter(autoxd => autoxd.patente  === patente);

return autoencontrado.length ? autoencontrado[0] : null; */

/* let autoencontrado = autos.find(autoxd => autoxd.patente  === patente);

return autoencontrado ? autoencontrado : null */



return autos.find(autoxd => autoxd.patente  === patente)|| null
    


        
},

venderAuto : function(patente) {
     const autosActualizados = autos.map(auto=>{
     if(auto.patente === patente){
        let autocambio = {
            ...auto,
            vendido: true
        }
        return autocambio
     }

     return auto

    })
    return autosActualizados 

    /* let autoencontrado=  this.buscarAuto(patente).vendido= true
} */





},

autosParaLaVenta : function(){
    return autos.filter(auto =>auto.vendido === false)
},

autosNuevos : function() {
    return this.autosParaLaVenta().filter(auto => auto.km <= 100)




},listaDeventas : function(){
    return autosVendidoss = autos.filter(auto => auto.vendido === true).map(auto => auto.precio);
    

     
},
totalVentas  : function() {
  
let total = this.listaDeventas().reduce((acum,num) =>{
    return acum + num;
},0)
return total;


},puedeComprar(persona,auto){

    return (persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas) && persona.capacidadDePagoTotal >auto.precio)
},
autosQuePuedeComprar : function(persona){
   let autosParaLaVenta = this.autosParaLaVenta();
   let autosQuePuedeComprar= autosParaLaVenta.filter(auto => this.puedeComprar(persona,auto,patente))

   return autosQuePuedeComprar
}

}



console.log(concesionaria.totalVentas())