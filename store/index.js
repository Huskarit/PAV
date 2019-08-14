export const state = () => ({
  counter: 0,
  samples: []
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  put(state, samples) {
    state.samples = samples
  }
}
