describe('Valores primitivos', () => {

  it('Validando o número', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10); // usado comparativos de objetos.
  });
});

describe('Objects', () => {
  it('Testes em objetos', () => {
    const person = { name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 30);

    expect(person.name).toBe('Luiz');
  });
});
