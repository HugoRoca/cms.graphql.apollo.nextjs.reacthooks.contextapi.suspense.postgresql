// Dependencies
import fecth from 'node-fetch'
import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

// Configuration
import config from '@config'

export default () => {
  const httpsLink = new HttpLink({
    uri: config.api.uri,
    credentials: config.api.credentials,
    fetch
  })

  const cache = new InMemoryCache({
    dataIdFromObject: object => object.id || null,
    addTypename: false
  })

  const client = new ApolloClient({
    connectToDevTools: true,
    link: ApolloLink.from([httpsLink]),
    cache
  })

  return client
}
