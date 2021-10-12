const convertidorArabigoRomano = (n = "") => {
  switch (n) {
    case 1:
      return "I"
    case 2:
      return "II"
    case 3:
      return "III"
    default:
      return n
  }
}
module.exports = { convertidorArabigoRomano }