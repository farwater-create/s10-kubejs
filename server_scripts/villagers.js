// MoreJSEvents.villagerTrades((event) => {
//   console.log("loading villagerTrades...");
//   event.removeTrades({
//     first: "minecraft:emerald",
//   });
// });

MoreJSEvents.updateVillagerOffers((event) => {
  console.log("loading updateVillagerOffers...");

  console.log("event: ", event.getOffers());

  event.getOffers().removeIf((trade) => {
    let isNotAllowedTrade = trade
      .getOutput()
      .getId()
      .match("minecraft:emerald");

    return !!isNotAllowedTrade;
  });
});
