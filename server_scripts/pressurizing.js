ServerEvents.recipes((e) => {
  e.custom({
    type: "vintageimprovements:pressurizing",
    ingredients: [
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
      {
        item: "forbidden_arcanus:ender_pearl_fragment",
      },
    ],
    results: [
      {
        item: "minecraft:ender_pearl",
      },
    ],
    processingTime: 800,
  });
});
