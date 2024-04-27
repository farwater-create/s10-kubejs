const recipeRemovals = [
    // Cataclysm
    { output: "cataclysm:the_incinerator" },
    { output: "cataclysm:bulwark_of_the_flame" },
    { output: "cataclysm:ignitium_helmet" },
    { output: "cataclysm:ignitium_chestplate" },
    { output: "cataclysm:ignitium_elytra_chestplate" },
    { output: "cataclysm:ignitium_leggings" },
    { output: "cataclysm:ignitium_boots" },
];

ServerEvents.recipes((e) => {
 	recipeRemovals.forEach((recipe) => {
    	e.remove(recipe);
 	});
});
