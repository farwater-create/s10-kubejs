const recipeRemovals = [
    // Cataclysm
    { output: "cataclysm:the_incinerator" },
    { output: "cataclysm:bulwark_of_the_flame" },
    { output: "cataclysm:ignitium_helmet" },
    { output: "cataclysm:ignitium_chestplate" },
    { output: "cataclysm:ignitium_elytra_chestplate" },
    { output: "cataclysm:ignitium_leggings" },
    { output: "cataclysm:ignitium_boots" },
    
    // Ars Nouveau
     { output: 'ars_nouveau:stable_warp_scroll' },
    { output: 'ars_nouveau:warp_scroll' },
    
    // Alex's caves
    { output: 'alexscaves:burrowing_arrow' },
    { output: 'alexscaves:nuclear_bomb'}
];
ServerEvents.recipes((e) => {
 	recipeRemovals.forEach((recipe) => {
    	e.remove(recipe);
 	});
});
