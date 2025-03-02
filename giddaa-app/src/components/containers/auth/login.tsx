'use client';

import {Button, Box, Text, Link, Flex, Image, Center, Stack} from '@chakra-ui/react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {InputField} from "@/components/form/input-field";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
});

export default function SignIn() {
    return (
        <Center minH="100vh">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    console.log("Form submitted with values:", values);
                    setSubmitting(false);
                }}
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
                                    <Text fontSize="34px" fontWeight="600" color={'#335F32'}>Sign in</Text>
                                </Stack>

                                <Text fontSize="16px" color="gray.600" textAlign="center">
                                    Enter your details to login to your account.
                                </Text>

                                <Box width="100%" mt={4}>
                                    <InputField type="email" name="email" label="Email"/>
                                    <InputField password type="password" name="password" label="Password"/>
                                </Box>

                                <Link href="/auth/forgot-password" _hover={{textDecorationColor: "#818181"}}>
                                    <Text
                                        textAlign="right"
                                        color="#818181"
                                        fontSize="14px"
                                        mt="-1em"
                                        py=".6em"
                                    >
                                        Forgot password?
                                    </Text>
                                </Link>

                                <Button
                                    mt="2em"
                                    textTransform="capitalize"
                                    type="submit"
                                    background="#335F32"
                                    height="50px"
                                    fontWeight="500"
                                    fontSize="16px"
                                    color="white"
                                    cursor={'pointer'}
                                    width="100%"
                                    borderRadius="35px"
                                    isLoading={formik.isSubmitting}
                                    _hover={{background: "#335F32"}}
                                >
                                    Sign in in
                                </Button>

                                <Text textAlign="center" color="gray.600" py=".4em" fontSize="16px">
                                    Don’t have an account?{" "}
                                    <Link href="/auth/signup" _hover={{textDecoration: "none"}}>
                                        <Box as="span" color="#335F32" fontWeight="500" cursor="pointer">
                                            Sign up
                                        </Box>
                                    </Link>
                                </Text>
                            </Box>
                        </Flex>
                    </Form>
                )}
            </Formik>
        </Center>
    );
}
