export function union(setA, setB) {
	const result = new Set(setA);
	for (const item of setB) {
		result.add(item);
	}

	return result;
}

export function intersection(setA, setB) {
	const result = new Set();
	for (const item of setA) {
		if (setB.has(item)) {
			result.add(item);
		}
	}

	return result;
}

export function difference(setA, setB) {
	const result = new Set();
	for (const item of setA) {
		if (!setB.has(item)) {
			result.add(item);
		}
	}

	return result;
}

export function symmetricDifference(setA, setB) {
	const result = new Set();
	for (const item of setA) {
		if (!setB.has(item)) {
			result.add(item);
		}
	}

	for (const item of setB) {
		if (!setA.has(item)) {
			result.add(item);
		}
	}

	return result;
}

export function isSubset(setA, setB) {
	for (const item of setA) {
		if (!setB.has(item)) {
			return false;
		}
	}

	return true;
}

export function isSuperset(setA, setB) {
	for (const item of setB) {
		if (!setA.has(item)) {
			return false;
		}
	}

	return true;
}
