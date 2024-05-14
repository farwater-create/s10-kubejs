// ServerEvents.entityLootTables((e) => {
//   e.addEntity("minecraft:enderman", (table) => {
//     table.addPool((pool) => {
//       pool.rolls = 1;
//       pool.addItem("forbidden_arcanus:ender_pearl_fragment", 1, [1, 2]);
//       pool.addItem("supplementaries:enderman_head").randomChance(0.01);
//     });
//   });
// });

LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("minecraft:enderman")
    .removeLoot("forbidden_arcanus:ender_pearl_fragment")
    .removeLoot("minecraft:ender_pearl");

  event
    .addEntityLootModifier("minecraft:enderman")
    .addLoot("forbidden_arcanus:ender_pearl_fragment")
    .addLoot("forbidden_arcanus:ender_pearl_fragment")
    .randomChance(0.8);
});
