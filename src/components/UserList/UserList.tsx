import * as React from 'react'
import {
    Box,
    Button,
    HStack,
    Icon,
    IconButton,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
  } from '@chakra-ui/react'
  import { FiTrash2 } from 'react-icons/fi'
  import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
  import { User } from '@/models/User'

  export type UserListProps = {
    users: User[]
    onSelect: (id: number) => void
    onDelete: (id: number) => void
  }
  
  export const UserList = (props: UserListProps) => {
    const { users } = props
    return (
    <Table>
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              <HStack spacing="1">
                <Text>Name</Text>
                <Icon as={AiOutlineArrowDown} color="muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          <Th>&nbsp;</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>
              <HStack spacing="3">
                <Box>
                  <Text fontWeight="medium">{user.name}</Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <HStack spacing="1">
                <IconButton
                  onClick={()=>props.onDelete(user.id)}
                  icon={<FiTrash2 fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Delete member"
                />
                <Button 
                  onClick={()=>props.onSelect(user.id)}
                  rightIcon={<AiOutlineArrowRight />} 
                  colorScheme='teal' 
                  variant='outline'>
                    See details
                </Button>
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
  