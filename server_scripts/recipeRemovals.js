ServerEvents.recipes((e) => {
  [
    // Vanilla
    { output: "minecraft:ender_pearl" },
    { output: "minecraft:ender_eye", type: "minecraft:crafting_shapeless" },

    // Cataclysm
    { output: "cataclysm:the_incinerator" },
    { output: "cataclysm:bulwark_of_the_flame" },
    { output: "cataclysm:ignitium_helmet" },
    { output: "cataclysm:ignitium_chestplate" },
    { output: "cataclysm:ignitium_elytra_chestplate" },
    { output: "cataclysm:ignitium_leggings" },
    { output: "cataclysm:ignitium_boots" },
    { output: "cataclysm:meat_shredder" },

    // Ars Nouveau
    { output: "ars_nouveau:stable_warp_scroll" },
    { output: "ars_nouveau:warp_scroll" },
    { output: "ars_nouveau:warp_scroll" },

    // Alex's caves
    { output: "alexscaves:burrowing_arrow" },
    { output: "alexscaves:nuclear_bomb" },
    { output: "alexscaves:magnetic_light" },
    { output: "alexscaves:magnetic_quarry" },
    { output: "alexscaves:quarry_smasher" },

    // Forbidden Arcanus
    { output: "forbidden_arcanus:ender_pearl_fragment" },

    // Create
    { output: "create:polished_rose_quartz", type: "create:deploying" },

    // AE2
    { output: "ae2:printed_logic_processor" },
    { output: "ae2:printed_engineering_processor" },
    { output: "ae2:printed_calculation_processor" },
    { output: "ae2:printed_silicon" },
    { output: "ae2:logic_processor" },
    { output: "ae2:calculation_processor" },
    { output: "ae2:logic_processor_press" },
    { output: "ae2:calculation_processor_press" },
    { output: "ae2:engineering_processor_press" },
    { output: "ae2:silicon_press" },
    { output: "ae2:inscriber" },
  ].forEach((recipe) => {
    e.remove(recipe);
  });
});
