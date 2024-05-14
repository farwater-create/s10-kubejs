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
});
