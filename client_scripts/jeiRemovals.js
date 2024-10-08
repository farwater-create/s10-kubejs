let jeiRemovals = [
  "tfmg:quad_potato_cannon",
  "create:potato_cannon",
  "cataclysm:ignitium_elytra_chestplate",
  "apotheosis:potion_charm",
  "create_connected:copycat_block",
  "create_connected:copycat_slab",
  "create_connected:copycat_beam",
  "create_connected:copycat_vertical_step",
  "create_connected:copycat_stairs",
  "create_connected:copycat_fence",
  "create_connected:copycat_fence_gate",
  "create_connected:copycat_wall",
  "create_connected:copycat_board",
  "create_connected:copycat_box",
  "create_connected:copycat_catwalk",
  "ae2:tiny_tnt",
  "ae2:spatial_cell_component_2",
  "ae2:spatial_cell_component_16",
  "ae2:spatial_cell_component_128",
  "ae2:spatial_storage_cell_2",
  "ae2:spatial_storage_cell_16",
  "ae2:spatial_storage_cell_128",
  "ae2:spatial_pylon",
  "ae2:spatial_io_port",
  "ae2:spatial_anchor",
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
