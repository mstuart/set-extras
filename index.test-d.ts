import { expectError, expectType } from "tsd";
import {
  difference,
  intersection,
  isSubset,
  isSuperset,
  symmetricDifference,
  union,
} from "./index.js";

declare const readonlySet: ReadonlySet<number>;
expectType<Set<number>>(union(readonlySet, readonlySet));

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

expectType<Set<number>>(union(setA, setB));
expectType<Set<number>>(intersection(setA, setB));
expectType<Set<number>>(difference(setA, setB));
expectType<Set<number>>(symmetricDifference(setA, setB));
expectType<boolean>(isSubset(setA, setB));
expectType<boolean>(isSuperset(setA, setB));

expectError(union(setA, "not a set"));
expectError(intersection(setA, "not a set"));

expectType<Set<string | number>>(union(new Set([1]), new Set(["a"])));
expectType<Set<string | number>>(
  symmetricDifference(new Set([1]), new Set(["a"]))
);
expectType<Set<never>>(intersection(new Set([1]), new Set(["a"])));
expectType<Set<number>>(difference(new Set([1]), new Set(["a"])));
expectType<boolean>(isSubset(new Set([1]), new Set(["a"])));
expectType<boolean>(isSuperset(new Set([1]), new Set(["a"])));
