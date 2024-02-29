import { TextField, FormHelperText } from "@mui/material"
import { Controller } from "react-hook-form"
import { InputFieldProps } from "../types/types"

export const InputFeild = ({control,name,placeHolder,label,helperText,error}:InputFieldProps) =>{
    return(
        <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="text"
            id={name}
            placeholder={placeHolder}
            label={label}
            variant="outlined"
            fullWidth
            error={!!error}
            helperText={
              <FormHelperText sx={{ fontSize: "12px" }}>
                {helperText}
              </FormHelperText>
            }
            sx={{ fontSize: "12px" }}
          />
        )}
      />
    )
}