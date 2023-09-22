import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const Download = () => {
  return (
    <Stack spacing={3}>
      <Skeleton variant="rounded" width={500} height={15} />
      <Skeleton variant="rounded" width={500} height={100} />
      <Skeleton variant="rectangular" width={500} height={30} />
      <Skeleton variant="rectangular" width={500} height={30} />
      <Skeleton variant="rectangular" width={500} height={30} />
      <Skeleton variant="rounded" width={80} height={30} />
    </Stack>
  );
};
