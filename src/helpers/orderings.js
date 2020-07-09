
function orderedAlphabetical(array, field) {
  const order = (array || []).sort((mpoA, mpoB) => {
    if (mpoA[field] < mpoB[field]) return -1;
    if (mpoA[field] > mpoB[field]) return 1;
    return 0;
  });
  return order;
}
export default orderedAlphabetical;
