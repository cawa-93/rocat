
const state = {
    score: 0
}

export function getScore() {
    return state.score
}

export function addScore(num = 1) {
    state.score += num
}

export function clearScore() {
    state.score = 0
}
