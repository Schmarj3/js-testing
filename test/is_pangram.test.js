const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeTruthy();
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwxyz";

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeTruthy();
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwyz";

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeFalsy();
  });

  test('empty sentence', () => {
    // Arrange
    const text = '';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeFalsy();

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeTruthy();

  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwyz49202';
    
    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeFalsy();

  });

  // Write your own test case
  test('pangram with mixed case letters', () => {
    // Arrange
    const valid_chars = "abcdefghijklmnopqrstuvwxyz"
    const text = 'Pack my box with five dozen liquor jugs';
    
    // Act
    const result = isPangram(text);

    // Assert
    for (let char of text) {
      expect(valid_chars.includes(char)).toBeTruthy();
    }
    expect(result).toBeTruthy();

  });
});
