import { State } from '../Shared/types'
import { getUserState } from './graphql/getUserState.client'
import { User } from './models/User'

interface UserUpdateInput {
  user: {
    name?: string
    sex?: string
    birthday?: string
    images?: string[]
    bio?: string
  }
}

export const UserResolver = {
  Mutation: {
    updateUser(_, input: UserUpdateInput, { cache }) {
      const previousState = cache.readQuery({
        query: getUserState
      })
      const data = {
        UserState: {
          ...previousState.UserState,
          ...input.user
        }
      }
      cache.writeQuery({
        data,
        query: getUserState
      })
      return
    },
    resetUser(_, {}, { cache }) {
      const data = {
        UserState: {
          ...UserState
        }
      }
      cache.writeQuery({
        data,
        query: getUserState
      })
      return
    }
  }
}

interface UserState extends State, User {}

export const UserState: UserState = {
  __typename: 'User',
  id: 'state',
  name: '',
  bio: '',
  email: '',
  birthday: 0,
  emailConfirmed: false,
  images: [],
  phoneNumber: '',
  sex: ''
}
