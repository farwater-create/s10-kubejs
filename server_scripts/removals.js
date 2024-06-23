const recipeRemovals = [
  // Cataclysm
  { output: "cataclysm:the_incinerator" },
  { output: "cataclysm:bulwark_of_the_flame" },
  { output: "cataclysm:ignitium_helmet" },
  { output: "cataclysm:ignitium_chestplate" },
  { output: "cataclysm:ignitium_elytra_chestplate" },
  { output: "cataclysm:ignitium_leggings" },
  { output: "cataclysm:ignitium_boots" },

  // Ars Nouveau
  { output: "ars_nouveau:source_gem", type: "ars_nouveau:imbuement" },
  { output: "ars_nouveau:magebloom_fiber" },

  // Alex's caves
  { output: "alexscaves:burrowing_arrow" },
  { output: "alexscaves:nuclear_bomb" },

  // AE2
  { output: "ae2:calculation_processor" },
  { output: "ae2:logic_processor" },
  { output: "ae2:engineering_processor" },

  // Create
  { output: "create:crafting_blueprint" },
  {
    type: "create:sequenced_assembly",
    output: "create:precision_mechanism",
  },
  {
    type: "create:pressing",
    output: "createutilities:void_steel_sheet",
  },
  {
    type: "create:pressing",
    output: "ethuim:ethium_sheet",
  },

  // Ore Excavation
  { type: "createoreexcavation:drilling" },
  { type: "createoreexcavation:extracting" },
  { type: "createoreexcavation:vein" },
];
ServerEvents.recipes((e) => {
  recipeRemovals.forEach((recipe) => {
    e.remove(recipe);
  });
});
