// Função para fazer uma requisição HTTP
function fazerRequisicao(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
  
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        callback(null, data);
      } else {
        callback('Erro na requisição. Status: ' + request.status, null);
      }
    };
  
    request.onerror = function() {
      callback('Erro de conexão', null);
    };
  
    request.send();
  }
  
  // Função para buscar os dados da API e exibi-los na página
  function buscarDados() {
    var apiUrl = 'https://api.exemplo.com/dados'; // Substitua pela URL da API real
    var dadosDiv = document.getElementById('dados');
  
    fazerRequisicao(apiUrl, function(error, data) {
      if (error) {
        dadosDiv.innerText = 'Erro: ' + error;
      } else {
        dadosDiv.innerText = 'Dados recebidos: ' + JSON.stringify(data);
      }
    });
  }
  
