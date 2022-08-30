const mostCommonWord = require('./example');

test('returns most common word from array', () => {
    const result = mostCommonWord(['loda', 'lund', 'loda']);
    expect(result)
        .toBe('loda')
});

test('returns most common word from array where words are of same frequency', () => {
    const result = mostCommonWord(['loda', 'lund']);
    expect(result)
        .toBe('loda')
});