import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import usePokemon from 'hooks/usePokemon';
import usePokemonAbilities from 'hooks/usePokemonAbilities';
import { capitalizeWord, COLORS } from 'utils';

const Pokemon = ({
  resetSelection,
  selectedPokemon
}: {
  resetSelection: () => void;
  selectedPokemon: number;
}): React.ReactNode => {
  const pokemon = usePokemon(selectedPokemon);
  const abilities = usePokemonAbilities(pokemon);

  return (
    <>
      <Typography>Selected Pokemon: {capitalizeWord(pokemon?.name)}</Typography>
      <Table
        sx={{ minWidth: 650, maxWidth: 1200 }}
        aria-label='Pokemon Abilities'
      >
        <TableHead sx={{ backgroundColor: COLORS.TABLE_HEADER }}>
          <TableRow>
            <TableCell>
              <Typography>Abillity</Typography>
            </TableCell>
            <TableCell>
              <Typography>Abillity Effect</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {abilities?.map((ability) => (
            <TableRow
              key={ability.name}
              sx={{
                'td, th': { border: 0 },
                '&:nth-of-type(odd)': { backgroundColor: '#F8F8F8' }
              }}
            >
              <TableCell>
                <Typography>{capitalizeWord(ability.name)}</Typography>
              </TableCell>
              <TableCell>
                {ability.effect_entries.map((effect) => {
                  if (effect.language.name === 'en') {
                    return (
                      <Typography key={effect.short_effect}>
                        {effect.effect}
                      </Typography>
                    );
                  }
                  return null;
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div
        style={{
          marginTop: '0.5rem',
          justifyContent: 'right',
          display: 'grid'
        }}
      >
        <Link
          href='#'
          underline='hover'
          variant='body1'
          onClick={() => resetSelection()}
        >
          Back to list view
        </Link>
      </div>
    </>
  );
};

export default Pokemon;
