const Test5 = () => {
  const bubbleSort = (arr: any) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };

  console.log("Bubble Sort :", bubbleSort([23, 12, 3, 6, 34, 203, 123, 2]));

  const selectionSort = (arr: any) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  };

  console.log(
    "Selection Sort :",
    selectionSort([23, 12, 3, 6, 34, 203, 123, 2])
  );

  const insertionSort = (arr: any) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  };

  console.log(
    "Insertion Sort :",
    insertionSort([23, 12, 3, 6, 34, 203, 123, 2])
  );

  return (
    <div>
      <h1>Sorting</h1>
    </div>
  );
};

export default Test5;
