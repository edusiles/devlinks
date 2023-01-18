function toggleMode() {
  // Criar objeto html
  const html = document.documentElement
  
  // Alterar entre os modos escuro e claro
  html.classList.toggle('light')

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute("alt", "Foto de Eduardo Siles, usando óculos, moletom cinza e boné, preto, para trás")
  } else {
    img.setAttribute('src', './assets/avatar-dark.png')
    img.setAttribute('alt', 'Foto de Eduardo Siles, usando óculos e camiseta azul')
  }
}