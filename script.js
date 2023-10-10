function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pega a tag img.
  const img = document.querySelector("#profile img")
  // substitui a imagem.
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light.
    img.setAttribute('src', "./assets/assets/avatar-light.png")
  } else {
    // se tiver sem o light mode, manter a imagem normal.
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
