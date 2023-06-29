function mayornum(arra){
    

    // let i;

    let max = arra[0];
    document.write(`el array tiene estos elementos: ${arra}`);
    document.write('<br>')
   
    for( i=0; i<arra.length; i++){
       

        // max = arra[0];
        if(arra[i]>max){
            max = arra[i]
            
        }
        document.write('<br>')
        document.write(i + ":")
        document.write(`el numero maximo por ahora es: ${max}` )
    };
    document.write('<br>')
   document.write('el mayor numero del array es' + max)

}
/////////////////////////////////////////
document.write('Dada la distancia entre A y B, considero que, ');

const distancia = parseInt(prompt('Ingrese la distancia aproximada entre punto A y B'));
// document.write('<br>')



if(distancia<=999) {
    document.write('es mejor ir a pie');

 }else if((distancia>=1000) & (distancia<3000)){
    document.write('es mejor tomar un colectivo');
} else if((distancia>=3000) & (distancia<100000)){
    document.write('es mejor ir en auto');
} else if(distancia>=100000){
    document.write('es mejor ir en avion');
}

document.write('<br>')
document.write('<br>')

let array = [1, 5, 6, 3, 8];
let array2 = [5, 8, 6, 3, 1];
// crear otro en el cual los elementos sean ingresador por el usuario


// document.write(mayornum(distancia)) imprime lo que devuelve return*
mayornum(array2)


