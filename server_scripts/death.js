// function getRandomMsg(messages) {
//   const index = Math.floor(Math.random() * messages.length);
//   return messages[index];
// }

// EntityEvents.death((e) => {
//   if (e.entity.type == "minecraft:player") {
//     e.player.experienceLevel = 0;
//     e.player.experienceProgress = 0;
//     e.player
//       .getInventory()
//       .getAllItems()
//       .forEach((item) => {
//         if (item.damageableItem && Math.random() < 0.5) {
//           const currentDamage = item.getDamageValue();
//           const durability = item.maxDamage;
//           const maxDamage = durability * 0.95;
//           const newDamage = (currentDamage + maxDamage) / 2;

//           item.setDamageValue(newDamage);
//         }
//       });
//   }
// });

// PlayerEvents.respawned((e) => {
//   e.server.runCommandSilent(
//     `/effect give ${e.player.getUsername()} minecraft:slowness 120 1 false`
//   );
//   e.server.runCommandSilent(
//     `/effect give ${e.player.getUsername()} minecraft:blindness 20 0 false`
//   );
//   e.server.runCommandSilent(
//     `/effect give ${e.player.getUsername()} minecraft:unluck 600 2 false`
//   );
//   e.server.runCommandSilent(
//     `/effect give ${e.player.getUsername()} minecraft:hunger 120 0 false`
//   );
//   e.player.setHealth(8);
//   e.player.setSaturation(0);
//   e.player.setFoodLevel(12);

//   const times =
//     e.player.getStats().deaths === 1
//       ? "first"
//       : e.player.getStats().deaths === 2
//       ? "second"
//       : `${e.player.getStats().deaths}th`;

//   const messages = [
//     `You have been given a ${
//       e.player.getStats().deaths === 1
//         ? "2nd"
//         : e.player.getStats().deaths === 2
//         ? "3rd"
//         : `${e.player.getStats().deaths + 1}th`
//     } chance, but at what cost...`,
//     `This is your ${times} time dying. Will you learn from your mistakes?`,
//     `You've died ${
//       e.player.getStats().deaths
//     } times now, your tools took the brunt of the damage...`,
//   ];

//   e.player.tell(getRandomMsg(messages));
// });

// ItemEvents.rightClicked((e) => {
//   const cooldown = 20 * 300;

//   if (
//     e.item.id == "minecraft:milk_bucket" &&
//     e.player.getStats().getTimeSinceDeath() < cooldown
//   ) {
//     const milkSecondsLeft = Math.ceil(
//       (cooldown - e.player.getStats().getTimeSinceDeath()) / 20
//     );

//     const messages = [
//       "Milk won't do anything for you right now...",
//       "You're still feeling the effects of your demise...",
//       "Not quite time for milk yet...",
//       `Try again in ${milkSecondsLeft}s...`,
//       `You need ${milkSecondsLeft}s more to recover before milk can help...`,
//       "You're not ready for milk yet...",
//     ];

//     e.player.tell(getRandomMsg(messages));
//     e.cancel();
//   }
// });
