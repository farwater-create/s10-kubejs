StartupEvents.registry("item", (event) => {
  console.log("Registering items...");

  event.create("farwater:runic_golden_sheet").glow(true);
  event.create("farwater:incomplete_runic_golden_sheet");
  event.create("farwater:blaze_core");
});
