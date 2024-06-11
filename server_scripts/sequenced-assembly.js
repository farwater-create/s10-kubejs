ServerEvents.recipes((e) => {
  e.recipes.create
    .sequenced_assembly(
      // output
      [Item.of("ae2:calculation_processor")],
      // begin
      Item.of("ae2:printed_silicon"),
      [
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_calculation_processor"),
          [
            Item.of("createappliedkinetics:incomplete_calculation_processor"),
            Item.of("ae2:printed_calculation_processor"),
          ]
        ),
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_calculation_processor"),
          [
            Item.of("createappliedkinetics:incomplete_calculation_processor"),
            "#vintageimprovements:small_springs",
          ]
        ),
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_calculation_processor"),
          [
            Item.of("createappliedkinetics:incomplete_calculation_processor"),
            "#forge:wires",
          ]
        ),
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_calculation_processor"),
          [
            Item.of("createappliedkinetics:incomplete_calculation_processor"),
            Item.of("tfmg:screw"),
          ]
        ),
        e.recipes.create.pressing(
          Item.of("createappliedkinetics:incomplete_calculation_processor"),
          Item.of("createappliedkinetics:incomplete_calculation_processor")
        ),
      ]
    )
    .transitionalItem("createappliedkinetics:incomplete_calculation_processor")
    .loops(1);

  e.recipes.create
    .sequenced_assembly(
      // output
      [Item.of("ae2:logic_processor")],
      // begin
      Item.of("ae2:printed_silicon"),
      [
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_logic_processor"),
          [
            Item.of("createappliedkinetics:incomplete_logic_processor"),
            Item.of("ae2:printed_logic_processor"),
          ]
        ),
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_logic_processor"),
          [
            Item.of("createappliedkinetics:incomplete_logic_processor"),
            "#vintageimprovements:small_springs",
          ]
        ),
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_logic_processor"),
          [
            Item.of("createappliedkinetics:incomplete_logic_processor"),
            "#forge:wires",
          ]
        ),
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_logic_processor"),
          [
            Item.of("createappliedkinetics:incomplete_logic_processor"),
            Item.of("tfmg:screw"),
          ]
        ),
        e.recipes.create.pressing(
          Item.of("createappliedkinetics:incomplete_logic_processor"),
          Item.of("createappliedkinetics:incomplete_logic_processor")
        ),
      ]
    )
    .transitionalItem("createappliedkinetics:incomplete_engineering_processor")
    .loops(1);

  e.recipes.create
    .sequenced_assembly(
      // output
      [Item.of("ae2:engineering_processor")],
      // begin
      Item.of("ae2:printed_silicon"),
      [
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_engineering_processor"),
          [
            Item.of("createappliedkinetics:incomplete_engineering_processor"),
            Item.of("ae2:printed_engineering_processor"),
          ]
        ),
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_engineering_processor"),
          [
            Item.of("createappliedkinetics:incomplete_engineering_processor"),
            "#vintageimprovements:small_springs",
          ]
        ),
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_engineering_processor"),
          [
            Item.of("createappliedkinetics:incomplete_engineering_processor"),
            "#forge:wires",
          ]
        ),
        e.recipes.create.deploying(
          Item.of("createappliedkinetics:incomplete_engineering_processor"),
          [
            Item.of("createappliedkinetics:incomplete_engineering_processor"),
            Item.of("tfmg:screw"),
          ]
        ),
        e.recipes.create.pressing(
          Item.of("createappliedkinetics:incomplete_engineering_processor"),
          Item.of("createappliedkinetics:incomplete_engineering_processor")
        ),
      ]
    )
    .transitionalItem("createappliedkinetics:incomplete_engineering_processor")
    .loops(1);

  e.recipes.create
    .sequenced_assembly(
      // output
      [Item.of("farwater:enchanted_golden_sheet")],
      // begin
      Item.of("create:golden_sheet"),
      [
        e.recipes.create.filling("farwater:incomplete_enchanted_golden_sheet", [
          Fluid.of("create_enchantment_industry:ink", 50),
          "farwater:incomplete_enchanted_golden_sheet",
        ]),
        e.recipes.create.filling("farwater:incomplete_enchanted_golden_sheet", [
          Fluid.of("create_enchantment_industry:experience", 50),
          "farwater:incomplete_enchanted_golden_sheet",
        ]),
        e.custom({
          type: "vintageimprovements:vibrating",
          ingredients: [
            {
              item: "farwater:incomplete_enchanted_golden_sheet",
            },
          ],
          results: [
            {
              item: "farwater:incomplete_enchanted_golden_sheet",
            },
          ],
        }),
      ]
    )
    .transitionalItem("farwater:incomplete_enchanted_golden_sheet")
    .loops(1);
});
