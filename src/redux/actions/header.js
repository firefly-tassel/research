import { CURRENT } from '../action-types'

export const changeCurrent= (data) => {
    return { type: CURRENT, data: data }
}