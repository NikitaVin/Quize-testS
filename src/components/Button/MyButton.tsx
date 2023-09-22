import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FC } from 'react';

interface IMyButton {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const MyButton: FC<IMyButton> = ({ onClick, text, disabled }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClick} variant="outlined" disabled={disabled}>
        {text}
      </Button>
    </Stack>
  );
};
