function alerta(msg){
    alert(msg);
}
function adicionarParagrafo(){
    document.getElementById("paragrafo").innerHTML = "<p>meu paragrafo</p>";
}
function soma(valor){
    console.log(valor);
    var soma = valor+2;
    alert( "resultado é: "+soma);
    document.getElementById("paragrafo").innerHTML = "<p>"+soma+"</p>";
}

function adicionarValor(){
    document.getElementById("display").value = "teste";
}

function pegaValor(){
    let valor= document.getElementById("valor").value;
    alert(valor);
}


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado e a página seja recarregada

  // Obtém os valores dos campos de entrada
  var name;
  if(document.getElementById("name").value ==''){
    alerta("Campo nome está vazio");
    return;
  }else{
    name = document.getElementById("name").value;
  }
  
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Cria um objeto JavaScript com as informações do formulário
  var formData = {
    name: name,
    email: email,
    message: message
  };

  // Converte o objeto JavaScript em uma string JSON
  var jsonData = JSON.stringify(formData);

  // Exibe o JSON no console
  console.log(jsonData);

});