ItemEvents.tooltip((e) => {
  const shiftTooltips = [
    // {
    //   item: "minecraft:blaze_rod",
    //   tooltip: "Blazes can be found on the moon and other planets.",
    // },
  ];

  const tooltips = [
    {
      item: "ae2:certus_quartz_crystal",
      tooltip: "Certus Quartz can be harvested from a Flawless Budding Quartz.",
    },
    {
      item: "/ae2:.*(flawed|damaged|chipped)_budding_quartz/",
      tooltip: "Create a Flawless Budding Quartz to grow Certus Quartz.",
    },
    {
      item: "ae2:flawless_budding_quartz",
      tooltip: "Place this block to grow Certus Quartz.",
    },
    {
      regex:
        "/ae2:(logic_processor_press|calculation_processor_press|engineering_processor_press|silicon_press)/",
      tooltip: "Create and break a Mysterious Cube to obtain AE2 presses.",
    },
  ];

  shiftTooltips.forEach((tooltip) => {
    e.addAdvanced(tooltip.item, (item, advanced, text) => {
      if (!e.isShift()) {
        text.add(1, [Text.of("Hold Shift to see more info.").gray()]);
      }
      if (e.isShift()) {
        text.add(1, [Text.of(tooltip.tooltip).gray()]);
      }
    });
  });

  tooltips.forEach((tooltip) => {
    e.addAdvanced(tooltip.item, (item, advanced, text) => {
      text.add(1, [Text.of(tooltip.tooltip).gray()]);
    });
  });
});
