function getRandomMsg(messages) {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

EntityEvents.death((e) => {
  if (e.entity.type == "minecraft:player") {
    e.player.experienceLevel = 0;
    e.player.experienceProgress = 0;
    e.player
      .getInventory()
      .getAllItems()
      .forEach((item) => {
        if (item.damageableItem && Math.random() < 0.5) {
          const currentDamage = item.getDamageValue();
          const durability = item.maxDamage;

          if (currentDamage >= 0.9 * durability) {
            item.setDamageValue(durability - 2);
          } else {
            const maxDamage = durability * 0.95;
            const newDamage = (currentDamage + maxDamage) / 2;
            item.setDamageValue(newDamage);
          }
        }
      });
  }
});

PlayerEvents.respawned((e) => {
  const times =
    e.player.getStats().deaths === 1
      ? "first"
      : e.player.getStats().deaths === 2
      ? "second"
      : `${e.player.getStats().deaths}th`;

  const messages = [
    `You have died ${
      e.player.getStats().deaths
    } times now, how long can your tools last?`,
    `You have been given a ${
      e.player.getStats().deaths === 1
        ? "2nd"
        : e.player.getStats().deaths === 2
        ? "3rd"
        : `${e.player.getStats().deaths + 1}th`
    } chance, but at what cost...`,
    `This is your ${times} time dying. Will you learn from your mistakes?`,
    `You've died ${
      e.player.getStats().deaths
    } times now, your tools took the brunt of the damage...`,
  ];

  e.player.tell(getRandomMsg(messages));
});
