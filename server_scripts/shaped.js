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

  let head = (name, material) => {
    event.shaped(name, ["MMM", "M M"], {
      M: material,
    });
  };

  let chest = (name, material) => {
    event.shaped(name, ["M M", "MMM", "MMM"], {
      M: material,
    });
  };

  let legs = (name, material) => {
    event.shaped(name, ["MMM", "M M", "M M"], {
      M: material,
    });
  };

  let foot = (name, material) => {
    event.shaped(name, ["M M", "M M"], {
      M: material,
    });
  };
});
