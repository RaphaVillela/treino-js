const dobra = x => x * 2//dobrar o valor

let vetor= [1, 2, 3, 4, 5]//Vetor inicial

console.log("Antes: " + vetor)

let vetor2 = vetor.map(dobra)//Cada valor do vetor vai entrar em dobra

console.log("Depois: " + vetor2)//Printar Vetor final