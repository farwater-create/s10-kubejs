const jeiRemovals = [
  "alexscaves:nuclear_bomb",
  "alexscaves:burrowing_arrow",
  "alexscaves:magnetic_light",
  "alexscaves:magnetic_quarry",
  "alexscaves:quarry_smasher",
  "tfmg:quad_potato_cannon",
  "tfmg:quad_potato_cannon",
  "create:potato_cannon",
  "ae2:inscriber",
];

JEIEvents.hideItems((e) => {
  jeiRemovals.forEach((recipe) => {
    e.hide(recipe);
  });
});
