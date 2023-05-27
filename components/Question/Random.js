const Random = (minValue, maxValue) => {
  const val = Math.floor(Math.random() * (maxValue - minValue) + minValue);
  return val;
};

export default Random;
