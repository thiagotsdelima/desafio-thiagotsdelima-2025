class AbrigoAnimais {
  avaliableAnimals = [
    'Rex',
    'Mimi',
    'Fofo',
    'Bola',
    'Zero',
    'Bola',
    'Bebe',
    'Loco'
  ]

  validToy = ['RATO', 'NOVELO', 'BOLA', 'LASER', 'CAIXA', 'SKATE']

  animalType = {
    Rex: 'cao',
    Mimi: 'gato',
    Fofo: 'gato',
    Zero: 'gato',
    Bola: 'cao',
    Bebe: 'cao',
    Loco: 'jabuti'
  }

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

    const todosBrinquedos = new Set(this.validToy)
    const hasDuplicateToys = (toys) => new Set(toys).size !== toys.length

    if (
      brinquedosPessoa1.some((b) => !todosBrinquedos.has(b)) ||
      brinquedosPessoa2.some((b) => !todosBrinquedos.has(b)) ||
      hasDuplicateToys(brinquedosPessoa1) ||
      hasDuplicateToys(brinquedosPessoa2)
    ) {
      return { erro: 'Brinquedo inválido', lista: null }
    }

    const animaisOrdem = ordemAnimais.split(',')
    const animaisUnicos = new Set(animaisOrdem)

    const animaisValidos = animaisOrdem.every((animal) =>
      this.avaliableAnimals.includes(animal)
    )

    if (!animaisValidos || animaisOrdem.length !== animaisUnicos.size) {
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
