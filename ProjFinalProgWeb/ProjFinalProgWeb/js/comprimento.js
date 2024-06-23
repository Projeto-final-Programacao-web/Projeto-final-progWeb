function MetParaCent(input) {
    return input * 100;      
}

function MetParaMili(input){
    return input * 1000;

}

function MetParaPol(input){
    return input * 39.37;
}

function CentParaMet(input){
    return input / 100;

}

function CentParaMili(input){
    return input * 10;

}
function CentParaPol(input){
    return input / 25.4;
    
}

function MiliParaMet(input){
    return input / 1000;

}

function MiliParaCent(input){
    return input / 10;

}

function MiliParaPol(input){
     return input / 25.4;
}

function PolParaMet(input){
    return input / 39.37
}

function PolParaCent(input){
    return input * 2.54

}

function PolParaMili(input){
    return input * 25.4
}


function Calcular(input, var1, var2){
    if(var1 === 'metros' && var2 === 'centimetros' ){
          
        return MetParaCent(input); 

    } else if(var1 === 'metros' && var2 === 'milimetros'){

        return MetParaMili(input);

    } else if(var1 === 'metros' && var2 === 'polegadas'){
       
        return MetParaPol(input);

    } else if(var1 === 'centimetros' && var2 === 'metros'){

        return CentParaMet(input);

    } else if(var1 === 'centimetros' && var2 === 'milimetros'){

        return CentParaMili(input);

    } else if(var1 === 'centimetros' && var2 === 'polegadas'){
        
        return CentParaPol(input);

    } else if(var1 === 'milimetros' && var2 === 'metros'){
        
        return MiliParaMet(input);

    } else if(var1 === 'milimetros' && var2 === 'centimetros'){
        
        return MiliParaCent(input);

    } else if(var1 === 'milimetros' && var2 === 'polegadas'){
       
        return MiliParaPol(input);

    } else if (var1 === 'polegadas' && var2 === 'metros'){
      
        return PolParaMet(input);

    } else if ( var1 === 'polegadas' && var2 ==='centimetros'){
        
        return PolParaCent(input);
        
    }else if (var1 === 'polegadas' && var2 === 'milimetros') {
        
        return PolParaMili(input);
    } else { 
        
      alert( 'não calculavel')
    }
} 
function PegarValor(){

    const input= parseFloat(document.getElementById('input').value);
    const var1 = document.getElementById ('var').value;
    const var2 = document.getElementById('var2').value;
   var resultado = Calcular(input, var1, var2);
    const res = document.getElementById('resultado');

    res.value= resultado;
}

document.getElementById('buttonResultadoValor').addEventListener('click', PegarValor)