// CREATE NEW PLAYER INPUT OBJECT
// USE EXAMPLES / TEMPLATE?


// BOOLEAN = True / False
// DOUBLE / FLOAT = Numbers with decimals, not integers (like 0.20 etc)
// Doubles are 64 bit thus more precise, Floats are 32 bit

.createPlayerInput(movementForward, movementSideways, yaw)
movementForward    double    
movementSideways    double    
yaw    double


.createPlayerInput(movementForward, yaw, jumping, sprinting)
movementForward    double    
yaw    double    
jumping    boolean    
sprinting    boolean


.createPlayerInput(movementForward, movementSideways, yaw, pitch, jumping, sneaking, sprinting)
movementForward    double    
movementSideways    double    
yaw    double    
pitch    double    
jumping    boolean    
sneaking    boolean    
sprinting    boolean


.createPlayerInputsFromCsv(csv) 1.4.0
Parses each row of CSV string into a PlayerInput. The capitalization of the header matters.
About the columns:

movementForward and movementSideways as a number
yaw and pitch as an absolute number
jumping, sneaking and sprinting have to be boolean
The separation must be a "," it's a csv...(but spaces don't matter)
Quoted values don't work
