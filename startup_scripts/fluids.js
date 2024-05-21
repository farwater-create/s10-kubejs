StartupEvents.registry("fluid", (event) => {
  event
    .create("farwater:blazing_blood")
    .displayName("Blazing Blood")
    .stillTexture("farwater:fluid/blazing_blood_still")
    .flowingTexture("farwater:fluid/blazing_blood_flow")
    .temperature(600);
});
