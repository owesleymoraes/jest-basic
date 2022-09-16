import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,lastName: string,cpf: string,): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string, ): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('Mostrar se tem o firstName, lastName e cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');

    //checando cada parâmetro passado para o construtor.
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Otávio');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('Mostrar a ação do método getName e getIDN IndividualCustomer', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');
    expect(sut.getName()).toBe('Luiz Otávio');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('Mostrar  name e cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('Mostrar a ação do método getName e getIDN da EnterpriseCustomers', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});
