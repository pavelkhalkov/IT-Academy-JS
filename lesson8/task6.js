//6. Удалить из массива все повторяющиеся элементы

const array = [1, 2, 3, 1, '1', '2', '1', true, false, true, null, undefined, null, undefined];

const makeUniq = (array) => {
    const uniqSet = new Set(array);
    return [...uniqSet];
  }

  console.log(makeUniq(array));