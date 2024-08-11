ServerEvents.recipes((e) => {
  e.custom({
    type: "iceandfire:dragonforge",
    dragon_type: "fire",
    cook_time: 1000,
    input: {
      item: "minecraft:netherite_ingot",
    },
    blood: {
      item: "iceandfire:fire_dragon_blood",
    },
    result: {
      item: "iceandfire:dragonsteel_fire_ingot",
    },
  });

  e.custom({
    type: "iceandfire:dragonforge",
    dragon_type: "ice",
    cook_time: 1000,
    input: {
      item: "minecraft:netherite_ingot",
    },
    blood: {
      item: "iceandfire:ice_dragon_blood",
    },
    result: {
      item: "iceandfire:dragonsteel_ice_ingot",
    },
  });

  e.custom({
    type: "iceandfire:dragonforge",
    dragon_type: "lightning",
    cook_time: 1000,
    input: {
      item: "minecraft:netherite_ingot",
    },
    blood: {
      item: "iceandfire:lightning_dragon_blood",
    },
    result: {
      item: "iceandfire:dragonsteel_lightning_ingot",
    },
  });
});
