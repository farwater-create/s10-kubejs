ServerEvents.recipes((e) => {
  let t = "createappliedkinetics:incomplete_calculation_processor";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:calculation_processor")],
      Item.of("ae2:printed_silicon"),
      [
        e.recipes.create.deploying(t, [
          t,
          Item.of("ae2:printed_calculation_processor"),
        ]),
        e.recipes.create.deploying(t, [
          t,
          "#vintageimprovements:small_springs",
        ]),
        e.recipes.create.deploying(t, [t, "#forge:wires"]),
        e.recipes.create.deploying(t, [t, Item.of("tfmg:screw")]),
        e.recipes.create.pressing(t, t),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "createappliedkinetics:incomplete_logic_processor";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:logic_processor")],
      Item.of("ae2:printed_silicon"),
      [
        e.recipes.create.deploying(t, [
          t,
          Item.of("ae2:printed_logic_processor"),
        ]),
        e.recipes.create.deploying(t, [
          t,
          "#vintageimprovements:small_springs",
        ]),
        e.recipes.create.deploying(t, [t, "#forge:wires"]),
        e.recipes.create.deploying(t, [t, Item.of("tfmg:screw")]),
        e.recipes.create.pressing(t, t),
      ]
    )
    .transitionalItem("createappliedkinetics:incomplete_engineering_processor")
    .loops(1);

  t = "createappliedkinetics:incomplete_engineering_processor";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:engineering_processor")],
      Item.of("ae2:printed_silicon"),
      [
        e.recipes.create.deploying(t, [
          t,
          Item.of("ae2:printed_engineering_processor"),
        ]),
        e.recipes.create.deploying(t, [
          t,
          "#vintageimprovements:small_springs",
        ]),
        e.recipes.create.deploying(t, [t, "#forge:wires"]),
        e.recipes.create.deploying(t, [t, Item.of("tfmg:screw")]),
        e.recipes.create.pressing(t, t),
      ]
    )
    .transitionalItem(t)
    .loops(1);

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
      Ingredient.of("#minecraft:wooden_slabs"),
      [
        e.recipes.create.deploying(t, [t, "create:andesite_alloy"]),
        e.recipes.create.deploying(t, [t, "create:andesite_alloy"]),
        e.recipes.create.deploying(t, [t, "farwater:saw"]),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "create:incomplete_precision_mechanism";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("create:precision_mechanism")],
      Item.of("create:kinetic_mechanism"),
      [
        e.recipes.create.deploying(t, [t, "create:electron_tube"]),
        e.recipes.create.deploying(t, [t, "create:electron_tube"]),
        e.recipes.create.deploying(t, [t, "tfmg:screwdriver"]),
      ]
    )
    .transitionalItem(t)
    .loops(1);

  t = "create:incomplete_sealed_mechanism";
  e.recipes.create
    .sequenced_assembly(
      [Item.of("create:sealed_mechanism")],
      Item.of("create:kinetic_mechanism"),
      [
        e.recipes.create.filling(t, [
          Fluid.of("farwater:liquid_rubber", 200),
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
});
