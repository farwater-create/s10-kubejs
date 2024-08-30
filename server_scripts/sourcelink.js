ServerEvents.recipes((e) => {
  e.custom({
    type: "starbunclemania:fluid_sourcelink_conversion",
    inputs: [
      { fluid: 'tfmg:kerosene', amount: 1000 }
    ],
    results: [
      { tag: 'ars_nouveau:source', amount: 1000 }
    ],
    processingTime: 2,
  });
});
