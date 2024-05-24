MoreJSEvents.villagerTrades((event) => {
  console.log("loading villagerTrades...");
  event.removeVanillaTrades();
  event.removeModdedTrades();
});
