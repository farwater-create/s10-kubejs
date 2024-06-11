ServerEvents.recipes((e) => {
  e.replaceInput(
    { mod: "ars_nouveau" }, // Arg 1: the filter
    "minecraft:gold_ingot", // Arg 2: the item to replace
    "farwater:enchanted_golden_sheet" // Arg 3: the item to replace it with
  );
});
