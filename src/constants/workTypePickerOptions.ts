import { TranslationKeys } from "@/i18n/translationKeys";

const workTypePickerOptions = [
  { label: TranslationKeys.workTypeOptions.joiner, value: "Joiner" },
  { label: TranslationKeys.workTypeOptions.blacksmith, value: "Blacksmith" },
  { label: TranslationKeys.workTypeOptions.painter, value: "Painter" },
  { label: TranslationKeys.workTypeOptions.tileWorker, value: "Tile Worker" },
  {
    label: TranslationKeys.workTypeOptions.heavyTruckDriver,
    value: "Heavy Truck Driver",
  },
];

export default workTypePickerOptions;
