import Random from "./Random";
const currency = ["pounds", "pence", "dollars", "cents"];

const GenerateCurrency = () => {
  const randomValue = Random(0, 3);
  return currency[randomValue];
};

export default GenerateCurrency;
