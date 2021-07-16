export default class TextFormatter {
  static capitalizeText(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}