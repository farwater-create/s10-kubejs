let jeiRemovals = [
  "tfmg:quad_potato_cannon",
  "create:potato_cannon",
  "cataclysm:ignitium_elytra_chestplate",
  "apotheosis:potion_charm",
];

let jeiDyeDepotItems = ["present", "trapped_present", "candle_holder", "flag"];

let jeiCreatedecoItems = ["shipping_container", "placard"];

let jeiNumismaticsItems = ["card", "id_card"];

let jeiRailwaysItems = ["conductor_cap", "incomplete_conductor_cap"];

let jeiCreateItems = ["seat", "toolbox", "valve_handle"];

let jeiReliquaryItems = ["pedestals", "passive_pedestals"];

let jeiColors = [
  "maroon",
  "rose",
  "coral",
  "indigo",
  "navy",
  "slate",
  "olive",
  "amber",
  "beige",
  "teal",
  "mint",
  "aqua",
  "verdant",
  "forest",
  "ginger",
  "tan",
];

jeiColors.forEach((color) => {
  jeiDyeDepotItems.forEach((item) => {
    jeiRemovals.push(`supplementaries:${item}_${color}`);
  });

  jeiCreatedecoItems.forEach((item) => {
    jeiRemovals.push(`createdeco:${color}_${item}`);
  });

  jeiNumismaticsItems.forEach((item) => {
    jeiRemovals.push(`numismatics:${color}_${item}`);
  });

  jeiRailwaysItems.forEach((item) => {
    jeiRemovals.push(`railways:${color}_${item}`);
  });

  jeiCreateItems.forEach((item) => {
    jeiRemovals.push(`create:${color}_${item}`);
  });

  jeiReliquaryItems.forEach((item) => {
    jeiRemovals.push(`reliquary:pedestals/${color}_pedestal`);
    jeiRemovals.push(`reliquary:pedestals/passive/${color}_passive_pedestal`);
  });
});

JEIEvents.hideItems((e) => {
  jeiRemovals.forEach((recipe) => e.hide(recipe));
});
