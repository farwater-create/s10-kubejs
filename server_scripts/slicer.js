ServerEvents.recipes((e) => {
  e.custom({
    type: "farmersdelight:cutting",
    ingredients: [
      {
        item: "ars_nouveau:magebloom",
      },
    ],
    result: [
      {
        count: 2,
        item: "ars_nouveau:magebloom_fiber",
      },
    ],
    tool: {
      tag: "forge:tools/knives",
    },
  });
});
