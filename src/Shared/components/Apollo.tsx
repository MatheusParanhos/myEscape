import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { merge } from 'lodash'

import { CachePersistor } from 'apollo-cache-persist'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { withClientState } from 'apollo-link-state'
import { AsyncStorage } from 'react-native'
import { UserResolver } from '../../User/UserState';

// import { AuthResolver, AuthState } from '../Auth/AuthState'
// import { getToken } from '../Auth/graphql'
// import { UserResolver, UserState } from '../User/UserState'

export const cache = new InMemoryCache()

// @ts-ignore
export const persistor = new CachePersistor({
  cache,
  storage: AsyncStorage,
  debug: true
})

export const cleanPersistor = () => persistor.purge()

// const bearerLink = setContext(async (_, { headers, cache }) => {
//   const {
//     AuthState: { token }
//   } = cache.readQuery({ query: getToken })
//   console.log('Token at bearer is:', { token })
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   }
// })

 const resolvers = merge( UserResolver )

// const defaults = { AuthState, UserState }

const stateLink = withClientState({
  cache,
  resolvers,
 // defaults,
  typeDefs: [
    `
      type updateUserInput {
        name: String
        sex: String
        birthday: String
        images: [String]
        bio: String
      }
    `
  ]
})

export const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
   // bearerLink,
    // new HttpLink({
    //   // uri: 'http://localhost:4000/dev/graphql/'
    // })
  ]),
  cache
})
