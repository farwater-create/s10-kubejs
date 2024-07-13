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
});
