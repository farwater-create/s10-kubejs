const jeiRemovals = [
  "alexscaves:nuclear_bomb",
  "alexscaves:burrowing_arrow",
  "alexscaves:magnetic_light",
  "alexscaves:magnetic_quarry",
  "alexscaves:quarry_smasher",
  "ae2:inscriber",
];

JEIEvents.hideItems((e) => {
  jeiRemovals.forEach((recipe) => {
    e.hide(recipe);
  });
});
