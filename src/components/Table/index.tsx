/* eslint-disable react-hooks/rules-of-hooks */
import {
  usePagination,
  useTable,
  useGlobalFilter,
  useFlexLayout,
} from "react-table";
import { Table, Thead, Tr, Th, Tbody, Td, Box } from "@chakra-ui/react";

import Pagination from "../Pagination/index";
import GlobalFilter from "../GlobalFilter/index";

type UserProps = {
  name: string;
  age: number;
};

type Grid = {
  data: UserProps[];
  columns: any;
};

export default function TableGrid({ columns, data }: Grid) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    useGlobalFilter,
    usePagination,
    useFlexLayout
  );

  return (
    <Box w="full">
      <GlobalFilter setGlobalFilter={setGlobalFilter} total={rows.length} />
      <Table
        {...getTableProps()}
        variant="unstyled"
        bg="gray.900"
        shadow="xl"
        roundedBottomLeft={["none", "xl"]}
        display={{
          base: "block",
          md: "table",
        }}
        sx={{
          "@media print": {
            display: "table",
          },
        }}
      >
        <Thead
          display={{
            base: "none",
            md: "table-header-group",
          }}
          sx={{
            "@media print": {
              display: "table-header-group",
            },
          }}
        >
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps()}
                  color="white"
                  fontSize="md"
                  p={8}
                >
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody
          {...getTableBodyProps()}
          display={{
            base: "block",
            lg: "table-row-group",
          }}
          sx={{
            "@media print": {
              display: "table-row-group",
            },
          }}
        >
          {page.map((row: any, i: any) => {
            prepareRow(row);
            return (
              <Tr
                {...row.getRowProps()}
                display={{
                  base: "grid",
                  md: "table-row",
                }}
                sx={{
                  "@media print": {
                    display: "table-row",
                  },
                  gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                  gridGap: "10px",
                }}
              >
                {row.cells.map((cell: any) => {
                  return (
                    <Td {...cell.getCellProps()} color="gray.500" px={8}>
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Pagination
        pageCount={pageCount}
        goto={gotoPage}
        previous={previousPage}
        next={nextPage}
        canPrevious={!canPreviousPage}
        canNext={!canNextPage}
      />
    </Box>
  );
}
