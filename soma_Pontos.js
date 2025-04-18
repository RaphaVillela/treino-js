const somaPontos = (...pontuacao) => {//Soma todos os pontos
    return pontuacao.reduce((total, atual) => total + atual, 0)
  }
  
  console.log(somaPontos(10, 20, 15, 2, 4, 9))//Pontos ganhos