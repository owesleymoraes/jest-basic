import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

// instanciação de classes filhas de um objeto abstrato
const createSut = (classChild: new () => Discount): Discount => {
  return new classChild();
};

// Limpando os mocks para evitar erros em testes que se repetem.
describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  // class : NoDiscount
  it('Mostrar o resultado passado sem desconto', () => {
    const sut = createSut(NoDiscount);
    // tobeclose usado para comparação com pontos flutuantes por aproximação
    // toBe quando se quer valores mais precisos.
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('Mostrar 50% de desconto no preço', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('Mostrar 10% de desconto com o valor passado.', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
