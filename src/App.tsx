import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client'

import { GlobalContextProvider } from './context/GlobalContext'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": import.meta.env.VITE_X_HASURA_ADMIN_SECRET
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </ApolloProvider>
  )
}

export default App
