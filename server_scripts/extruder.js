ServerEvents.recipes((e) => {
  e.custom({
    type: "create_mechanical_extruder:extruding",
    ingredients: [
      {
        fluid: "minecraft:water",
        amount: 1000,
      },
      {
        fluid: "minecraft:lava",
        amount: 1000,
      },
    ],
    catalyst: {
      item: "minecraft:quartz_block",
    },
    result: {
      item: "minecraft:diorite",
    },
  });
  
    e.custom({
    type: "create_mechanical_extruder:extruding",
    ingredients: [
      {
        fluid: "minecraft:water",
        amount: 1000,
      },
      {
        fluid: "minecraft:lava",
        amount: 1000,
      },
    ],
    catalyst: {
      item: "minecraft:tuff",
    },
    result: {
      item: "minecraft:dripstone_block",
    },
  });

  e.custom({
    type: "create_mechanical_extruder:extruding",
    ingredients: [
      {
        fluid: "create:honey",
        amount: 1000,
      },
      {
        fluid: "minecraft:lava",
        amount: 1000,
      },
    ],
    result: {
      item: "create:limestone",
    },
  });

  e.custom({
    type: "create_mechanical_extruder:extruding",
    ingredients: [
      {
        fluid: "create:chocolate",
        amount: 1000,
      },
      {
        fluid: "minecraft:lava",
        amount: 1000,
      },
    ],
    result: {
      item: "create:scoria",
    },
  });
});
