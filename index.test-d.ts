import {expectType, expectError} from 'tsd';
import {
	union,
	intersection,
	difference,
	symmetricDifference,
	isSubset,
	isSuperset,
} from './index.js';

const firstSet = new Set([1, 2, 3]);
const secondSet = new Set([2, 3, 4]);

expectType<Set<number>>(union(firstSet, secondSet));
expectType<Set<number>>(intersection(firstSet, secondSet));
expectType<Set<number>>(difference(firstSet, secondSet));
expectType<Set<number>>(symmetricDifference(firstSet, secondSet));
expectType<boolean>(isSubset(firstSet, secondSet));
expectType<boolean>(isSuperset(firstSet, secondSet));

expectError(union(firstSet, 'not a set'));
expectError(intersection(firstSet, 'not a set'));
