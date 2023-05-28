import Random from "./Random";

const GenerateItems = (UOMvalue, itemList) => {
  const firstItemChosenIndex = Random(0, itemList.length - 1);

  const firstItem = itemList[firstItemChosenIndex];
  let secondItemChosenIdx = Random(0, itemList.length - 1);
  let secondItemChosenIndex;
  if (firstItemChosenIndex === secondItemChosenIdx) {
    secondItemChosenIndex =
      firstItemChosenIndex - 1 >= 0 ? firstItemChosenIndex - 1 : 0;
    secondItemChosenIndex =
      firstItemChosenIndex + 1 <= itemList.length - 1
        ? firstItemChosenIndex + 1
        : 0;
  } else secondItemChosenIndex = secondItemChosenIdx;
  const secondItem = itemList[secondItemChosenIndex];

  return [firstItem, secondItem];
};

export default GenerateItems;
