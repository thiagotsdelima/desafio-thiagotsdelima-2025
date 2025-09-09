import BriquedosValidosOuInvalidos from './utils/BriquedosValidosOuInvalidos'
import ResultadoAdocao from './utils/ResultadoAdocao'

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
    const validacao = BriquedosValidosOuInvalidos(
      brinquedosPessoa1,
      brinquedosPessoa2,
      this.brinquedosValidos
    )

    if (validacao.erro) return validacao

    brinquedosPessoa1 = validacao.brinquedosPessoa1
    brinquedosPessoa2 = validacao.brinquedosPessoa2

    const animaisOrdem = ordemAnimais.split(',')

    const naoTiverAnimalDuplicado = animaisOrdem.find(
      (item, i, arr) => arr.indexOf(item) !== i
    )

    const semAnimaisInvalidos =
      !animaisOrdem.filter(
        (animal) => !this.animaisDisponiveis.includes(animal)
      ).length > 0

    if (!semAnimaisInvalidos || naoTiverAnimalDuplicado) {
      return { erro: 'Animal inválido', lista: null }
    }

    const animaisOrdenados = [...animaisOrdem].sort()

    const resultado = ResultadoAdocao(
      animaisOrdenados,
      brinquedosPessoa1,
      brinquedosPessoa2,
      this.animalBrinquedos
    )

    return { erro: null, lista: resultado }
  }
}

export { AbrigoAnimais as AbrigoAnimais }
