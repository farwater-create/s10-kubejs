const jeiRemovals = [
  "tfmg:quad_potato_cannon",
  "create:potato_cannon",
  "ae2:inscriber",
  "cataclysm:ignitium_elytra_chestplate",
];

JEIEvents.hideItems((e) => {
  jeiRemovals.forEach((recipe) => {
    e.hide(recipe);
  });
});
