import { Persistency } from './persistency';

describe('Persistency', () => {

  // Limpando os mocks depois de cada teste. Para evitar problemas ao testar métodos 
  // com execursão única.
  afterEach(() => jest.clearAllMocks());

  it('Monstrando o retorno do método', () => {
    // System under test - sut - boas práticas 
    // instanciando a classe.
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Chamando o objeto pelo menos uma vez', () => {
    const sut = new Persistency();
    // Jest posssui um espião - spyOn para monitorar o objeto (console) e seu método (log)
    const consoleSpy = jest.spyOn(console, 'log');
    // método precisa ser invocado.
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Mostrando o resultado esperado "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
