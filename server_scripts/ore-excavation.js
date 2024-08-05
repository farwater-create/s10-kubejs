ServerEvents.recipes((event) => {
  // IRON VEIN
  event.recipes.createoreexcavation
    .vein('{"text": "Raw Iron Vein"}', "minecraft:raw_iron")
    .placement(16, 8, 6894685)
    .alwaysInfinite()
    .biomeWhitelist("forge:is_overworld")
    .id("kubejs:raw_iron_vein");
  event.recipes.createoreexcavation
    .drilling(
      Item.of("minecraft:raw_iron").withChance(0.8),
      "kubejs:raw_iron_vein",
      1600
    )
    .stress(1024)
    .id("kubejs:raw_iron_extraction");

  // LAVA WELL
  event.recipes.createoreexcavation
    .vein('{"text": "Lava Well"}', "minecraft:lava_bucket")
    .placement(16, 8, 9457813)
    .alwaysInfinite()
    .biomeWhitelist("forge:is_overworld")
    .id("kubejs:lava_well");
  event.recipes.createoreexcavation
    .extracting("minecraft:lava 250", "kubejs:lava_well", 80)
    .id("kubejs:lava_well_extraction");

  // COPPER VEIN
  event.recipes.createoreexcavation
    .vein('{"text": "Raw Copper Vein"}', "minecraft:raw_copper")
    .placement(16, 8, 1659845)
    .alwaysInfinite()
    .biomeWhitelist("forge:is_overworld")
    .id("kubejs:raw_coppper_vein");
  event.recipes.createoreexcavation
    .drilling(
      Item.of("minecraft:raw_copper").withChance(0.8),
      "kubejs:raw_coppper_vein",
      1600
    )
    .stress(1024)
    .id("kubejs:raw_copper_extraction");

  // TUFF VEIN
  event.recipes.createoreexcavation
    .vein('{"text": "Tuff Vein"}', "minecraft:tuff")
    .placement(20, 12, 8964561)
    .alwaysInfinite()
    .biomeWhitelist("forge:is_overworld")
    .id("kubejs:tuff_vein");
  event.recipes.createoreexcavation
    .drilling(
      [Item.of("minecraft:tuff").withChance(0.9)],
      "kubejs:tuff_vein",
      600
    )
    .fluid("minecraft:water")
    .drill("createoreexcavation:diamond_drill")
    .stress(2048)
    .id("kubejs:tuff_extraction");
});
