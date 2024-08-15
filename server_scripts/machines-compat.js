// priority: 1

ServerEvents.recipes((event) => {
  let machine_smithing = (recipes, machine, remove_old) => {
    recipes.forEach((entry) => {
      console.log(
        `Attempting to Create ${Item.of(entry[0])} to ${Item.of(
          entry[1]
        )} from ${machine}`
      );
      if (remove_old) {
        event.remove({ output: entry[1] });
      }
      event.smithing(entry[1], "create:crafting_blueprint", machine, entry[0]);
      if (
        entry[1].toString().startsWith("x ", 1) ||
        entry[1].toString().startsWith("x ", 2)
      ) {
        event.recipes.create.deploying(entry[1], [machine, entry[0]]);
      }
      if (entry[1].toString().startsWith("x ", 1)) {
        entry[1] = entry[1].slice(3);
      }
    });
  };

  let multicut = (outputs, input, remove_old) => {
    outputs.forEach((output) => {
      console.log(`${Item.of(input)} to ${Item.of(output)}`);
      if (remove_old) {
        event.remove({ output: output });
      }
      event.stonecutting(output, input);
      if (output.toString().startsWith("x ", 1)) {
        output = output.slice(3);
      }
    });
  };

  const andesite_smithing = [
    ["createoreexcavation:drill", Item.of("create:mechanical_drill", 2)],
    ["farwater:saw", "create:mechanical_saw"],
    ["create:propeller", "create:encased_fan"],
    ["minecraft:iron_block", "create:mechanical_press"],
    ["create:brass_hand", "create:deployer"],
    ["create:whisk", "create:mechanical_mixer"],
    ["create:brass_hand", "create:deployer"],
    ["createaddition:copper_rod", Item.of("createaddition:connector", 4)],
    ["create:crushing_wheel", Item.of("create:mechanical_roller", 2)],
    ["createaddition:capacitor", "createaddition:alternator"],
    ["create:mechanical_piston", "vintageimprovements:vibrating_table"],
    ["vintageimprovements:grinder_belt", "vintageimprovements:belt_grinder"],
    ["vintageimprovements:iron_spring", "vintageimprovements:lathe"],
    [
      "vintageimprovements:spring_coiling_machine_wheel",
      "vintageimprovements:spring_coiling_machine",
    ],
  ];
  machine_smithing(andesite_smithing, "create:andesite_machine", true);

  const andesite_machines_cutting = [
    Item.of("create:portable_storage_interface", 2),
    Item.of("create:mechanical_harvester", 2),
    Item.of("create:mechanical_plough", 2),
    Item.of("create:andesite_funnel", 4),
    Item.of("create:andesite_tunnel", 4),
    Item.of("create:weighted_ejector", 2),
    Item.of("createaddition:rolling_mill", 1),
    Item.of("create_mechanical_extruder:mechanical_extruder", 1),
    Item.of("vintageimprovements:centrifuge", 1),
    Item.of("vintageimprovements:curving_press", 1),
    Item.of("sliceanddice:slicer", 1),
  ];
  multicut(andesite_machines_cutting, "create:andesite_machine", true);

  const copper_smithing = [
    ["minecraft:copper_block", "create:copper_backtank"],
    ["minecraft:hopper", Item.of("create:spout", 2)],
    ["minecraft:iron_bars", "create:item_drain"],
    ["create_sa:steam_engine", Item.of("create:steam_engine", 3)],
    [
      Ingredient.of("#create:sandpaper"),
      Item.of("create_enchantment_industry:disenchanter", 2),
    ],
    [
      Ingredient.of("#create:mechanical_pumps"),
      Item.of("vintageimprovements:vacuum_chamber", 1),
    ],
  ];
  machine_smithing(copper_smithing, "create:sealed_machine", true);

  const copper_machines_cutting = [
    Item.of("create:smart_fluid_pipe", 2),
    Item.of("create:hose_pulley", 1),
    Item.of("create:portable_fluid_interface", 2),
  ];
  multicut(copper_machines_cutting, "create:sealed_machine", true);

  const brass_smithing = [
    ["minecraft:crafting_table", Item.of("create:mechanical_crafter", 4)],
    ["minecraft:comparator", Item.of("create:stockpile_switch", 2)],
    ["createaddition:electrum_rod", "createaddition:tesla_coil"],
    ["createaddition:capacitor", "createaddition:modular_accumulator"],
    ["createaddition:connector", "createaddition:portable_energy_interface"],
    ["create:rotation_speed_controller", "createaddition:electric_motor"],
    ["vintageimprovements:laser_item", "vintageimprovements:laser"],
    ["create:calculation_mechanism", "ae2:inscriber"],
  ];
  machine_smithing(brass_smithing, "create:brass_machine", true);

  const brass_machines_cutting = [
    Item.of("create:sequenced_gearshift", 2),
    Item.of("create:rotation_speed_controller", 1),
    Item.of("create:mechanical_arm", 1),
    Item.of("create:content_observer", 2),
    Item.of("create:brass_funnel", 4),
    Item.of("create:brass_tunnel", 4),
    Item.of("create:display_link", 2),
    Item.of("create:display_board", 6),
  ];
  multicut(brass_machines_cutting, "create:brass_machine", true);

  const locomotive_machines_cutting = [
    Item.of("railways:track_coupler", 1),
    Item.of("create:controls", 1),
    Item.of("create:track_observer", 3),
    Item.of("create:track_station", 2),
    Item.of("create:track_signal", 4),
    Item.of("railways:portable_fuel_interface", 2),
  ];

  multicut(locomotive_machines_cutting, "create:locomotive_machine", true);

  const abstruse_machines_cutting = [
    Item.of("createutilities:void_motor", 2),
    Item.of("createutilities:void_chest", 2),
    Item.of("createutilities:void_tank", 2),
    Item.of("createutilities:void_battery", 2),
  ];

  multicut(abstruse_machines_cutting, "create:abstruse_machine", true);

  const heads = [
   Item.of("vintageimprovements:convex_curving_head",1),
   Item.of("vintageimprovements:concave_curving_head",1),
   Item.of("vintageimprovements:w_shaped_curving_head",1),
   Item.of("vintageimprovements:v_shaped_curving_head",1),
  ];

  multicut(heads, "minecraft:iron_block", true);
});
