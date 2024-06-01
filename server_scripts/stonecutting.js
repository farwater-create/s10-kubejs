ServerEvents.recipes(e => {
    [
    "railways:slashed_locometal",
    "railways:riveted_locometal",
    "railways:locometal_pillar",
    "railways:locometal_smokebox",
    "railways:plated_locometal",
    "railways:flat_slashed_locometal",
    "railways:flat_riveted_locometal",
    ].forEach((item) => {
      e.stonecutting(item, "create:industrial_iron_block");
    )
});