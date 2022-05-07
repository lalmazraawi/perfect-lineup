const validateLineup = (lineup) => {
    if (playerPosition(lineup) && playerCost(lineup) && playerTeam(lineup) && playerGame(lineup)) {
      return true
    } else return false
  }
  
  const playerCost = (lineup) => {
    let totalSalary = lineup.reduce((salary, player) => salary += player.salary, 0)
  
    if (totalSalary > 45000) {
      return false
    } else return true
  }
  
  const playerPosition = (lineup) => {
    const OF = outfield(lineup)
    const pitch = pitcher(lineup)
    const first = firstBase(lineup)
    const second = secondBase(lineup)
    const third = thirdBase(lineup)
    const catchers = catcher(lineup)
    const short = shortStop(lineup)
  
    if (OF && pitch && first && second && third && catchers && short) {
      return true
    }
  
    return false
  }
  
  const outfield = (lineup) => {
    const outfieldPlayers = lineup.filter((player) => player.position === 'OF')
  
    if (outfieldPlayers.length !== 3) {
      return false
    }
  
    return true
  }
  
  const pitcher = (lineup) => {
    const pitcherPlayers = lineup.filter((player) => player.position === 'P')
  
    if (pitcherPlayers.length !== 1) {
      return false
    }
  
    return true
  }
  
  const firstBase = (lineup) => {
    const firstBasePlayers = lineup.filter((player) => player.position === '1B')
  
    if (firstBasePlayers.length !== 1) {
      return false
    }
  
    return true
  }
  
  const secondBase = (lineup) => {
    const secondBasePlayers = lineup.filter((player) => player.position === '2B')
  
    if (secondBasePlayers.length !== 1) {
      return false
    }
  
    return true
  }
  
  const thirdBase = (lineup) => {
    const thirdBasePlayers = lineup.filter((player) => player.position === '3B')
  
    if (thirdBasePlayers.length !== 1) {
      return false
    }
  
    return true
  }
  
  const catcher = (lineup) => {
    const catcherPlayers = lineup.filter((player) => player.position === 'C')
  
    if (catcherPlayers.length !== 1) {
      return false
    }
  
    return true
  }
  const shortStop = (lineup) => {
    const shortStopPlayers = lineup.filter((player) => player.position === 'SS')
  
    if (shortStopPlayers.length !== 1) {
      return false
    }
  
    return true
  }
  
  const playerTeam = (lineup) => {
    const uniqueTeams = [...new Set(lineup.map(player => player.teamId))]
  
    for (let i = 0; i < uniqueTeams.length; i++) {
      const currentTeam = uniqueTeams[i]
  
      const currentLineup = lineup.filter((player) => player.teamId === currentTeam).length
  
      if (currentLineup > 2) {
        return false
      }
    }
  
    return true
  }
  
  const playerGame = (lineup) => {
    const uniqueTeams = [...new Set(lineup.map(player => player.gameId))]
  
    for (let i = 0; i < uniqueTeams.length; i++) {
      const currentTeam = uniqueTeams[i]
  
      const currentLineup = lineup.filter((player) => player.gameId === currentTeam).length
  
      if (currentLineup > 2) {
        return false
      }
    }
  
    return true
  }
  
  module.exports = validateLineup