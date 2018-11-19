const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "position: G" },
    { number: 2, name: "Dave Defender", position: "position: D" },
    { number: 3, name: "Sam Sweeper", position: "position: D" },
    { number: 4, name: "Matt Midfielder", position: "position: M" },
    { number: 5, name: "William Winger", position: "position: M" },
    { number: 6, name: "Fillipe Forward", position: "position: F" }
  ],
  all: function () { return this.players },
  get: function (id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI;