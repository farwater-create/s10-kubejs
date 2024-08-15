// input: "Item"
// outputs: [
//      ["Item", Chance],
//      ["Item", Chance],
//      ...
ServerEvents.recipes((e) => {
  [
    {
      input: "tfmg:fireclay",
      outputs: [
        ["tfmg:fireclay_ball", 1],
        ["tfmg:fireclay_ball", 1],
        ["tfmg:fireclay_ball", 1],
        ["tfmg:fireclay_ball", 1],
        ["tfmg:fireclay_ball", 0.6],
      ],
    },
  ].forEach((recipe) => {
    let cleanoutputs = [];
    recipe.outputs.forEach((output) => {
      if (output[1] == 1) cleanoutputs.push(output[0]);
      else {
        cleanoutputs.push(Item.of(output[0]).withChance(output[1]));
      }
    });
    e.recipes.create.crushing(cleanoutputs, recipe.input);
  });
});
