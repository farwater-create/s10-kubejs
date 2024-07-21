const jeiRemovals = [
  "tfmg:quad_potato_cannon",
  "create:potato_cannon",
  "ae2:inscriber",
  "cataclysm:ignitium_elytra_chestplate",
];

const dyeDepotItems = ["present", "trapped_present", "candle_holder", "flag"];

const createdecoItems = ["shipping_container", "placard"];

const numismaticsItems = ["card", "id_card"];

const railwaysItems = ["conductor_cap", "incomplete_conductor_cap"];

const createItems = ["seat", "toolbox", "valve_handle"];

const reliquaryItems = ["pedestals", "passive_pedestals"];

const colors = [
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

colors.forEach((color) => {
  dyeDepotItems.forEach((item) => {
    jeiRemovals.push(`supplementaries:${item}_${color}`);
  });

  createdecoItems.forEach((item) => {
    jeiRemovals.push(`createdeco:${color}_${item}`);
  });

  numismaticsItems.forEach((item) => {
    jeiRemovals.push(`numismatics:${color}_${item}`);
  });

  railwaysItems.forEach((item) => {
    jeiRemovals.push(`railways:${color}_${item}`);
  });

  createItems.forEach((item) => {
    jeiRemovals.push(`create:${color}_${item}`);
  });

  reliquaryItems.forEach((item) => {
    jeiRemovals.push(`reliquary:pedestals/${color}_pedestal`);
    jeiRemovals.push(`reliquary:pedestals/passive/${color}_passive_pedestal`);
  });
});

JEIEvents.hideItems((e) => {
  jeiRemovals.forEach((recipe) => e.hide(recipe));
});
