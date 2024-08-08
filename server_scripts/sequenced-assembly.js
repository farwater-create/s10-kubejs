ServerEvents.recipes((e) => {
  let t = "create:incomplete_calculation_mechanism";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("create:calculation_mechanism")],
      Item.of("create:precision_mechanism"),
      [
        e.recipes.create.deploying(t, [t, Item.of("ae2:fluix_crystal")]),
        e.recipes.create.deploying(t, [
          t,
          "vintageimprovements:aluminum_spring",
        ]),
        e.recipes.create.deploying(t, [t, "#forge:wires"]),
        e.recipes.create.deploying(t, [t, Item.of("ae2:printed_silicon")]),
        e.recipes.create.pressing(t, t),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  // t = "createappliedkinetics:incomplete_logic_processor";
  // e.recipes.create
  //   .sequenced_assembly(
  //     [Item.of("ae2:logic_processor")],
  //     Item.of("ae2:printed_silicon"),
  //     [
  //       e.recipes.create.deploying(t, [
  //         t,
  //         Item.of("ae2:printed_logic_processor"),
  //       ]),
  //       e.recipes.create.deploying(t, [
  //         t,
  //         "#vintageimprovements:small_springs",
  //       ]),
  //       e.recipes.create.deploying(t, [t, "#forge:wires"]),
  //       e.recipes.create.deploying(t, [t, Item.of("tfmg:screw")]),
  //       e.recipes.create.pressing(t, t),
  //     ]
  //   )
  //   .transitionalItem("createappliedkinetics:incomplete_engineering_processor")
  //   .loops(1);

  // t = "createappliedkinetics:incomplete_engineering_processor";
  // e.recipes.create
  //   .sequenced_assembly(
  //     [Item.of("ae2:engineering_processor")],
  //     Item.of("ae2:printed_silicon"),
  //     [
  //       e.recipes.create.deploying(t, [
  //         t,
  //         Item.of("ae2:printed_engineering_processor"),
  //       ]),
  //       e.recipes.create.deploying(t, [
  //         t,
  //         "#vintageimprovements:small_springs",
  //       ]),
  //       e.recipes.create.deploying(t, [t, "#forge:wires"]),
  //       e.recipes.create.deploying(t, [t, Item.of("tfmg:screw")]),
  //       e.recipes.create.pressing(t, t),
  //     ]
  //   )
  //   .transitionalItem(t)
  //   .loops(1);

  t = "farwater:incomplete_enchanted_golden_sheet";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("farwater:enchanted_golden_sheet")],
      Item.of("create:golden_sheet"),
      [
        e.recipes.create.filling(t, [
          Fluid.of("create_enchantment_industry:experience", 10),
          t,
        ]),
        e.custom({
          type: "vintageimprovements:vibrating",
          ingredients: [{ item: t }],
          results: [{ item: t }],
        }),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "create:incomplete_kinetic_mechanism";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("create:kinetic_mechanism")],
      Item.of("ars_nouveau:archwood_slab"),
      [
        e.recipes.create.deploying(t, [t, "create:andesite_alloy"]),
        e.recipes.create.deploying(t, [t, "create:andesite_alloy"]),
        e.recipes.create.cutting(t, t),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "create:incomplete_precision_mechanism";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("create:precision_mechanism")],
      Ingredient.of("#create:kinetic_mechanisms"),
      [
        e.recipes.create.deploying(t, [t, "create:electron_tube"]),
        e.recipes.create.deploying(t, [t, "create:electron_tube"]),
        e.recipes.create.deploying(t, [t, "tfmg:screwdriver"]),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "create:incomplete_abstruse_mechanism";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("create:abstruse_mechanism")],
      Item.of("create:infernal_mechanism"),
      [
        e.recipes.create.deploying(t, [t, "createutilities:graviton_tube"]),
        e.recipes.create.deploying(t, [t, "minecraft:echo_shard"]),
        e.recipes.create.deploying(t, [t, "tfmg:screwdriver"]),
        e.recipes.create.filling(t, [
          Fluid.of("create_central_kitchen:dragon_breath", 20),
          t,
        ]),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "create:incomplete_sealed_mechanism";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("create:sealed_mechanism")],
      Ingredient.of("#create:kinetic_mechanisms"),
      [
        e.recipes.create.filling(t, [
          Fluid.of("farwater:liquid_rubber", 125),
          t,
        ]),
        e.custom({
          type: "vintageimprovements:vibrating",
          ingredients: [{ item: t }],
          results: [{ item: t }],
        }),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "create_sa:steam_engine";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("create_sa:steam_engine")],
      Item.of("create:precision_mechanism"),
      [
        e.recipes.create.deploying(t, [t, "vintageimprovements:blaze_spring"]),
        e.recipes.create.deploying(t, [t, "create:propeller"]),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "tfmg:incomplete_steel_mechanism";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("tfmg:steel_mechanism")],
      Item.of("create:precision_mechanism"),
      [
        e.recipes.create.deploying(t, [t, "tfmg:heavy_plate"]),
        e.recipes.create.deploying(t, [t, "tfmg:aluminum_ingot"]),
        e.recipes.create.deploying(t, [t, "tfmg:screw"]),
        e.recipes.create.deploying(t, [t, "tfmg:screwdriver"]),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "create:incomplete_infernal_mechanism";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("create:infernal_mechanism")],
      Item.of("vintageimprovements:cast_iron_sheet"),
      [
        e.recipes.create.deploying(t, [t, "farwater:blaze_core"]),
        e.recipes.create.deploying(t, [
          t,
          "vintageimprovements:cast_iron_spring",
        ]),
        e.recipes.create.deploying(t, [t, "minecraft:blaze_powder"]),
        e.recipes.create.pressing(t, t),
      ]
    )
    .transitionalItem(t)
    .loops(1);
});
