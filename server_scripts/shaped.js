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

  event.shaped("create:andesite_machine", [" A ", "ABA", " A "], {
    A: "#create:kinetic_mechanisms",
    B: "create:andesite_casing",
  });

  event.shaped("create:sealed_machine", [" A ", "ABA", " A "], {
    A: "create:sealed_mechanism",
    B: "create:copper_casing",
  });

  event.shaped("create:brass_machine", [" A ", "ABA", " A "], {
    A: "create:precision_mechanism",
    B: "create:brass_casing",
  });
});
