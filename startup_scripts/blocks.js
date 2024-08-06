StartupEvents.registry("block", (event) => {
  event
    .create("farwater:trophy", "cardinal")
    .displayName("Trophy")
    .material("lantern")
    .renderType("cutout")
    .soundType("copper")
    .hardness(1.0)
    .notSolid()
    .box(5, 0, 5, 11, 3, 11,true)
    .box(6, 3, 6, 10, 4, 10, true)
    .box(7, 4, 7, 9, 5, 9, true)
    .box(6, 5, 6, 10, 6, 10, true)
    .box(5, 6, 5, 11, 12, 11, true);

  let machine = (name, layer, light) => {
    let id = name.toLowerCase();
    event
      .create("create:" + id + "_machine", "cardinal")
      .model("create:block/" + id + "_machine")
      .material("lantern")
      .hardness(3.0)
      .displayName(name + " Machine")
      .notSolid()
      .renderType(layer)
      .lightLevel(light);
  };

  machine("Andesite", "solid", 0);
  machine("Brass", "translucent", 0);
  machine("Sealed", "cutout", 0);
  machine("Locomotive", "solid", 0);
  machine("Abstruse", "translucent", 7);
});
