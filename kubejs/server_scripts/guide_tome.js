const guideTome = Item.of('eccentrictome:tome', '{"eccentrictome:mods":{advancedperipherals:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}}},apotheosis:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},botania:{0:{Count:1b,id:"botania:lexicon"}},immersiveengineering:{0:{Count:1b,id:"immersiveengineering:manual"}},littlelogistics:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"littlelogistics:guide"}}},mahoutsukai:{0:{Count:1b,id:"mahoutsukai:guidebook"}},productivebees:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"productivebees:guide"}}},rftoolsbase:{0:{Count:1b,id:"rftoolsbase:manual"}},solcarrot:{0:{Count:1b,id:"solcarrot:food_book"}},storagenetwork:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"storagenetwork:network_book"}}},tconstruct:{0:{Count:1b,id:"tconstruct:mighty_smelting"},1:{Count:1b,id:"tconstruct:puny_smelting"},2:{Count:1b,id:"tconstruct:encyclopedia",tag:{mantle:{book:{current_page:"intro.forward"}}}},3:{Count:1b,id:"tconstruct:fantastic_foundry",tag:{mantle:{book:{current_page:""}}}},4:{Count:1b,id:"tconstruct:tinkers_gadgetry",tag:{mantle:{book:{current_page:""}}}},5:{Count:1b,id:"tconstruct:materials_and_you"}},thermal:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}}},"eccentrictome:version":1}')

onEvent('player.logged_in', event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // Give some items to player
      event.player.give(guideTome)
    }
})

onEvent("recipes", event => {
    event.shapeless(guideTome, ["minecraft:book", "minecraft:cobblestone"])
})