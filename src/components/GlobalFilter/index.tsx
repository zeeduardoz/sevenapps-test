import {
  Box,
  Input,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  chakra,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

type FilterProps = {
  total: number;
  setGlobalFilter: (value: string) => void;
};

export default function GlobalFilter({ setGlobalFilter, total }: FilterProps) {
  return (
    <Box bg="gray.900" roundedTop="xl">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          p={8}
          children={<Search2Icon color="white" />}
        />
        <Input
          placeholder="Procurar..."
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
          p={8}
          ml={10}
          border="none"
          color="white"
          fontSize="xl"
          fontWeight="light"
          _focus={{ outline: "none" }}
          _placeholder={{ color: "white" }}
        />
        <InputRightElement mr={8} p={8} color="white" fontSize="sm">
          <chakra.p>
            <chakra.strong>{total}</chakra.strong> resultados
          </chakra.p>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
