ItemEvents.modification((event) => {
  event.modify("create:blaze_cake", (item) => {
    item.burnTime = 4 * 60 * 20;
  });

  event.modify("farwater:blazing_blood", (item) => {
    item.burnTime = 3 * 60 * 20;
  });

  event.modify("farwater:blazing_blood_bucket", (item) => {
    item.burnTime = 3 * 60 * 20;
  });
});
