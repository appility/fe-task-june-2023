import * as React from "react"
import { useState } from "react"
import {
    useQuery,
    useMutation,
    useQueryClient,
  } from '@tanstack/react-query'
  import { getUsers, deleteUserById} from '@/clientProvider/queryClient'
import {
    Box,
    Center,
    Container,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    SimpleGrid,
    Spinner,
    Stack,
    Text,
  } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { UserList } from '@/components/UserList/UserList'
import { UserDetails } from "@/components/UserDetail/UserDetail"
import { User } from "@/models/User"

const Users = () => {
    const queryClient = useQueryClient()
    const [ selectedUserId, setSelectedUserId ] = useState<number | undefined>()
    const { data: users, isLoading} = useQuery({ queryKey: ['users'], queryFn: getUsers })

    const mutation = useMutation({
      mutationFn: deleteUserById,
      onMutate: async ({id}) => {
        await queryClient.cancelQueries(['users'])
        const previousUsers = queryClient.getQueryData(['users'])
        queryClient.setQueryData(['users'], (old: any) => old.filter((t: User) => t.id !== id))
        return { previousUsers }
      },
    })

    const selectedUser = users && users.find(user => user.id === selectedUserId)

    const handleUserSelect = (id: number) => {
        setSelectedUserId(id)
    }

    const handleUserDelete = (id: number) => {
        mutation.mutate({id})
    }

    if (isLoading) return <Center h='100px'>
            <Spinner />
    </Center>

    return (
        <Container py={{ base: '4', md: '8' }} px={{ base: '0', md: 8 }}>
        <Box
            bg="bg-surface"
            boxShadow={{ base: 'none', md: 'sm' }}
            borderRadius={'lg'}
        >
            <Stack spacing="5">
            <Box px={{ base: '4', md: '6' }} pt="5">
                <Stack direction={{ base: 'column', md: 'row' }} justify="space-between">
                <Text fontSize="lg" fontWeight="medium">
                    Members
                </Text>
                <InputGroup maxW="xs">
                    <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="muted" boxSize="5" />
                    </InputLeftElement>
                    <Input placeholder="Search" />
                </InputGroup>
                </Stack>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Box overflowX="auto">
                    <UserList 
                      users={users || []} 
                      onSelect={handleUserSelect}
                      onDelete={handleUserDelete}
                      />
                </Box>
                <Box overflowX="auto">
                    { selectedUser && <UserDetails user={selectedUser}/> }
                </Box>
            </SimpleGrid>
            </Stack>
        </Box>
        </Container>
    )
}

export default Users
