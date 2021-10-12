const { convertidorArabigoRomano } = require("./convertidorArabigoRomano");

describe('Pruebas en los metodos de numeros romanos', () => {
  test('Prueba en el convertidor del numero 1', () => {
    const convertidorArabigoRomanoExpect = convertidorArabigoRomano(1)
    expect(convertidorArabigoRomanoExpect).toEqual("I")
  });

  test('Prueba en el convertidor del numero 2', () => {
    const convertidorArabigoRomanoExpect = convertidorArabigoRomano(2)
    expect(convertidorArabigoRomanoExpect).toEqual("II")
  });

  test('Prueba en el convertidor del numero 3', () => {
    const convertidorArabigoRomanoExpect = convertidorArabigoRomano(3)
    expect(convertidorArabigoRomanoExpect).toEqual("III")
  });
})
