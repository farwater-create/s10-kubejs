ServerEvents.recipes(event => {
    event.shaped("minecraft:red_mushroom_block", [
        "MMM", 
        "MMM",
        "MMM"
      ], {
        M: "minecraft:red_mushroom"
      }
    ),
    
    event.shaped("minecraft:brown_mushroom_block", [
        "MMM", 
        "MMM",
        "MMM"   
      ], {
        M: "minecraft:brown_mushroom"
      }
    ),
    
    event.shaped("minecraft:mushroom_stem", [
        "MMM", 
        "MWM",
        "MMM"  
      ], {
        M: "#farwater:mushroom",
        W: "minecraft:white_dye"
      }
    ),
}
