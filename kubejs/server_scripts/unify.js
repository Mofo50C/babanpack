// priority: 0

const unifiedMetal = (material, ore, block, ingot, nugget, dust, plate, raw, rawBlock) => {
    return {
        name: material,
        ore: ore,
        block: block,
        ingot: ingot,
        nugget: nugget,
        dust: dust,
        plate: plate,
        raw: raw,
        rawBlock: rawBlock
    }
}

const unifiedMetals = [
    unifiedMetal("iron",  "minecraft:iron_ore", "minecraft:iron_block", "minecraft:iron_ingot", "minecraft:iron_nugget", "thermal:iron_dust", "thermal:iron_plate", "minecraft:raw_iron", "minecraft:raw_iron_block"),
    unifiedMetal("gold",  "minecraft:gold_ore", "minecraft:gold_block", "minecraft:gold_ingot", "minecraft:gold_nugget", "thermal:gold_dust", "thermal:gold_plate", "minecraft:raw_gold", "minecraft:raw_gold_block"),
    unifiedMetal("copper",  "minecraft:copper_ore", "minecraft:copper_block", "minecraft:copper_ingot", "thermal:copper_nugget", "thermal:copper_dust", "thermal:copper_plate", "minecraft:raw_copper", "minecraft:raw_copper_block"),
    unifiedMetal("tin", "thermal:tin_ore", "thermal:tin_block", "thermal:tin_ingot", "thermal:tin_nugget", "thermal:tin_dust", "thermal:tin_plate", "thermal:raw_tin", "thermal:raw_tin_block"),
    unifiedMetal("lead", "thermal:lead_ore", "thermal:lead_block", "thermal:lead_ingot", "thermal:lead_nugget", "thermal:lead_dust", "thermal:lead_plate", "thermal:raw_lead", "thermal:raw_lead_block"),
    unifiedMetal("nickel", "thermal:nickel_ore", "thermal:nickel_block", "thermal:nickel_ingot", "thermal:nickel_nugget", "thermal:nickel_dust", "thermal:nickel_plate", "thermal:raw_nickel", "thermal:raw_nickel_block"),
    unifiedMetal("silver", "thermal:silver_ore", "thermal:silver_block", "thermal:silver_ingot", "thermal:silver_nugget", "thermal:silver_dust", "thermal:silver_plate", "thermal:raw_silver", "thermal:raw_silver_block"),
    unifiedMetal("uranium", "mekanism:uranium_ore", "immersiveengineering:storage_uranium", 'immersiveengineering:ingot_uranium', 'immersiveengineering:nugget_uranium', 'immersiveengineering:dust_uranium', 'immersiveengineering:plate_uranium', 'immersiveengineering:raw_uranium', 'immersiveengineering:raw_block_uranium'),
    unifiedMetal("bronze", "", "thermal:bronze_block", "thermal:bronze_ingot", "thermal:bronze_nugget", "thermal:bronze_dust", "thermal:bronze_plate", "", ""),
    unifiedMetal("constantan", "", "thermal:constantan_block", "thermal:constantan_ingot", "thermal:constantan_nugget", "thermal:constantan_dust", "thermal:constantan_plate", "", ""),
    unifiedMetal("electrum", "", "thermal:electrum_block", "thermal:electrum_ingot", "thermal:electrum_nugget", "thermal:electrum_dust", "thermal:electrum_plate", "", ""),
    unifiedMetal("steel", "", "immersiveengineering:storage_steel", 'immersiveengineering:ingot_steel', 'immersiveengineering:nugget_steel', 'immersiveengineering:dust_steel', 'immersiveengineering:plate_steel', "", ""),
]

const unifiedDusts = [
    { name: "quartz", dust: "thermal:quartz_dust" },
    { name: "diamond", dust: "thermal:diamond_dust" },
    { name: "emerald", dust: "thermal:emerald_dust" },
    { name: "lapis", dust: "thermal:lapis_dust" },
    { name: "netherite", dust: "thermal:netherite_dust" },
    { name: "ender_pearl", dust: "thermal:ender_pearl_dust" },
    { name: "sulfur", dust: "thermal:sulfur_dust" }
]

onEvent('recipes', event => {
    const replaceIO = (type, material, pref) => {
        let tagString = `#forge:${type}/${material}`
        event.replaceInput({}, tagString, tagString)
        event.replaceOutput({}, tagString, pref)
    }

    event.replaceInput({}, "#forge:coal_coke", "#forge:coal_coke")
    event.replaceOutput({}, "#forge:coal_coke", 'immersiveengineering:coal_coke')
    event.replaceInput({}, '#forge:storage_blocks/coal_coke', '#forge:storage_blocks/coal_coke')
    event.replaceOutput({}, '#forge:storage_blocks/coal_coke', 'immersiveengineering:coke')

    unifiedMetals.forEach(metal => {
        replaceIO("storage_blocks", metal.name, metal.block)
        replaceIO("ingots", metal.name, metal.ingot)
        replaceIO("dusts", metal.name, metal.dust)
        replaceIO("nuggets", metal.name, metal.nugget)
        replaceIO("plates", metal.name, metal.plate)
        if (metal.ore !== "") {
            replaceIO("ores", metal.name, metal.ore)
            replaceIO("raw_materials", metal.name, metal.raw)
            replaceIO("storage_blocks", `raw_${metal.name}`, metal.rawBlock)
        }
    })

    unifiedDusts.forEach(dust => {
        replaceIO("dusts", dust.name, dust.dust)
    })
})
