StartupEvents.registry("block", (event) => {
  let machine = (name, layer) => {
    let id = name.toLowerCase();
    event
      .create("create:" + id + "_machine")
      .model("create:block/" + id + "_machine")
      .material("lantern")
      .hardness(3.0)
      .displayName(name + " Machine")
      .notSolid()
      .renderType(layer);
  };

  machine("Andesite", "solid");
  machine("Brass", "translucent");
  machine("Sealed", "cutout");
  machine("Locomotive", "solid");
});
