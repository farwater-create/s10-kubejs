ServerEvents.tags("item", (event) => {
  event.add("create:kinetic_mechanisms", "create:makeshift_kinetic_mechanism");
  event.add("create:kinetic_mechanisms", "create:kinetic_mechanism");

  event.add("minecraft:trim_templates", "create:crafting_blueprint");

  event.add("create:mechanical_pumps", "create:mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:aluminium_mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:plastic_mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:brass_mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:cast_iron_mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:steel_mechanical_pump");

  event.add("ars_nouveau:valid_gems", "minecraft:emerald");
  event.add("ars_nouveau:valid_gems", "minecraft:lapis_lazuli");

  event.add("farwater:limestones", "meadow:limestone");
  event.add("farwater:limestones", "create:limestone");

  event.add("farwater:air_focus", "ars_elemental:air_focus");
  event.add("farwater:air_focus", "ars_elemental:lesser_air_focus");

  event.add("farwater:magic_logs", "ars_nouveau:yellow_archwood_log");
  event.add("farwater:magic_logs", "ars_nouveau:blue_archwood_log");
  event.add("farwater:magic_logs", "ars_nouveau:red_archwood_log");
  event.add("farwater:magic_logs", "ars_nouveau:purple_archwood_log");
  event.add("farwater:magic_logs", "ars_nouveau:green_archwood_log");

  event.add("ae2:budding_quartz", "ae2:damaged_budding_quartz");
  event.add("ae2:budding_quartz", "ae2:flawed_budding_quartz");
  event.add("ae2:budding_quartz", "ae2:chipped_budding_quartz");
  event.add("ae2:budding_quartz", "minecraft:quartz_block");

  event.remove("minecraft:flowers", "iceandfire:fire_lily");
  event.remove("minecraft:small_flowers", "iceandfire:fire_lily");
  event.remove("minecraft:flowers", "iceandfire:ice_lily");
  event.remove("minecraft:small_flowers", "iceandfire:ice_lily");
  event.remove("minecraft:flowers", "iceandfire:lightning_lily");
  event.remove("minecraft:small_flowers", "iceandfire:lightning_lily");
});

ServerEvents.tags("fluid", (event) => {
  event.add("farwater:source_mixtures", "farwater:source_mixture");
  event.add("farwater:source_mixtures", "starbunclemania:source_fluid");
});
