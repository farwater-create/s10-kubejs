let bannedMobs = [
  "minecraft:creeper",
  "realmrpg_creep:creepling",
  "realmrpg_creep:halloweed",
  "realmrpg_demons:chort",
];

let bannedWorldMobs = [
  //   {
  //     world: "moon",
  //     mobs: [
  //       "minecraft:zombified_piglin",
  //       "minecraft:piglin",
  //       "minecraft:piglin_brute",
  //     ],
  //   },
];

EntityEvents.spawned((event) => {
  const { entity } = event;

  if (typeof entity !== null) {
    let entityName = entity.getType();

    bannedMobs.forEach((bannedMob) => {
      if (entityName === bannedMob) {
        event.cancel();
      }
    });

    let world = entity.level.getDimension().getPath();

    bannedWorldMobs.forEach((bannedBiomeMob) => {
      if (
        bannedBiomeMob.world === world &&
        bannedBiomeMob.mobs.includes(entityName)
      ) {
        event.cancel();
      }
    });
  }
});
