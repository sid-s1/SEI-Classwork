const { triangleType, rightAngled } = require('./warmup');

// all to pass
test('returns triangle type', () => {
    expect(triangleType(5, 5, 8))
        .toBe('isosceles triangle')
});

test('returns triangle type', () => {
    expect(triangleType(5, 5, 5))
        .toBe('equilateral triangle')
});

test('returns right-triangle type', () => {
    expect(rightAngled(3, 5, 4))
        .toBe('right angled')
});

test('returns right-triangle type', () => {
    expect(rightAngled(3, 5, 2))
        .toBe('left angled')
});

// all to fail
test('returns triangle type', () => {
    expect(triangleType(1, 2, 2000))
        .toBe('what is that... not a triangle is what')
});

test('returns triangle type', () => {
    expect(triangleType(75, 80, 2))
        .toBe('what is that... not a triangle is what')
});

test('returns triangle type', () => {
    expect(triangleType(5, 5, 5))
        .toBe('samesies triangle')
});

test('returns triangle type', () => {
    expect(triangleType(5, 5, 8))
        .toBe('twinsies triangle')
});
