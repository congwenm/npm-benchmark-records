import plainSort from '../../src/sorting/plain_sort';

var scrambledNumbers = [4,1,2,3,5];
describe('#plainSort', () => {
  it ('should sort numbers', () => {
    expect(plainSort(scrambledNumbers)).toEqual([1,2,3,4,5])
  })

  it('should sort 100 numbers', () => {
    expect(ascendingVerifier(
      plainSort(
        expand(20).map(n => (Math.random() * 100) | 0)
      )
    )).toBe(true)
  })

  xit('should sort 1,000 numbers', () => {
    expect(ascendingVerifier(
      plainSort(
        expand(1000).map(n => (Math.random() * 1000) | 0)
      )
    )).toBe(true)
  })

  it('should sort objects based on key', () => {
    // copy out of the other one
  })
})