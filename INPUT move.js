const inv = Player.openInventory();
Player.getPlayer().lookAt(0,90)

//TO DIRECT LOOK OF CAMERA
// FACE  (0,90) DIRECT DOWN //(0,-90) DIRECT UP

// INPUT move
// move-forward, yaw, jump, sprint
// jump is true

const inp = Player.createPlayerInput(1, 1, 0, 0, true, false, false);
Player.addInput(inp)

Client.waitTick(20);

// Client.waitTick(time) // Delay in ticks
// (1 tick = 1/20 sec)  (20 tick = 1 sec)  (1200 tick = 1 min)

inv.setSelectedHotbarSlotIndex(5);  // Select hotbar slot 6 (0-8)
Player.getPlayer().interact();  // RIGHT CLICK
