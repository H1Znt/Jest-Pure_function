const players = {
  healthy: {
    message: 'healthy'
  },
  wounded: {
    message: 'wounded'
  },
  critical: {
    message: 'critical'
  },
}

export default function calculateOfHealth (obj) {
    if (obj.health > 50) {
      return players.healthy.message;
    }
    if (obj.health >= 15 & obj.health <= 50) {
      return players.wounded.message;
    }
    if (obj.health < 15) {
      return players.critical.message;
    }
}