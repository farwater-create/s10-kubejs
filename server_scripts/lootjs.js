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
		  Item.of("numismatics:sprocket").withChance(5),
	  	Item.of("numismatics:cog").withChance(2),
	  	Item.of("numismatics:crown").withChance(0.5),
	  	Item.of("numismatics:sun").withChance(0.01),
	  	]
  	);
});
