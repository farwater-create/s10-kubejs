ServerEvents.recipes((e) => {
  let customGlyph = [
    {
      input: [
        { item: { item: "minecraft:lantern" } },
        { item: { item: "minecraft:torch" } },
        { item: { item: "twilightforest:torchberries" } },
      ],
      output: "ars_nouveau:glyph_light",
      exp: 27,
    },
    {
      input: [
        { item: { item: "ars_nouveau:abjuration_essence" } },
        { item: { item: "reliquary:slime_pearl" } },
        { item: { item: "quark:slime_in_a_bucket" } },
      ],
      output: "ars_nouveau:glyph_bounce",
      exp: 27,
    },
    {
      input: [
        { item: { item: "ars_nouveau:air_essence" } },
        { item: { item: "minecraft:feather" } },
        { item: { item: "minecraft:feather" } },
        { item: { item: "minecraft:feather" } },
        { item: { item: "ars_nouveau:wilden_wing" } },
        { item: { item: "minecraft:blaze_rod" } },
        { item: { item: "minecraft:phantom_membrane" } },
        { item: { item: "minecraft:nether_wart" } },
      ],
      output: "ars_nouveau:glyph_slowfall",
      exp: 27,
    },
    {
      input: [
        { item: { item: "ars_nouveau:manipulation_essence" } },
        { item: { item: "reliquary:nebulous_heart" } },
        { item: { item: "endermanoverhaul:summoner_pearl" } },
        { item: { item: "endermanoverhaul:soul_pearl" } },
        { item: { item: "endermanoverhaul:bubble_pearl" } },
        { item: { item: "endermanoverhaul:icy_pearl" } },
        { item: { item: "endermanoverhaul:crimson_pearl" } },
        { item: { item: "endermanoverhaul:warped_pearl" } },
      ],
      output: "ars_nouveau:glyph_blink",
      exp: 160,
    },
    {
      input: [
        { item: { item: "ars_nouveau:air_essence" } },
        { item: { item: "alexsmobs:squid_grapple" } },
        { item: { item: "ars_nouveau:wilden_wing" } },
        { item: { item: "ars_nouveau:wilden_wing" } },
        { item: { item: "ars_nouveau:wilden_wing" } },
      ],
      output: "ars_nouveau:glyph_leap",
      exp: 160,
    },
    {
      input: [
        { item: { item: "ars_nouveau:air_essence" } },
        { item: { item: "minecraft:rabbit_foot" } },
        { item: { item: "supplementaries:spring_launcher" } },
      ],
      output: "ars_nouveau:glyph_launch",
      exp: 160,
    },
    {
      input: [
        { item: { item: "ars_nouveau:conjuration_essence" } },
        { item: { item: "minecraft:armor_stand" } },
        { item: { item: "alexsmobs:mimicream" } },
      ],
      output: "ars_nouveau:glyph_summon_decoy",
      exp: 160,
    },
    {
      input: [
        { item: { item: "ars_nouveau:manipulation_essence" } },
        { item: { item: "minecraft:phantom_membrane" } },
        { item: { item: "minecraft:phantom_membrane" } },
        { item: { item: "minecraft:phantom_membrane" } },
        { item: { item: "forbidden_arcanus:soul" } },
        { item: { item: "forbidden_arcanus:enchanted_soul" } },
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
      output: { item: recipe.output },
    }).id(recipe.output);
  });
});
