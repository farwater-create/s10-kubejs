ServerEvents.recipes((event) => {
  [
    ["ae2:printed_calculation_processor", "ae2:calculation_processor"],
    ["ae2:printed_logic_processor", "ae2:logic_processor"],
    ["ae2:printed_engineering_processor", "ae2:engineering_processor"],
  ].forEach((processor) => {
    event.recipes.ae2
      .inscriber(processor[1], processor[0], "redstone", "ae2:printed_silicon")
      .mode("press");
  });

  [
    ["ae2:printed_silicon", "ae2:silicon_press", "ae2:silicon_crystal"],
    [
      "ae2:printed_logic_processor",
      "ae2:logic_processor_press",
      "minecraft:gold_ingot",
    ],
    [
      "ae2:printed_calculation_processor",
      "ae2:calculation_processor_press",
      "ae2:certus_quartz_crystal",
    ],
    [
      "ae2:printed_engineering_processor",
      "ae2:engineering_processor_press",
      "minecraft:diamond",
    ],
  ].forEach((processor) => {
    event.recipes.ae2.inscriber(processor[0], processor[1], processor[2]);
  });
});
