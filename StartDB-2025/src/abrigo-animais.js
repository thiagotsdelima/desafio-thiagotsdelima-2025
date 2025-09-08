class AbrigoAnimais {
  animaisDisponiveis = [
    'Rex',
    'Mimi',
    'Fofo',
    'Bola',
    'Zero',
    'Bola',
    'Bebe',
    'Loco'
  ]

  brinquedosValidos = ['RATO', 'NOVELO', 'BOLA', 'LASER', 'CAIXA', 'SKATE']

  animalBrinquedos = {
    Rex: ['RATO', 'BOLA'],
    Mimi: ['BOLA', 'LASER'],
    Fofo: ['BOLA', 'RATO', 'LASER'],
    Zero: ['RATO', 'BOLA'],
    Bola: ['CAIXA', 'NOVELO'],
    Bebe: ['LASER', 'RATO', 'BOLA'],
    Loco: ['SKATE', 'RATO']
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    if (typeof brinquedosPessoa1 === 'string')
      brinquedosPessoa1 = brinquedosPessoa1.split(',')
    if (typeof brinquedosPessoa2 === 'string')
      brinquedosPessoa2 = brinquedosPessoa2.split(',')

    const invalidoBrinquedo = (toys) =>
      toys.filter((b) => !this.brinquedosValidos.includes(b)).length > 0

    const brinquedoDuplicado = (toys) =>
      toys.filter((toy, i) => toys.indexOf(toy) !== i).length > 0

    if (
      invalidoBrinquedo(brinquedosPessoa1) ||
      invalidoBrinquedo(brinquedosPessoa2) ||
      brinquedoDuplicado(brinquedosPessoa1) ||
      brinquedoDuplicado(brinquedosPessoa2)
    ) {
      return { erro: 'Brinquedo inválido', lista: null }
    }

    const animaisOrdem = ordemAnimais.split(',')

    const animalDuplicado = animaisOrdem.reduce((acc, animal, i, arr) => {
      if (arr.indexOf(animal) !== i) acc = true
      return acc
    }, false)

    const animaisValidos =
      !animaisOrdem.filter(
        (animal) => !this.animaisDisponiveis.includes(animal)
      ).length > 0

    if (!animaisValidos || animalDuplicado) {
      return { erro: 'Animal inválido', lista: null }
    }

    const resultado = []
    const animaisOrdenados = [...animaisOrdem].sort()

    for (const animal of animaisOrdenados) {
      const brinquedosDesejados = this.animalBrinquedos[animal]

      const pessoa1Atende = this.validaOrdem(
        brinquedosPessoa1,
        brinquedosDesejados
      )

      const pessoa2Atende = this.validaOrdem(
        brinquedosPessoa2,
        brinquedosDesejados
      )

      if (pessoa1Atende && pessoa2Atende) {
        resultado.push(`${animal} - abrigo`)
      } else if (pessoa1Atende) {
        resultado.push(`${animal} - pessoa 1`)
      } else if (pessoa2Atende) {
        resultado.push(`${animal} - pessoa 2`)
      } else {
        resultado.push(`${animal} - abrigo`)
      }
    }

    return { erro: null, lista: resultado }
  }

  validaOrdem(brinquedos, favoritos) {
    let idx = 0

    for (const b of brinquedos) {
      if (b === favoritos[idx]) idx++
      if (idx === favoritos.length) return true
    }
    return false
  }
}

export { AbrigoAnimais as AbrigoAnimais }
