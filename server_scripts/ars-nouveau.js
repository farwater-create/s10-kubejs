ServerEvents.recipes(event => {
	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "alexsmobs:void_worm_eye",
            "minecraft:ender_pearl",
            "forbidden_arcanus:dark_matter",
            "forbidden_arcanus:dark_matter",
            "forbidden_arcanus:dark_matter",
            "forbidden_arcanus:dark_matter",
            "forbidden_arcanus:dark_matter",
            "minecraft:ender_pearl",
        ],
	    "minecraft:netherite_ingot",
	    "createutilities:void_steel_ingot",
	    6000, // may want to alter source cost
	);
    
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "create:cogwheel",
            "create:cogwheel",
            "create:cogwheel",
            "create:large_cogwheel",
            "create:large_cogwheel",
            "create:large_cogwheel",
            "minecraft:iron_ingot",
        ],
	    "create:golden_sheet",
	    "create:precision_mechanism",
	    1000, // may want to alter source cost
	);
})