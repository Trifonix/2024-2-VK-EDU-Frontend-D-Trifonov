import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
})

test('Возвращает пустую строку для пустого ввода', () => {
  expect(correctSentence('')).toBe('');
  expect(correctSentence('   ')).toBe('');
});

test('Корректно обрабатывает строку из одного символа', () => {
  expect(correctSentence('a')).toBe('A.');
  expect(correctSentence('A')).toBe('A.');
});

test('Возвращает пустую строку для некорректных типов данных', () => {
  expect(correctSentence(123)).toBe('');
  expect(correctSentence(null)).toBe('');
  expect(correctSentence(undefined)).toBe('');
  expect(correctSentence([])).toBe('');
  expect(correctSentence({})).toBe('');
});
