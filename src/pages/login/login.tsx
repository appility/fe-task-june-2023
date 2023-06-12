import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Input,
    Stack,
  } from '@chakra-ui/react'
import { PasswordField } from "@/components/PasswordField/PasswordField"

type Data = { 
    email: string,
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const { 
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<Data>({mode: "onChange"})

    const handleSignIn = async (values: Data)=> {
        navigate("/users")
        reset()
    }
    return (
        <Container maxW="lg" py={{ base: '2', md: '4' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={{ base: 'xs', md: 'sm' }}>Log in</Heading>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg-surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <form onSubmit={handleSubmit(handleSignIn)} noValidate>
              <Stack spacing="6">
                  <Stack spacing="5">
                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input {...register("email", { 
                        required: "Email is required",
                        validate: {
                            minLength: (v) => v.length >= 8 || "The email should have at least 7 characters",
                            matchPattern: (v) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                            "Email address must be a valid address",
                        },
                     })}
                    id="email" name="email" type="email" required={false} autoFocus={true}
                    aria-invalid={errors.email ? "true" : "false"} />
                    {!errors.email ? (
                        <FormHelperText fontSize='xs'>
                        Enter the email you'd like to use.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage fontSize='xs'>{errors.email.message}</FormErrorMessage>
                    )}
                  </FormControl>
                  <PasswordField error={errors.password} {...register("password", {
                    required: "Password is required",
                    validate: {
                        minLength: (v) => v.length >= 8 || "Password should have at least 8 characters"
                    },
                  })}/>
                  </Stack>
                  <Stack spacing="6">
                    <Button colorScheme="blue" variant='solid' type="submit" isLoading={isSubmitting}>Sign in</Button>
                  </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>)
}

export default Login


