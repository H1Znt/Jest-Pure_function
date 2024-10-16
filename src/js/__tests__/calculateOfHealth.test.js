import calculateOfHealth from '../calculateOfHealth';

const arr = [
  {name: 'Маг', health: 90, message: 'healthy'},
  {name: 'Shark', health: 23, message: 'wounded'},
  {name: 'Viki', health: 11, message: 'critical'},
]

test('show health check', () => {
  const result = calculateOfHealth(arr[0]);
  expect(result).toBe(arr[0].message);
})
test('show health check', () => {
  const result = calculateOfHealth(arr[1]);
  expect(result).toBe(arr[1].message);
})
test('show health check', () => {
  const result = calculateOfHealth(arr[2]);
  expect(result).toBe(arr[2].message);
})