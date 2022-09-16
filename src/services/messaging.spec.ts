import { Messaging } from './messaging';

// evita a instanciação do objeto.
const createSut = () => {
  return new Messaging();
};

// Limpando os mocks, para evitar falhas em testes que podem se repetir.
describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Retorno Indefinido', () => {
    // System under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('Mostrando mensagem do objeto "Mensagem enviada:" e msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });

  it('Mostrando console.log uma vez', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
