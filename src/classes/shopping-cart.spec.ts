import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

// Criando o objeto sut para execurção dos testes
const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};


// Mock da classe Discount
const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

// Mock da classe CartItem para poder adicionar item ao carrinho
const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

// Factore para adicionar ao carrinho e para evitar a duplicação de código
const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Camiseta', 40);
  const cartItem2 = createCartItem('Caneta', 1);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('Mostrar o carrinho vazio quando não tem nenhum item adicionado', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('Mostrar dois itens no carrinho', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('Mostrar teste total com desconto', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(41);
    expect(sut.totalWithDicount()).toBe(41);
  });

  it('Mostrar os produtos e limpar', () => {
    //objeto destructor
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('Mostrar a remoção dos produtos', () => {
    //objeto destructor
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('Mostrando a chamada discount.calculate uma vez totalWithDiscount é chamado', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Mostrando a chamada discount.calculate com o preço total quando totalWithDiscount é chamado', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
