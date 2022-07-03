function login() {
  var user = prompt('Insira um login')
  var senha = prompt('agora insira uma senha')
}

if (onclick(login())) {
  if (
    document.getElementById('login') === login(user) &&
    document.getElementById('password') === login(senha)
  ) {
    alert('você entrou')
  } else {
    alert('Login ou senha incorreto')
  }
} else {
  var usuario = prompt('Insira um login')
  var password = prompt('Agora insira uma senha')

  if (
    document.getElementById('login') === usuario &&
    document.getElementById('password') === password
  ) {
    alert('você entrou')
  } else {
    alert('Login ou senha incorreto')
  }
}
