import { CURRENT } from "../action-types"
import { deepClone } from '../../utils/deepClone'

const initState = {
  current: 'home'
}

export default function headerReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case CURRENT:
      for(let key in data) {
        if(preState.hasOwnProperty(key))
          preState[key] = data[key]
      }
      return deepClone(preState)
    default:
      return preState
  }
}