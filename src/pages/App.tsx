import React, { useContext } from "react";
import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";

import Tables from "../components/Table/index";

import { UsersContext } from "../contexts/usersContext";

export const App = () => {
  const { users } = useContext(UsersContext);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "name",
      },
      {
        Header: "Idade",
        accessor: "age",
      },
    ],
    []
  );

  return (
    <Flex align="center" justify="center" minH="100vh" bg="gray.700">
      <Container maxW="container.xl">
        <Flex align="center" justify="center" py={10}>
          {users.length >= 1 ? (
            <Tables columns={columns} data={users} />
          ) : (
            <Box textAlign="center">
              <Spinner size="xl" color="gray.300" />
              <Text mt={4} color="gray.300">
                Carregando...
              </Text>
            </Box>
          )}
        </Flex>
      </Container>
    </Flex>
  );
};
