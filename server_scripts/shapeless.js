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

  event.shapeless("ars_nouveau:novice_spell_book", [
    "minecraft:book",
    "ars_nouveau:source_gem",
  ]);

  event.shapeless("ars_nouveau:apprentice_spell_book", [
    "ars_nouveau:novice_spell_book",
    "forbidden_arcanus:aureal_bottle",
    "farwater:source_mixture_bottle",
  ]);

  event.shapeless("ars_nouveau:archmage_spell_book", [
    "ars_nouveau:apprentice_spell_book",
    "forbidden_arcanus:eternal_stella",
    "ars_nouveau:wilden_tribute",
  ]);
});
