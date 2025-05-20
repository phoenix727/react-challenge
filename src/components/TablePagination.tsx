import {
  FirstPage,
  LastPage,
  NavigateBefore,
  NavigateNext
} from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import { useMemo } from 'react';

const TablePagination = ({
  page,
  pageSize,
  totalCount,
  onPageChange
}: {
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}): React.ReactNode => {
  const pageCount = useMemo(() => {
    return Math.ceil(totalCount / pageSize);
  }, [totalCount, pageSize]);
  return (
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Grid container alignItems={'center'}>
          <Grid item>
            <IconButton onClick={() => onPageChange(0)} disabled={page === 0}>
              <FirstPage />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => onPageChange(page - 1)}
              disabled={page === 0}
            >
              <NavigateBefore />
            </IconButton>
          </Grid>

          <Grid item>
            <Typography>
              Page {page + 1} of {pageCount}
            </Typography>
          </Grid>

          <Grid item>
            <IconButton
              onClick={() => onPageChange(page + 1)}
              disabled={page === pageCount - 1}
            >
              <NavigateNext />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton
              onClick={() => onPageChange(pageCount - 1)}
              disabled={page === pageCount - 1}
            >
              <LastPage />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3} />
    </Grid>
  );
};

export default TablePagination;
