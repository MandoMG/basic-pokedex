export default class TextFormatter {
  static capitalizeText(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  static padPokemonNumber(pokemonNumber: number, length: number = 3) {
    let paddedNumber = `${pokemonNumber}`;
    while (paddedNumber.length < length) {
      paddedNumber = `0${paddedNumber}`;
    }

    return paddedNumber;
  }
}