let jeiRemovals = [
  "tfmg:quad_potato_cannon",
  "create:potato_cannon",
  "cataclysm:ignitium_elytra_chestplate",
  "apotheosis:potion_charm",
  "dimensionalpocketsii:dimensional_elytraplate",
  "dimensionalpocketsii:dimensional_boots_enhanced",
  "dimensionalpocketsii:dimensional_leggings_enhanced",
  "dimensionalpocketsii:dimensional_chestplate_enhanced",
  "dimensionalpocketsii:dimensional_helmet_enhanced",
  "dimensionalpocketsii:dimensional_shield_enhanced",
  "dimensionalpocketsii:dimensional_trident_enhanced",
  "dimensionalpocketsii:dimensional_sword_enhanced",
  "dimensionalpocketsii:dimensional_hoe_enhanced",
  "dimensionalpocketsii:dimensional_shovel_enhanced",
  "dimensionalpocketsii:dimensional_axe_enhanced",
  "dimensionalpocketsii:dimensional_pickaxe_enhanced",
  "dimensionalpocketsii:dimensional_sword_enhanced",
  "dimensionalpocketsii:dimensional_boots",
  "dimensionalpocketsii:dimensional_leggings",
  "dimensionalpocketsii:dimensional_chestplate",
  "dimensionalpocketsii:dimensional_helmet",
  "dimensionalpocketsii:dimensional_shield",
  "dimensionalpocketsii:dimensional_trident",
  "dimensionalpocketsii:dimensional_sword",
  "dimensionalpocketsii:dimensional_hoe",
  "dimensionalpocketsii:dimensional_shovel",
  "dimensionalpocketsii:dimensional_axe",
  "dimensionalpocketsii:dimensional_pickaxe",
  "dimensionalpocketsii:dimensional_sword",
  "dimensionalpocketsii:block_dimensional_ore",
  "dimensionalpocketsii:block_deepslate_dimensional_ore",
  "dimensionalpocketsii:block_dimensional_ore_nether",
  "dimensionalpocketsii:block_dimensional_ore_end",
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
