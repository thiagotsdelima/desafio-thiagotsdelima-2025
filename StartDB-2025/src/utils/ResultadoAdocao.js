import VerificaSequenciaDeBrinquedos from './VerificaSequenciaDeBrinquedos'
import VerificarQualPessoa from './VerificarQualPessoa'

export default function ResultadoAdocao(
  animaisOrdenados,
  brinquedosPessoa1,
  brinquedosPessoa2,
  animalBrinquedos
) {
  const resultado = []
  for (const animal of animaisOrdenados) {
    const brinquedosDesejados = animalBrinquedos[animal] || []

    const pessoaUm = VerificaSequenciaDeBrinquedos(
      brinquedosPessoa1,
      brinquedosDesejados
    )
    const pessoaDois = VerificaSequenciaDeBrinquedos(
      brinquedosPessoa2,
      brinquedosDesejados
    )

    const animalAdotado = VerificarQualPessoa(pessoaUm, pessoaDois, animal)
    resultado.push(animalAdotado)
  }
  return resultado
}
