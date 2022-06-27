//var user = prompt('Insira um login')
//var senha = prompt('agora insira uma senha')

function login() {
  var user = prompt('Insira um login')
  var senha = prompt('agora insira uma senha')
}

function se() {
  if (document.getElementById('login') == user && document.getElementById('password') == senha) {
    alert('Login ou senha incorreto')
  } else {
    alert('você entrou')
  }
}