import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import useListPokemon from 'hooks/useListPokemon';
import { useState } from 'react';
import { capitalizeWord, COLORS } from 'utils';
import TablePagination from './TablePagination';
import usePokemonCount from 'hooks/usePokemonCount';

const PokemonList = ({
  onSelect
}: {
  onSelect: (id: number) => void;
}): React.ReactNode => {
  const LIST_LIMIT = 5;

  const [page, setPage] = useState(0);
  const pokemonList = useListPokemon(page, LIST_LIMIT);
  const pokemonCount = usePokemonCount();

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, maxWidth: 1200 }}
          aria-label='Pokemon Names'
        >
          <TableHead sx={{ backgroundColor: COLORS.TABLE_HEADER }}>
            <TableRow>
              <TableCell>
                <Typography>Pokemon Name</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemonList.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  'td, th': { border: 0 },
                  '&:nth-of-type(odd)': { backgroundColor: '#F8F8F8' }
                }}
              >
                <TableCell onClick={() => onSelect(row.id)}>
                  <Typography>{capitalizeWord(row.name)}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ backgroundColor: COLORS.TABLE_FOOTER }}>
        <TablePagination
          totalCount={pokemonCount}
          page={page}
          pageSize={LIST_LIMIT}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      </div>
    </>
  );
};

export default PokemonList;
