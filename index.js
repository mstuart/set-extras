export function union(setA, setB) {
  const result = new Set(setA);
  for (const item of setB) {
    result.add(item);
  }

  return result;
}

export function intersection(setA, setB) {
  // Iterate the smaller set so the number of membership checks is
  // O(min(|setA|, |setB|)) instead of always O(|setA|). Intersection is
  // commutative, so the result is identical either way.
  const [smaller, larger] =
    setA.size <= setB.size ? [setA, setB] : [setB, setA];
  const result = new Set();
  for (const item of smaller) {
    if (larger.has(item)) {
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
  // A larger set can never be a subset of a smaller one — skip the scan.
  if (setA.size > setB.size) {
    return false;
  }

  for (const item of setA) {
    if (!setB.has(item)) {
      return false;
    }
  }

  return true;
}

export function isSuperset(setA, setB) {
  // A smaller set can never be a superset of a larger one — skip the scan.
  if (setA.size < setB.size) {
    return false;
  }

  for (const item of setB) {
    if (!setA.has(item)) {
      return false;
    }
  }

  return true;
}
