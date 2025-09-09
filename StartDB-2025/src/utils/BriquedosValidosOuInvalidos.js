export default function BriquedosValidosOuInvalidos(
  brinquedosPessoa1,
  brinquedosPessoa2,
  brinquedos
) {
  if (typeof brinquedosPessoa1 === 'string')
    brinquedosPessoa1 = brinquedosPessoa1.split(',')
  if (typeof brinquedosPessoa2 === 'string')
    brinquedosPessoa2 = brinquedosPessoa2.split(',')

  const invalidoBrinquedo = (briquedo) =>
    briquedo.filter((b) => !brinquedos.includes(b)).length > 0

  const brinquedoDuplicado = (briquedo) =>
    briquedo.filter((b, i) => briquedo.indexOf(b) !== i).length > 0

  if (
    invalidoBrinquedo(brinquedosPessoa1) ||
    invalidoBrinquedo(brinquedosPessoa2) ||
    brinquedoDuplicado(brinquedosPessoa1) ||
    brinquedoDuplicado(brinquedosPessoa2)
  ) {
    return { erro: 'Brinquedo inválido', lista: null }
  }
  return { erro: null, brinquedosPessoa1, brinquedosPessoa2 }
}
