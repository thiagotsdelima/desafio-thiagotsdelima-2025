export default function VerificarQualPessoa(pessoaUm, pessoaDois, animal) {
  if (pessoaUm && pessoaDois) {
    return `${animal} - abrigo`
  } else if (pessoaUm) {
    return `${animal} - pessoa 1`
  } else if (pessoaDois) {
    return `${animal} - pessoa 2`
  } else {
    return `${animal} - abrigo`
  }
}
