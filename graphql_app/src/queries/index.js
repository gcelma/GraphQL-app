import gql from 'graphql-tag'

export const CLIENTS_QUERY = gql`{
    getClients {
        id
        name
        surname
        company
        emails {
          email
        }
        age
        profile
        orders {
          product
          price
        }
      }
}`