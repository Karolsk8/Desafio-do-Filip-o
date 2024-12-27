console.log("olá soldado")
console.log("Por favor escrava seu nome de Guerra")
let nickname = "Ceifador"
console.log("Bem vindo à Guerra" + nickname)
 console.log("Por favor escolha seu gênero")
 let escolhaDoGenero = "Masculino"
 console.log("Por favor clique aqui para iniciar o jogo")
 let clickParaComeçar ="Começar"
 //Salão de treinamento,mantimento e equioamento
 console.log("Bem vindo"+ nickname + " a sua preparação para guerra")
 let Ceifador = ["level 0" , "M"]
 let inventario = ["Sem comida","Sem armas","Sem armadura"] 
 console.log("Por favor vá para o salão para se equipar")
 let limiteDoinventario = 50
 let limeteVerificado = true 
 console.log((limeteDoinventario <= 50))&&((limeteVerificado===true))
 console.log("Por favor vá para a loja de trocas")
 let lojaDeTroca = ["todo o tipo de arma","todo tipo de armadura"]
 console.log("Por favor escolha suas armas")
 let tiposDeArmas =["espada","espadão","arco flecha"]
 let armaEscolhida =[
    "espada","level 0","tipo de espada ferro fraco"
 ]
 console.log("Explore a loja de trocas")
console.log("Espada foi escolhido como arma"+armaEscolhida[0][0]+"o material da espada"+armaEscolhida[0])
console.log("Por favor escolha sua armadura")
let tiposDeArmaduras = [
"armadaura de coure de vaca","resistência 1,3","pode ser adquirida com uma troca de sementes",
"armadura de ferro","resistência 10","pode ser adquirida com uma troca de cristais das ilhas",
"armadura de aço ","resistência 30 ","pode ser adquirida com uma troca do diamnte vermelho",
"armadura de grafeno","resistência 50","pode ser adquiriada com uma troca de um par de olhos de um ancião lobo",
"armadura de diamante","resistência 100","pode ser adquirida com uma troca do cristal do padeiro"

] 
let coisasParaTrocar = 0
if(coisasParaTrocar===0){
console.log("Você não tem nada para trocar")
}else if(coisasParaTrocar===15){
    console.log("Você pode trocar seu itens")
}
console.log("você não tem condiçôes para fazer troca por favor diriga-se para o campo de treinamento para consiguir EXP para poder pegar materiais e itens para fazer trocas ou você escolha sair do salão para explorar e procurar por itens que pode trocar")
//Parte de ganhar EXP
console.log("O que prefere treinar?")
let escolhaDoJogador = "ir e procurar itens"
if(escolhaDoJogador ==="ir e procurar itens"){
    console.log("Muito bem vá,mas toma cuidado com os mobs, porque você esta sem EXP de combate e sem armadura")
}else if(escolhaDoJogador ==="Pode para a área de treinamnto para ter EXP de combate"){
    console.log("Você deve ir para área de treinamento")
}
console.log("Bem vindo agora você está fora do campo de treinamento")
let tiposDeCoisasQueOJogadorPodeEncotrar = ["sementes","pedras","plantas","plantas venenosas","árvores"]
if(tiposDeCoisasQueOJogadorPodeEncontrar = "pegar e guardar para trocar"){
    console.log("Você pode voltar e trocar itens que coletou")
}else if(tiposDeCoisasQueOJogadorPodeEncontrar = "Procure e ache itens"){
    console.log("Você deve procurar mais")
}
let tiposDeCriaturasQueOJgadorPodeEncontrar = ["ratos","corvos","gatos selvagens","lobos","passáros grandes","animais grandes e selvagens"]
if(tiposDeCriaturasQueOJogador ==="ratos","corvos","gatos selvagens","lobos","passáros grandes","animais grandes e selvagens"){
    console.log("Você DEVE CORRER!!!")
}else if(tiposDeCriaturasQueOJogadorPodeEncotrar = "nada de mobs"){
    console.log("Precisa ter cuidado")
}
console.log("Bem vindo de volta você pode trocar coisas que você coletou para trocar por armaduras")
lojaDeTroca = ["todo o tipo de arma","todo tipo de armadura"]
coisasParaTrocar = 3
if(coisasParaTrocar===3){
    console.log("você pode trocar itens")
}else if(coisasParaTrocar===0){
    console.log("Você não tem coisas para trocar deve procurar e coletar")
}
lojaDeTroca = ["todo o tipo de arma","todo tipo de armadura"]
tiposDeArmaduras = [
    "armadaura de couro de vaca","resistência 1,3","pode ser adquirida com uma troca de sementes",
    "armadura de ferro","resistência 10","pode ser adquirida com uma troca de cristais das ilhas",
    "armadura de aço ","resistência 30 ","pode ser adquirida com uma troca do diamnte vermelho",
    "armadura de grafeno","resistência 50","pode ser adquiriada com uma troca de um par de olhos de um ancião lobo",
    "armadura de diamante","resistência 100","pode ser adquirida com uma troca do cristal do padeiro"
]    
let armaduraEscolhidaArmaduraDeCouroDeVaca = "escolhida"
let condiçoesParaGanharAArmaduraDeCouroDeVaca = "sementes"
if(condiçoesParaGanharAArmaduraDeCouroDeVaca==="sementes"){
    console.log("Parabéns você ganhou sua primeira armadura")
}else if(condiçoesParaGnharAArmaduraDecouroDeVaca==="sem sementes"){
    console.log("Você não condições para ganhar a armadura por favor tente novamento quando tiver semnetes,para fazer a troca")
}
