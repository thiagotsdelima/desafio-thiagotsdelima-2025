export default function VerificaSequenciaDeBrinquedos(
  brinquedos,
  listaFavoritos
) {
  let indiceFavorito = 0

  for (const brinquedo of brinquedos) {
    if (brinquedo === listaFavoritos[indiceFavorito]) {
      indiceFavorito++
    }
    if (indiceFavorito === listaFavoritos.length) {
      return true
    }
  }
  return false
}
