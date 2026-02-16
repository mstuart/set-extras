/**
Create a new Set containing all elements from both sets.

@param setA - The first set.
@param setB - The second set.
@returns A new Set with the union of both sets.

@example
```
import {union} from 'set-extras';

union(new Set([1, 2]), new Set([2, 3]));
//=> Set {1, 2, 3}
```
*/
export function union<T>(setA: Set<T>, setB: Set<T>): Set<T>;

/**
Create a new Set containing elements present in both sets.

@param setA - The first set.
@param setB - The second set.
@returns A new Set with the intersection of both sets.

@example
```
import {intersection} from 'set-extras';

intersection(new Set([1, 2, 3]), new Set([2, 3, 4]));
//=> Set {2, 3}
```
*/
export function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T>;

/**
Create a new Set containing elements in setA but not in setB.

@param setA - The first set.
@param setB - The second set.
@returns A new Set with the difference.

@example
```
import {difference} from 'set-extras';

difference(new Set([1, 2, 3]), new Set([2, 3, 4]));
//=> Set {1}
```
*/
export function difference<T>(setA: Set<T>, setB: Set<T>): Set<T>;

/**
Create a new Set containing elements in either set but not both.

@param setA - The first set.
@param setB - The second set.
@returns A new Set with the symmetric difference.

@example
```
import {symmetricDifference} from 'set-extras';

symmetricDifference(new Set([1, 2, 3]), new Set([2, 3, 4]));
//=> Set {1, 4}
```
*/
export function symmetricDifference<T>(setA: Set<T>, setB: Set<T>): Set<T>;

/**
Check if all elements of setA are in setB.

@param setA - The set to check.
@param setB - The set to check against.
@returns `true` if setA is a subset of setB.

@example
```
import {isSubset} from 'set-extras';

isSubset(new Set([1, 2]), new Set([1, 2, 3]));
//=> true
```
*/
export function isSubset<T>(setA: Set<T>, setB: Set<T>): boolean;

/**
Check if all elements of setB are in setA.

@param setA - The set to check.
@param setB - The set to check against.
@returns `true` if setA is a superset of setB.

@example
```
import {isSuperset} from 'set-extras';

isSuperset(new Set([1, 2, 3]), new Set([1, 2]));
//=> true
```
*/
export function isSuperset<T>(setA: Set<T>, setB: Set<T>): boolean;
