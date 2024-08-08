// MoreJSEvents.villagerTrades((event) => {
//   console.log("loading villagerTrades...");
//   event.removeTrades({
//     first: "minecraft:emerald",
//   });
// });

MoreJSEvents.playerStartTrading((event) => {
  event.forEachOffers((o) => {
    if (o.getOutput().getId() === "minecraft:emerald") o.disabled = true;
  });
});
