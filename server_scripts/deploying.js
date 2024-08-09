ServerEvents.recipes((e) => {
  let itemApplication = (ingredients, result) => {
    e.custom({
      type: "create:item_application",
      ingredients: ingredients,
      results: result,
    });
  };

  e.recipes.create.deploying(
    ["ae2:sky_stone_block"],
    ["occultism:otherstone", "ars_nouveau:air_essence"]
  );

  itemApplication(
    [{ item: "occultism:otherstone" }, { item: "ars_nouveau:air_essence" }],
    [{ item: "ae2:sky_stone_block" }]
  );
});
