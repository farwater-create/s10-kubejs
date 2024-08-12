ServerEvents.recipes((e) => {
  e.replaceInput(
    { mod: "ars_nouveau" }, // Arg 1: the filter
    "minecraft:gold_ingot", // Arg 2: the item to replace
    "farwater:enchanted_golden_sheet" // Arg 3: the item to replace it with
  );

  e.replaceInput(
    { output: "vintageimprovements:helve_hammer" }, // Arg 1: the filter
    "create:andesite_casing", // Arg 2: the item to replace
    "create:andesite_machine" // Arg 3: the item to replace it with
  );

  e.replaceInput(
    { output: "ae2:energy_acceptor" }, // Arg 1: the filter
    "minecraft:copper_ingot", // Arg 2: the item to replace
    "create:calculating_mechanism" // Arg 3: the item to replace it with
  );

  e.replaceInput(
    { output: "ae2:charger" }, // Arg 1: the filter
    "minecraft:copper_ingot", // Arg 2: the item to replace
    "createaddition:tesla_coil" // Arg 3: the item to replace it with
  );

  e.replaceInput(
    { output: "createoreexcavation:drilling_machine" }, // Arg 1: the filter
    "create:copper_casing", // Arg 2: the item to replace
    "create:sealed_machine" // Arg 3: the item to replace it with
  );

  e.replaceInput(
    { output: "createoreexcavation:vein_finder" }, // Arg 1: the filter
    "#forge:ores/redstone", // Arg 2: the item to replace
    "#endermanoverhaul:ender_pearls" // Arg 3: the item to replace it with
  );

  e.replaceInput(
    {
      not: [
        { type: "minecraft:stonecutting" },
        { type: "minecraft:crafting_shaped" },
      ],
    }, // Arg 1: the filter
    "create:limestone", // Arg 2: the item to replace
    "#farwater:limestones" // Arg 3: the item to replace it with
  );

  e.replaceInput(
    {
      not: [
        { type: "minecraft:stonecutting" },
        { type: "minecraft:crafting_shaped" },
      ],
    }, // Arg 1: the filter
    "meadow:limestone", // Arg 2: the item to replace
    "#farwater:limestones" // Arg 3: the item to replace it with
  );
});
