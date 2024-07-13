ServerEvents.recipes((e) => {
  let itemApplication = (ingredients, result) => {
    e.custom({
      type: "create:item_application",
      ingredients: ingredients,
      results: result,
    });
  };

  e.recipes.create.deploying(
    [
      "ars_nouveau:magebloom_fiber",
      Item.of("ars_nouveau:magebloom_fiber").withChance(0.6), // output
    ],
    ["ars_nouveau:magebloom", "#forge:tools/knives"] // input
  );

  e.recipes.create.deploying(
    ["ae2:sky_stone_block"],
    ["#forge:stone", "#farwater:air_focus"]
  );

  itemApplication(
    [{ tag: "forge:stone" }, { tag: "farwater:air_focus" }],
    [{ item: "ae2:sky_stone_block" }]
  );
});
