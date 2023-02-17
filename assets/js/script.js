/*This function gets a birth date and verifies if the person
is under legal age or not by American or Brazilian laws*/
/*Essa função recebe uma data de nascimento e verifica se a pessoa nascida
nessa date é maior ou menor de idade segundo as leis americanas ou brasileiras */
function getAge(){
    //Variable declarations
    //Declaração de variáveis
    let birthInput = "";
    let birthValue = "";
    let diffnMs = ""; //Difference in Milliseconds - Diferença em Milisegundos
    let ageDate = "";
    let age = "";
    //Get current date - Busca a data atual
    const currentDate = new Date();

    //Select language based on browser language settings
    //Seleciona o idioma pelo padrão do navegador
    switch (navigator.language.toLowerCase()){
        //English excecution
        default:
            //Get birth date and format it into a printable value
            birthInput = document.getElementById("birth");
            birthValue = new Date(birthInput.value);

            //Convert dates into Milliseconds counted from 1970, take the difference
            diffnMs = currentDate.getTime() - birthValue.getTime();
            ageDate = new Date(diffnMs); //Convert angain in years
            age = Math.abs(ageDate.getUTCFullYear() - 1970);//Takes off 1970 to obtain the age
    
            //Compare if the age is under or over 21 (legal age)
            if (age < 21) {
                alert("You're under legal age in USA!");
            }else{
                document.getElementById("message").innerHTML = "Welcome!"; //Inserts a welcome message at the document
            }
            break;//End English Excecution
        
        //Começa a execução em português
        case 'pt-br':
        case 'pt':
            //Recebe a data de nascimento e converte em um valor imprimível
            birthInput = document.getElementById("birth");
            birthValue = new Date(birthInput.value);

            //Converte as datas em milisegundos contados desde 1970, tira a diferença
            diffnMs = currentDate.getTime() - birthValue.getTime();
            ageDate = new Date(diffnMs); //converte novamente em anos
            age = Math.abs(ageDate.getUTCFullYear() - 1970); //Subtrai 1970 para obter a idade
    
            //Compara se a idade é maior ou menor que 18 anos (maioridade)
            if (age < 18) {
                alert("Você é menor de idade no Brasil!");
            }else{
                document.getElementById("message").innerHTML = "Bem-vindo!"; //Insere uma mensagem de boas vindas no documento
            }
            break; //Encerra a execução em português
    }
}
