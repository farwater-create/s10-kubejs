ServerEvents.recipes((e) => {
  let customGlyph = [
    {
      input: [
        { item: "minecraft:lantern" },
        { item: "minecraft:torch" },
        { item: "twilightforest:torchberries" },
      ],
      output: "ars_nouveau:glyph_light",
      exp: 27,
    },
    {
      input: [
        { item: "ars_nouveau:abjuration_essence" },
        { item: "reliquary:slime_pearl" },
        { item: "quark:slime_in_a_bucket" },
      ],
      output: "ars_nouveau:glyph_bounce",
      exp: 27,
    },
    {
      input: [
        { item: "ars_nouveau:air_essence" },
        { item: "minecraft:feather" },
        { item: "minecraft:feather" },
        { item: "minecraft:feather" },
        { item: "ars_nouveau:wilden_wing" },
        { item: "minecraft:blaze_rod" },
        { item: "minecraft:phantom_membrane" },
        { item: "minecraft:nether_wart" },
      ],
      output: "ars_nouveau:glyph_slowfall",
      exp: 27,
    },
    {
      input: [
        { item: "ars_nouveau:manipulation_essence" },
        { item: "reliquary:nebulous_heart" },
        { item: "endermanoverhaul:summoner_pearl" },
        { item: "endermanoverhaul:soul_pearl" },
        { item: "endermanoverhaul:bubble_pearl" },
        { item: "endermanoverhaul:icy_pearl" },
        { item: "endermanoverhaul:crimson_pearl" },
        { item: "endermanoverhaul:warped_pearl" },
      ],
      output: "ars_nouveau:glyph_blink",
      exp: 160,
    },
    {
      input: [
        { item: "ars_nouveau:air_essence" },
        { item: "alexsmobs:squid_grapple" },
        { item: "ars_nouveau:wilden_wing" },
        { item: "ars_nouveau:wilden_wing" },
        { item: "ars_nouveau:wilden_wing" },
      ],
      output: "ars_nouveau:glyph_leap",
      exp: 160,
    },
    {
      input: [
        { item: "ars_nouveau:air_essence" },
        { item: "minecraft:rabbit_foot" },
        { item: "supplementaries:spring_launcher" },
      ],
      output: "ars_nouveau:glyph_launch",
      exp: 160,
    },
    {
      input: [
        { item: "ars_nouveau:conjuration_essence" },
        { item: "minecraft:armor_stand" },
        { item: "alexsmobs:mimicream" },
      ],
      output: "ars_nouveau:glyph_summon_decoy",
      exp: 160,
    },
    {
      input: [
        { item: "ars_nouveau:manipulation_essence" },
        { item: "minecraft:phantom_membrane" },
        { item: "minecraft:phantom_membrane" },
        { item: "minecraft:phantom_membrane" },
        { item: "forbidden_arcanus:soul" },
        { item: "forbidden_arcanus:enchanted_soul" },
      ],
      output: "ars_nouveau:glyph_intangible",
      exp: 160,
    },
  ];

  customGlyph.forEach((recipe) => {
    e.remove({
      output: recipe.output,
    });
    e.custom({
      type: "ars_nouveau:glyph",
      count: 1,
      exp: recipe.exp,
      inputItems: recipe.input,
      output: recipe.output,
    });
  });
});
