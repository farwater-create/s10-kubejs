StartupEvents.registry("fluid", (event) => {
  event
    .create("farwater:blazing_blood")
    .displayName("Blazing Blood")
    .stillTexture("farwater:fluid/blazing_blood_still")
    .flowingTexture("farwater:fluid/blazing_blood_flow")
    .temperature(600);

  event
    .create("farwater:magebloom_juice")
    .displayName("Magebloom Juice")
    .stillTexture("farwater:fluid/magebloom_juice_still")
    .flowingTexture("farwater:fluid/magebloom_juice_flow")
    .temperature(60);

  event
    .create("farwater:sourceberry_juice")
    .displayName("Sourceberry Juice")
    .stillTexture("farwater:fluid/sourceberry_juice_still")
    .flowingTexture("farwater:fluid/sourceberry_juice_flow")
    .temperature(60);

  event
    .create("farwater:source_mixture")
    .displayName("Source Mixture")
    .stillTexture("farwater:fluid/source_mixture_still")
    .flowingTexture("farwater:fluid/source_mixture_flow")
    .temperature(60);

  event
    .create("farwater:magesource_mixture")
    .displayName("Magesource Mixture")
    .stillTexture("farwater:fluid/magesource_mixture_still")
    .flowingTexture("farwater:fluid/magesource_mixture_flow")
    .temperature(60);

  event
    .create("farwater:liquid_rubber")
    .displayName("Liquid Rubber")
    .stillTexture("farwater:fluid/liquid_rubber_still")
    .flowingTexture("farwater:fluid/liquid_rubber_flow")
    .temperature(400);
});
