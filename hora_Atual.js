const timeNow = async () => {
    try{//Try to receive the informations
        const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo')//ask for response to API
        const info = await response.json() //Obtain the dates from the response of API

        console.log(`Data local: ${info.date}`)
        console.log(`Hora local: ${info.time}`)
        console.log(`Fuso horario: ${info.timeZone}`)

    }catch(erro){//If error occurs
        console.log("Erro na tentativa de buscar informacoes:", erro)
    }
}

timeNow()//Call de function