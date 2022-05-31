const guideTome = Item.of('akashictome:tome', '{"akashictome:data":{advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook",tag:{"akashictome:displayName":{text:\'{"translate":"item.ars_nouveau.worn_notebook"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.ars_nouveau.worn_notebook"}]}\'}}},botania:{Count:1b,id:"botania:lexicon"},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},littlelogistics:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"Little Logistics Guide"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"Little Logistics Guide"}]}\'},"patchouli:book":"littlelogistics:guide"}},mahoutsukai:{Count:1b,id:"mahoutsukai:guidebook"},productivebees:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"productivebees:guide"}},rftoolsbase:{Count:1b,id:"rftoolsbase:manual"},storagenetwork:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"storagenetwork:network_book"}},tconstruct:{Count:1b,id:"tconstruct:encyclopedia",tag:{"akashictome:displayName":{text:\'{"translate":"item.tconstruct.encyclopedia"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.tconstruct.encyclopedia"}]}\'},mantle:{book:{current_page:""}}}},thermal:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}},"akashictome:is_morphing":1b}')

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