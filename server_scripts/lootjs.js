LootJS.modifiers((event) => {
  const colors = ["pink", "yellow", "blue", "violet"];
  colors.forEach((color) => {
    event
      .addBlockLootModifier(`twilightforest:${color}_castle_door`)
      .removeLoot(Ingredient.all);
  });

  event
    .addBlockLootModifier(`twilightforest:vanishing_block`)
    .removeLoot(Ingredient.all);

  event
    .addBlockLootModifier(`twilightforest:reappearing_block`)
    .removeLoot(Ingredient.all);

  event
    .addLootTypeModifier(LootType.CHEST)
	  .addWeightedLoot(
	    [0, 5],
		  [
	  	Item.of("numismatics:spur").withChance(20),
	  	Item.of("numismatics:bevel").withChance(10),
		  Item.of("numismatics:sprocket").withChance(5)
  	);
});
