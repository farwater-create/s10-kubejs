ServerEvents.recipes((event) => {
  // event.shapeless("dye_depot:indigo_dye", ["herbalbrews:lavender"]);
  event
    .shapeless("create:makeshift_kinetic_mechanism", [
      "2x #farwater:magic_logs",
      Item.of("farwater:saw"),
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
    "farwater:source_mixture_bucket",
  ]);

  event.shapeless("ars_nouveau:archmage_spell_book", [
    "ars_nouveau:apprentice_spell_book",
    "minecraft:nether_star",
    "forbidden_arcanus:eternal_stella",
    "ars_nouveau:wilden_tribute",
  ]);

  event.shapeless("create:sealed_mechanism", [
    "4x farwater:cured_rubber",
    "#create:kinetic_mechanisms",
  ]);

  event.shapeless("create:andesite_machine", [
    "4x #create:kinetic_mechanisms",
    "create:andesite_casing",
  ]);

  event.shapeless("create:sealed_machine", [
    "4x create:sealed_mechanism",
    "create:copper_casing",
  ]);

  event.shapeless("create:brass_machine", [
    "4x create:precision_mechanism",
    "create:brass_casing",
  ]);

  event.shapeless("create:locomotive_machine", [
    "2x create:infernal_mechanism",
    "create:railway_casing",
  ]);

  event.shapeless("create:abstruse_machine", [
    "2x create:abstruse_mechanism",
    "createutilities:void_casing",
  ]);
});
