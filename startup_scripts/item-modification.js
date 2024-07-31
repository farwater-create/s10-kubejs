const $UUID = Java.loadClass("java.util.UUID");

ItemEvents.modification((event) => {
  event.modify("create:blaze_cake", (item) => {
    item.burnTime = 4 * 60 * 20;
  });

  event.modify("farwater:blazing_blood", (item) => {
    item.burnTime = 3 * 60 * 20;
  });

  event.modify("farwater:blazing_blood_bucket", (item) => {
    item.burnTime = 3 * 60 * 20;
  });

  let manaArmor = [
    ["twilightforest:ironwood_helmet", 10],
    ["twilightforest:ironwood_chestplate", 15],
    ["twilightforest:ironwood_leggings", 15],
    ["twilightforest:ironwood_boots", 10],

    ["twilightforest:steeleaf_helmet", 5],
    ["twilightforest:steeleaf_chestplate", 10],
    ["twilightforest:steeleaf_leggings", 10],
    ["twilightforest:steeleaf_boots", 5],

    ["twilightforest:phantom_helmet", 60, 2],
    ["twilightforest:phantom_chestplate", 80, 2],

    ["twilightforest:fiery_helmet", 20],
    ["twilightforest:fiery_chestplate", 30, 1],
    ["twilightforest:fiery_leggings", 30, 1],
    ["twilightforest:fiery_boots", 20],
  ];

  manaArmor.forEach(([itemName, mana, manaRegen]) => {
    event.modify(itemName, (item) => {
      item.addAttribute(
        "ars_nouveau:ars_nouveau.perk.max_mana",
        $UUID.randomUUID(),
        "Max Mana",
        mana,
        "addition"
      );

      if (manaRegen) {
        item.addAttribute(
          "ars_nouveau:ars_nouveau.perk.mana_regen",
          $UUID.randomUUID(),
          "Mana Regen",
          manaRegen,
          "addition"
        );
      }
    });
  });

  let machine = (name) => {
    let id = name.toLowerCase();
    event.modify("create:" + id + "_machine", (item) => {
      item.maxStackSize = 64;
      item.rarity = "RARE";
    });
  };

  machine("Andesite");
  machine("Brass");
  machine("Sealed");
  machine("Locomotive");

  event.modify("minecraft:honey_block", (item) => {
    item.foodProperties = (food) => {
      food.hunger(2);
      food.saturation(3);
    };
  });
});
