
function inserir  (vet, pos,valor){

if (pos < 0) return false
if (pos > vet.length) return false


for (let i = vet.length; i > pos ; i--) {
    vet[i]= vet[i-1];
    
}
vet[pos] = valor
return false
}




let vetor = [10,20,30]
console.log(vetor)


inserir(vetor, 3 , 40)
inserir(vetor, 4, 50)
console.log(vetor)



function teste2(){
    inserir (vetor, -1, 100)
    console.log(vetor)






}














// vetor.unshift(5)
// console.log(vetor)


// vetor [vetor.length] = 200
// vetor [vetor.length] = 300



// vetor.push(40)
// vetor.unshift(5)