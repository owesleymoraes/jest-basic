import { Product } from './product';

// instanciando o objeto, Esse objeto é criado com parâmentros.
const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  // Limpando os mocks
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('Camiseta', 49.9);
    // conferindo a integridade dos parâmentros
    expect(sut).toHaveProperty('name', 'Camiseta');
    // valores de pontos flutuantes recomendado o uso toBecloseTo
    expect(sut.price).toBeCloseTo(49.9);
  });
});
