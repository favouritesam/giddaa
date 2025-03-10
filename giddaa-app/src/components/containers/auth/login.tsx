'use client';

import { Button, Box, Text, Link, Flex, Image, Center, Stack } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '@/components/form/input-field';
import { useRouter } from 'next/navigation';
import { useState} from 'react';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
});

export default function SignIn() {
    const router = useRouter();
    const [apiError, setApiError] = useState<string | null>(null);

    const handleLogin = async (values: { email: any; password: any; }, { setSubmitting }: any) => {
        setApiError(null);
        try {
            console.log('Sending login request with values:', values);

            const response = await fetch('https://dev-api.giddaa.com/account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                    type: 'DEVELOPER',
                }),
            });

            const data = await response.json();
            console.log('API Response:', data);

            if (response.ok) {
                // Store the token and user details in session storage
                sessionStorage.setItem('authToken', data.value.value.token);
                sessionStorage.setItem('user', JSON.stringify(data.value.value.user));

                // Redirect to the dashboard
                router.push('/dashboard-header');
            } else {
                if (data.value && data.value.message === 'Incorrect Email/Password') {
                    setApiError('The email or password you entered is incorrect.');
                } else {
                    setApiError(data.value?.message || 'Login failed. Please check your credentials.');
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
            setApiError('An unexpected error occurred. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Center minH="100vh">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {(formik) => (
                    <Form>
                        <Flex flexDirection="column" gap="4em" align="center">
                            <Box width="400px" p={6} boxShadow="md" bg="white" borderRadius="lg">
                                <Stack direction="row" align="center" spacing={10}>
                                    <Link href="/">
                                        <Image
                                            src="/img/Logo.png"
                                            alt="Giddaa logo"
                                            height="30px"
                                            width="99.91px"
                                            backgroundColor={'#335F32'}
                                            borderRadius={'5%'}
                                        />
                                    </Link>
                                    <Text fontSize="34px" fontWeight="600" color={'#335F32'}>
                                        Sign in
                                    </Text>
                                </Stack>

                                <Text fontSize="16px" color="gray.600" textAlign="center">
                                    Enter your details to login to your account.
                                </Text>

                                {apiError && (
                                    <Text color="red.500" textAlign="center" mt={2}>
                                        {apiError}
                                    </Text>
                                )}

                                <Box width="100%" mt={10}>
                                    <InputField
                                        type="email"
                                        name="email"
                                        label="Email"
                                        placeholder="Enter your email"
                                        px={10}
                                        mb={4}
                                    />
                                    <InputField
                                        type="password"
                                        name="password"
                                        label="Password"
                                        placeholder="Enter your password"
                                        px={10}
                                    />
                                </Box>

                                <Button
                                    mt="2em"
                                    textTransform="capitalize"
                                    type="submit"
                                    background="#335F32"
                                    height="50px"
                                    fontWeight="500"
                                    fontSize="16px"
                                    color="white"
                                    cursor="pointer"
                                    border="none"
                                    width="100%"
                                    borderRadius="35px"
                                    isLoading={formik.isSubmitting} // Disable button while submitting
                                    _hover={{ background: '#335F32' }}
                                >
                                    Sign in
                                </Button>
                            </Box>
                        </Flex>
                    </Form>
                )}
            </Formik>
        </Center>
    );
}