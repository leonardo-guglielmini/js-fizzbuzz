//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


//ciclo for 100 iterazioni
for(let i=0; i<100;i++){ //possibile anche while (i<100) { ... i++}

    //dichiaro le variabili utili
    let num=i+1
    let isDivby5 = (num%5)
    let isDivby3 = (num%3)
    
    //controllo che il numero sia divisibile per 3, per 5, per entrambi o non sia divisibile senza resto
    if(isDivby3 === 0 && isDivby5 === 0){
        console.log(/*`i: ${i} |*/ `FizzBuzz`)
    }else if (isDivby3 === 0){
        console.log(/*`i: ${i} |*/ `Fizz`)
    }else if (isDivby5 === 0){
        console.log(/*`i: ${i} |*/ `Buzz`)
    }else{
        console.log(/*`i: ${i} |*/ `${num}`)
    }

}