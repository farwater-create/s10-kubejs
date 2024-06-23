ServerEvents.recipes((event) => {
  // event.shapeless("dye_depot:indigo_dye", ["herbalbrews:lavender"]);
  event
    .shapeless("create:makeshift_kinetic_mechanism", [
      "2x #forge:stripped_logs",
      Item.of("farwater:saw").ignoreNBT(),
      "3x create:andesite_alloy",
    ])
    .damageIngredient(Item.of("farwater:saw"));

  event.shapeless("4x create:crafting_blueprint", [
    "4x minecraft:paper",
    "1x minecraft:crafting_table",
  ]);
});
