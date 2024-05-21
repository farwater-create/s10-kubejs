ServerEvents.recipes((e) => {
  e.recipes.create
    .sequenced_assembly(
      // output
      [Item.of("ae2:calculation_processor")],
      // begin
      Item.of("ae2:printed_silicon"),
      [
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("minecraft:redstone"),
        ]),
        e.custom({
          type: "vintageimprovements:vibrating",
          ingredients: [
            {
              item: "ae2:printed_silicon",
            },
          ],
          results: [
            {
              item: "ae2:printed_silicon",
            },
          ],
        }),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("vintageimprovements:small_iron_spring"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("createaddition:electrum_wire"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("ae2:printed_calculation_processor"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("tfmg:screw"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("tfmg:screwdriver"),
        ]),
      ]
    )
    .transitionalItem("ae2:printed_silicon")
    .loops(1);

  e.recipes.create
    .sequenced_assembly(
      // output
      [Item.of("ae2:logic_processor")],
      // begin
      Item.of("ae2:printed_silicon"),
      [
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("minecraft:redstone"),
        ]),
        e.custom({
          type: "vintageimprovements:vibrating",
          ingredients: [
            {
              item: "ae2:printed_silicon",
            },
          ],
          results: [
            {
              item: "ae2:printed_silicon",
            },
          ],
        }),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("vintageimprovements:small_copper_spring"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("createaddition:electrum_wire"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("ae2:printed_logic_processor"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("tfmg:screw"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("tfmg:screwdriver"),
        ]),
      ]
    )
    .transitionalItem("ae2:printed_silicon")
    .loops(1);

  e.recipes.create
    .sequenced_assembly(
      // output
      [Item.of("ae2:engineering_processor")],
      // begin
      Item.of("ae2:printed_silicon"),
      [
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("minecraft:redstone"),
        ]),
        e.custom({
          type: "vintageimprovements:vibrating",
          ingredients: [
            {
              item: "ae2:printed_silicon",
            },
          ],
          results: [
            {
              item: "ae2:printed_silicon",
            },
          ],
        }),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("vintageimprovements:small_silver_spring"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("createaddition:electrum_wire"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("ae2:printed_engineering_processor"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("tfmg:screw"),
        ]),
        e.recipes.create.deploying(Item.of("ae2:printed_silicon"), [
          Item.of("ae2:printed_silicon"),
          Item.of("tfmg:screwdriver"),
        ]),
      ]
    )
    .transitionalItem("ae2:printed_silicon")
    .loops(1);

  e.recipes.create
    .sequenced_assembly(
      // output
      [Item.of("farwater:runic_golden_sheet")],
      // begin
      Item.of("create:golden_sheet"),
      [
        e.recipes.create.filling("farwater:incomplete_runic_golden_sheet", [
          Fluid.of("create_enchantment_industry:ink", 50),
          "farwater:incomplete_runic_golden_sheet",
        ]),
        e.custom({
          type: "vintageimprovements:pressurizing",
          ingredients: [
            {
              item: "farwater:incomplete_runic_golden_sheet",
            },
            {
              item: "forbidden_arcanus:rune",
            },
          ],
          results: [
            {
              item: "farwater:incomplete_runic_golden_sheet",
            },
          ],
          processingTime: 800,
        }),
        e.recipes.create.filling("farwater:incomplete_runic_golden_sheet", [
          Fluid.of("create_enchantment_industry:experience", 50),
          "farwater:incomplete_runic_golden_sheet",
        ]),
        e.custom({
          type: "vintageimprovements:vibrating",
          ingredients: [
            {
              item: "farwater:incomplete_runic_golden_sheet",
            },
          ],
          results: [
            {
              item: "farwater:incomplete_runic_golden_sheet",
            },
          ],
        }),
      ]
    )
    .transitionalItem("farwater:incomplete_runic_golden_sheet")
    .loops(1);
});
