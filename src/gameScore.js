
const state = {
    score: 0
}

export function useScore(value) {
    return
}

export function addScore(num = 1) {
    state.score += num
}

export function clearScore() {
    state.score = 0
}
