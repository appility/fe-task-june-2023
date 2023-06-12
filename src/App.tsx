import * as React from "react"
import { QueryClientProvider } from '@tanstack/react-query'
import  queryClient from '@/clientProvider/queryClient';
import { GlobalStateProvider } from "@/context/globalStore";
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { theme } from '@/lib/theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage'
import Login from './pages/login/login'
import Users from './pages/users/users'

export const App = () => (
  <GlobalStateProvider>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route index path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  </GlobalStateProvider>
)
