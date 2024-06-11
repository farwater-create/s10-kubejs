Platform.mods.kubejs.name = "Farwater";

StartupEvents.registry("item", (event) => {
  console.log("Registering items...");

  event.create("farwater:enchanted_golden_sheet").glow(true);
  event.create("farwater:incomplete_enchanted_golden_sheet");
  event.create("farwater:blaze_core");
  event
    .create("farwater:twilight_scroll")
    .tooltip(
      "§cConsume this scroll to gain access to the Twilight Forest portal in the hub."
    )
    .food((food) => {
      food
        .alwaysEdible()
        .eaten((ctx) =>
          ctx.server.runCommandSilent(
            `lp user ${ctx.player.username} parent add twilight`
          )
        );
    })
    .glow(true);

  event.create("createappliedkinetics:incomplete_calculation_processor_press");
  event.create("createappliedkinetics:incomplete_calculation_processor");
  event.create("createappliedkinetics:incomplete_engineering_processor_press");
  event.create("createappliedkinetics:incomplete_engineering_processor");
  event.create("createappliedkinetics:incomplete_logic_processor_press");
  event.create("createappliedkinetics:incomplete_logic_processor");
  event.create("createappliedkinetics:incomplete_printed_calculation_circuit");
  event.create("createappliedkinetics:incomplete_printed_engineering_circuit");
  event.create("createappliedkinetics:incomplete_printed_logic_circuit");
  event.create("createappliedkinetics:incomplete_silicon_press");
  event.create("createappliedkinetics:incomplete_silicon_print");
});
