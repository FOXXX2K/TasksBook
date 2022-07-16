export default {
  ADD_TASK_WORK(state, payload) {
    state.tasks.push(payload.task) 
  },
  COMPLETE_TASK_WORK(state, payload) {
    state.tasks.splice(payload.posicaoTask, 1)
    state.tasksCompleteds.push(payload.task)
  },
  EDIT_TASK_WORK(state, payload) {
    state.tasks.splice(payload.posicaoTask, 1, payload.newtask)
  },
  DELETE_TASK_WORK(state, payload) {
    state.tasksDeleteds++
    state.tasks.splice(payload, 1)
  }
}