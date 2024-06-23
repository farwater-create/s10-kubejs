ServerEvents.recipes((e) => {
  e.recipes.create.deploying(
    [
      "ars_nouveau:magebloom_fiber",
      Item.of("ars_nouveau:magebloom_fiber").withChance(0.6),
      Item.of("ars_nouveau:magebloom_fiber").withChance(0.6),
    ],
    ["ars_nouveau:magebloom", "#forge:tools/knives"]
  );
});
