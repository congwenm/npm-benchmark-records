import surgeonkit from 'surgeonkit'
import heap_sort from '../../algorithms/heap_sort';
const { expand } = surgeonkit
import { descendingVerifier } from '../order_verifier';

describe('#heapsort', function() {
  it('should extract out items in sorted order', function() {
    expect(heap_sort([
      7,6,5,4,3,2,1,8,9
    ])).toEqual([9,8,7,6,5,4,3,2,1])
  })

  it('should sort out 20 items in order', function() {
    expect(descendingVerifier(
      heap_sort(
        expand(20).map(n => (Math.random() * 20) | 0)
      )
    )).toBe(true)
  })

  it('should sort out 100 items in order', function() {
    expect(descendingVerifier(
      heap_sort(
        expand(100).map(n => (Math.random() * 100) | 0)
      )
    )).toBe(true)
  })
})