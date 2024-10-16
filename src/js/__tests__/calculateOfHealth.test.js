import calculateOfHealth from '../calculateOfHealth';

const arr = [
  [{name: 'Маг', health: 90, message: 'healthy'}],
  [{name: 'Shark', health: 23, message: 'wounded'}],
  [{name: 'Viki', health: 11, message: 'critical'}],
]

test.each(arr)('show health check', (obj) => {
  const result = calculateOfHealth(obj);
  expect(result).toBe(obj.message)
})