//entradas
let result = calcularVitorias(1000,455)
let rank = eloRankeado(result)

//saída
console.log(`O Herói tem de saldo de ${result} está no nível de ${rank}`)


//Função que calcula o número de vitórias
function calcularVitorias(win,lose){
    
    return win - lose

}

//Função que pegar o valor de vitória e resulta em um ranking/patente/elo
function eloRankeado(ranking){
    if(ranking < 10){
        return "Ferro"
    }
        else if(ranking > 10 && ranking <= 20){
            return "Bronze"
        }
            else if(ranking > 20 && ranking <= 50){
                return "Prata"
            }
                else if(ranking > 50 && ranking <= 80){
                    return "Ouro"
                }
                    else if(ranking > 80 && ranking <= 90){
                        return "Diamante"
                    }
                        else if(ranking > 90 && ranking <= 100){
                            return "Lendário"
                        }
                            else{
                                return "Imortal"
                            }
}