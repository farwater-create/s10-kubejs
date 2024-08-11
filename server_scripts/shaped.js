ServerEvents.recipes((event) => {
  event.shaped("minecraft:red_mushroom_block", ["MMM", "MMM", "MMM"], {
    M: "minecraft:red_mushroom",
  });

  event.shaped("minecraft:brown_mushroom_block", ["MMM", "MMM", "MMM"], {
    M: "minecraft:brown_mushroom",
  });

  event.shaped("minecraft:mushroom_stem", ["MMM", "MWM", "MMM"], {
    M: "#forge:mushroom",
    W: "minecraft:white_dye",
  });

  event.shaped("farwater:saw", ["  I", " I ", "W  "], {
    W: "#forge:stripped_logs",
    I: "minecraft:iron_ingot",
  });

  event.shaped("create:belt_connector", ["RRR", "RRR"], {
    R: "farwater:cured_rubber",
  });

  event.shaped("tfmg:screwdriver", [" A", "B "], {
    A: "#forge:rods/iron",
    B: "#forge:stripped_logs",
  });
});
