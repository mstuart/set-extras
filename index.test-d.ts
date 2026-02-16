import {expectType, expectError} from 'tsd';
import {
	union,
	intersection,
	difference,
	symmetricDifference,
	isSubset,
	isSuperset,
} from './index.js';

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

expectType<Set<number>>(union(setA, setB));
expectType<Set<number>>(intersection(setA, setB));
expectType<Set<number>>(difference(setA, setB));
expectType<Set<number>>(symmetricDifference(setA, setB));
expectType<boolean>(isSubset(setA, setB));
expectType<boolean>(isSuperset(setA, setB));

expectError(union(setA, 'not a set'));
expectError(intersection(setA, 'not a set'));
