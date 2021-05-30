import { REQUEST_ERROR } from '../constans/system'

export type RequestErrorAction = {
  type: typeof REQUEST_ERROR
}

export const requestError = (): RequestErrorAction => ({
  type: REQUEST_ERROR
})