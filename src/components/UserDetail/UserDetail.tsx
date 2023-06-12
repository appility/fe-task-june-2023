import * as React from 'react'
import {
    Box,
    HStack,
    useBreakpointValue,
    useColorModeValue
  } from '@chakra-ui/react'
  import { User } from '@/models/User'
  
  export type UserDetailProps = {
    user: User
  }

  export const UserDetails = (props: UserDetailProps) => {
    const { username, name, email, address, phone, company } = props.user
    return (
        <Box
            m={2}
            p={4}
            bg="bg-surface"
            boxShadow={{ base: 'none', md: useColorModeValue('sm', 'sm-dark') }}
            borderRadius={useBreakpointValue({ base: 'none', md: 'lg' })}
        >
        <HStack spacing='24px'>
            <Box w="30%">
                <i>Username:</i>
            </Box>
            <Box>
                {username}
            </Box>
        </HStack>
        <HStack spacing='24px'>
            <Box w="30%">
              <i>Fullname:</i>
            </Box>
            <Box>
                {name}
            </Box>
        </HStack>
        <HStack spacing='24px'>
            <Box w="30%">
                <i>Email:</i>
            </Box>
            <Box>
                {email}
            </Box>
        </HStack>
        <HStack spacing='24px'>
            <Box w="30%">
                <i>Address:</i>
            </Box>
            <Box>
            <address>
                {address.street}<br />
                {address.city}<br />
                {address.zipcode}
            </address>
            </Box>
        </HStack>
        <HStack spacing='24px'>
            <Box w="30%">
                <i>Phone:</i>
            </Box>
            <Box>
                {phone}
            </Box>
        </HStack>
        <HStack spacing='24px'>
            <Box w="30%">
                <i>Company:</i>
            </Box>
            <Box>
                {company.name}
            </Box>
        </HStack>
    </Box>
  )
}
  