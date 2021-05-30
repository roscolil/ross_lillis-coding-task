import header from './header'
import commands from './commands'

// ------------------------- DECLARE & CALL MAIN PROGRAM FUNCTION ------------------------- //
const mainGame = () => {
  // Display greeting
  header.printHeading()
  header.printInstructions()

  // Get player name
  commands.getName()

}

mainGame()