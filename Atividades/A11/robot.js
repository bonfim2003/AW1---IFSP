//-------LEVEL---1

function loop(robot) {
  robot.action = { type: 'move', amount: 40 }
  // your code here
}

//-------LEVEL---2

function loop(robot) {
  robot.action = { type: 'move', amount: 40 }
}

function init(robot) {
  robot.jumpNext = true
}

//-------LEVEL---3

function loop(robot) {
  if (robot.jumpNext) {
    robot.action = { type: 'jump', amount: 10 }
    robot.jumpNext = false
  } else {
    robot.action = { type: 'move', amount: 40 }
    robot.jumpNext = true
  }
}

//-------LEVEL---4

function loop(robot) {
  if (400 < robot.info().x && robot.info().x < 500) {
    robot.action = { type: 'jump', amount: 10 }
  } else {
    robot.action = { type: 'move', amount: 40 }
  }
}

//-------LEVEL---5

function loop(robot) {
  let robotX = robot.info().x
  let landmarks = [360, 500, 560, 760]

  robot.action = { type: 'move', amount: 40 }
  if (
    (landmarks[0] < robotX && robotX < landmarks[1]) ||
    (landmarks[2] < robotX && robotX < landmarks[3])
  ) {
    robot.action = { type: 'jump', amount: 10 }
  }
}

//-------LEVEL---6

function loop(robot) {
  robot.action = { type: 'move', amount: 40 }
  if (robot.info().coins % 2 == 1) {
    robot.action.amount = -40
  }
}

//-------LEVEL---7

function init(robot) {
  robot.oldCoins = 0
  robot.oldEnergy = 100
}

function loop(robot) {
  robot.action = { type: 'move', amount: 40 }
  if (
    robot.info().coins > robot.oldCoins ||
    robot.info().energy > robot.oldEnergy
  ) {
    robot.action = { type: 'jump', amount: 10 }
  }
  robot.oldCoins = robot.info().coins
  robot.oldEnergy = robot.info().energy
}

//-------LEVEL---8

function init(robot) {
  robot.iterationsAfterCoin = 0
}

function loop(robot) {
  if (robot.iterationsAfterCoin > 4) {
    robot.action = { type: 'jump', amount: 10 }
  }
  if (robot.info().coins > 0) {
    robot.iterationsAfterCoin++
  }
}
