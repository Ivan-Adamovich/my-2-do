import * as React from 'react';
import { Dayjs } from 'dayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { UseDateFieldProps } from '@mui/x-date-pickers/DateField';
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
} from '@mui/x-date-pickers/models';

import { Tooltip, Button, Typography, Stack } from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import EventIcon from '@mui/icons-material/Event';

interface ButtonFieldProps
  extends UseDateFieldProps<Dayjs>,
    BaseSingleInputFieldProps<
      Dayjs | null,
      Dayjs,
      FieldSection,
      DateValidationError
    > {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonField(props: ButtonFieldProps) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="outlined"
      size="small"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
      sx={{ width: '152px' }}
    >
      <EventIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
      {label ?? 'Pick a date'}
    </Button>
  );
}

function ButtonDatePicker(
  props: Omit<DatePickerProps<Dayjs>, 'open' | 'onOpen' | 'onClose'>
) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } as any }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}

interface PickerWithButtonFieldProps {
  value: Dayjs | null;
  setValue(value: Dayjs | null): void;
}

const PickerWithButtonField: React.FC<PickerWithButtonFieldProps> = ({
  value,
  setValue,
}) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <ButtonDatePicker
        label="Current date: "
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
      {value !== null ? (
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <Tooltip title="Clear date">
            <ClearIcon
              sx={{ color: 'primary.main', ml: 1 }}
              onClick={() => setValue(null)}
            />
          </Tooltip>
          <Typography variant="body2" sx={{ color: 'primary.main', ml: 0.5 }}>
            {value.format('MM/DD/YYYY')}
          </Typography>
        </Stack>
      ) : null}
    </Stack>
  );
};

export default PickerWithButtonField;
