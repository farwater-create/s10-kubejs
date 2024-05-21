ServerEvents.recipes((e) => {
  e.recipes.create.haunting(
    [Item.of("minecraft:clay", 1)],
    Item.of("tfmg:fireclay")
  );
});
