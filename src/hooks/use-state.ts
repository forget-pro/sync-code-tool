import { reactive } from 'vue'
export function useState<T extends object>(initialState: T) {
  const initial = { ...initialState }
  const state = reactive<T>(initialState)

  const setState = (payload: Partial<T>) => {
    for (const key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        const newValue = payload[key]
        // @ts-ignore
        if (state[key] !== newValue) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ; (state as any)[key] = newValue
        }
      }
    }
  }
  const resetState = () => {
    Object.assign(state, initial)
  }

  // 重置具体属性的值
  const resetProperty = (key: keyof T) => {
    if (Object.prototype.hasOwnProperty.call(initial, key)) {
      // @ts-ignore
      state[key] = initial[key]
    }
  }
  return {
    state,
    setState,
    resetState,
    resetProperty,
    initValue: initial,
  }
}
