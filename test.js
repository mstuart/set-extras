import test from 'ava';
import {
	union,
	intersection,
	difference,
	symmetricDifference,
	isSubset,
	isSuperset,
} from './index.js';

// --- union ---

test('union combines two sets', t => {
	const result = union(new Set([1, 2]), new Set([3, 4]));
	t.deepEqual([...result].sort(), [1, 2, 3, 4]);
});

test('union removes duplicates', t => {
	const result = union(new Set([1, 2, 3]), new Set([2, 3, 4]));
	t.deepEqual([...result].sort(), [1, 2, 3, 4]);
});

test('union with empty sets', t => {
	t.is(union(new Set(), new Set()).size, 0);
	t.deepEqual([...union(new Set([1]), new Set())], [1]);
	t.deepEqual([...union(new Set(), new Set([1]))], [1]);
});

test('union with identical sets', t => {
	const result = union(new Set([1, 2, 3]), new Set([1, 2, 3]));
	t.deepEqual([...result].sort(), [1, 2, 3]);
});

test('union returns a new Set', t => {
	const a = new Set([1]);
	const result = union(a, new Set([2]));
	t.true(result instanceof Set);
	t.not(result, a);
});

// --- intersection ---

test('intersection finds common elements', t => {
	const result = intersection(new Set([1, 2, 3]), new Set([2, 3, 4]));
	t.deepEqual([...result].sort(), [2, 3]);
});

test('intersection with disjoint sets', t => {
	const result = intersection(new Set([1, 2]), new Set([3, 4]));
	t.is(result.size, 0);
});

test('intersection with identical sets', t => {
	const result = intersection(new Set([1, 2, 3]), new Set([1, 2, 3]));
	t.deepEqual([...result].sort(), [1, 2, 3]);
});

test('intersection with empty set', t => {
	t.is(intersection(new Set(), new Set([1, 2])).size, 0);
	t.is(intersection(new Set([1, 2]), new Set()).size, 0);
});

test('intersection returns a new Set', t => {
	const a = new Set([1, 2]);
	const result = intersection(a, new Set([1]));
	t.true(result instanceof Set);
	t.not(result, a);
});

// --- difference ---

test('difference removes elements in second set', t => {
	const result = difference(new Set([1, 2, 3]), new Set([2, 3, 4]));
	t.deepEqual([...result], [1]);
});

test('difference with disjoint sets', t => {
	const result = difference(new Set([1, 2]), new Set([3, 4]));
	t.deepEqual([...result].sort(), [1, 2]);
});

test('difference with identical sets', t => {
	const result = difference(new Set([1, 2, 3]), new Set([1, 2, 3]));
	t.is(result.size, 0);
});

test('difference with empty first set', t => {
	const result = difference(new Set(), new Set([1, 2]));
	t.is(result.size, 0);
});

test('difference with empty second set', t => {
	const result = difference(new Set([1, 2]), new Set());
	t.deepEqual([...result].sort(), [1, 2]);
});

test('difference returns a new Set', t => {
	const a = new Set([1, 2]);
	const result = difference(a, new Set([2]));
	t.true(result instanceof Set);
	t.not(result, a);
});

// --- symmetricDifference ---

test('symmetricDifference finds elements in either but not both', t => {
	const result = symmetricDifference(new Set([1, 2, 3]), new Set([2, 3, 4]));
	t.deepEqual([...result].sort(), [1, 4]);
});

test('symmetricDifference with disjoint sets', t => {
	const result = symmetricDifference(new Set([1, 2]), new Set([3, 4]));
	t.deepEqual([...result].sort(), [1, 2, 3, 4]);
});

test('symmetricDifference with identical sets', t => {
	const result = symmetricDifference(new Set([1, 2, 3]), new Set([1, 2, 3]));
	t.is(result.size, 0);
});

test('symmetricDifference with empty sets', t => {
	t.is(symmetricDifference(new Set(), new Set()).size, 0);
	t.deepEqual([...symmetricDifference(new Set([1]), new Set())], [1]);
	t.deepEqual([...symmetricDifference(new Set(), new Set([1]))], [1]);
});

test('symmetricDifference returns a new Set', t => {
	const a = new Set([1, 2]);
	const result = symmetricDifference(a, new Set([2, 3]));
	t.true(result instanceof Set);
	t.not(result, a);
});

// --- isSubset ---

test('isSubset returns true when A is subset of B', t => {
	t.true(isSubset(new Set([1, 2]), new Set([1, 2, 3])));
});

test('isSubset returns false when A is not subset of B', t => {
	t.false(isSubset(new Set([1, 2, 4]), new Set([1, 2, 3])));
});

test('isSubset with identical sets', t => {
	t.true(isSubset(new Set([1, 2, 3]), new Set([1, 2, 3])));
});

test('isSubset with empty set is always true', t => {
	t.true(isSubset(new Set(), new Set([1, 2, 3])));
	t.true(isSubset(new Set(), new Set()));
});

test('isSubset with disjoint sets', t => {
	t.false(isSubset(new Set([1, 2]), new Set([3, 4])));
});

// --- isSuperset ---

test('isSuperset returns true when A is superset of B', t => {
	t.true(isSuperset(new Set([1, 2, 3]), new Set([1, 2])));
});

test('isSuperset returns false when A is not superset of B', t => {
	t.false(isSuperset(new Set([1, 2]), new Set([1, 2, 3])));
});

test('isSuperset with identical sets', t => {
	t.true(isSuperset(new Set([1, 2, 3]), new Set([1, 2, 3])));
});

test('isSuperset with empty second set is always true', t => {
	t.true(isSuperset(new Set([1, 2, 3]), new Set()));
	t.true(isSuperset(new Set(), new Set()));
});

test('isSuperset with disjoint sets', t => {
	t.false(isSuperset(new Set([1, 2]), new Set([3, 4])));
});

// --- return types ---

test('set-returning functions return Set instances', t => {
	t.true(union(new Set(), new Set()) instanceof Set);
	t.true(intersection(new Set(), new Set()) instanceof Set);
	t.true(difference(new Set(), new Set()) instanceof Set);
	t.true(symmetricDifference(new Set(), new Set()) instanceof Set);
});

// --- string values ---

test('operations work with strings', t => {
	const a = new Set(['apple', 'banana']);
	const b = new Set(['banana', 'cherry']);
	t.deepEqual([...union(a, b)].sort(), ['apple', 'banana', 'cherry']);
	t.deepEqual([...intersection(a, b)], ['banana']);
	t.deepEqual([...difference(a, b)], ['apple']);
	t.deepEqual([...symmetricDifference(a, b)].sort(), ['apple', 'cherry']);
});
