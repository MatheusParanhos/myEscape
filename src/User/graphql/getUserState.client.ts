import gql from 'graphql-tag'

export const getUserState = gql`
  query {
    UserState @client {
      __typename
      id
      name
      bio
      email
      birthday
      emailConfirmed
      images
      phoneNumber
      sex
    }
  }
`
