ServerEvents.tags("item", (event) => {
  event.add("create:kinetic_mechanisms", "create:makeshift_kinetic_mechanism");
  event.add("create:kinetic_mechanisms", "create:kinetic_mechanism");

  event.add("minecraft:trim_templates", "create:crafting_blueprint");

  event.add("create:mechanical_pumps", "create:mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:aluminium_mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:plastic_mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:brass_mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:cast_iron_mechanical_pump");
  event.add("create:mechanical_pumps", "tfmg:steel_mechanical_pump");
});
