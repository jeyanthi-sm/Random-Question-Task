import Random from "./Random";
const UOM = ["kgs", "litres", "pounds", "pints", "numbers"];
const itemList = {
  kgs: ["Rice", "Brown Rice", "Banana", "Carrots", "Potatoes", "Courgette"],
  litres: ["Olive Oil", "Sunflower Oil", "Rapeseed Oil", "Hemp Oil"],
  pounds: ["Onions", "Beetroot", "Beans"],
  pints: ["skimmed milk", "whole milk", "semi-skimmed milk"],
  numbers: ["Eggplant", "Cucumber", "garlic"],
};
const GenerateUOM = () => {
  const randomValue = Random(0, 5);
  return [UOM[randomValue], itemList[UOM[randomValue]]];
};

export default GenerateUOM;
