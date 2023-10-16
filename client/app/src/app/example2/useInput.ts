"use client"

import { useState,  useEffect, useCallback } from 'react'
import { SubmitHandler, useForm,  FormProvider, useFormContext, useController } from 'react-hook-form'

interface InputForm {
  inputName: string
}

export const useInput = ({ inputName }: InputForm) => {
  const [isValid, setValid] = useState(false);

  const { control } = useFormContext();
	

  const {
    field,
		formState
		/* fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields } */
  } = useController({ // hook para inputs controlados de terceros com MUI
    inputName,
    control,
  });

  useEffect(
    useCallback(() => {
      (async () => {
        try {

          const { errors } = await control._executeSchema([inputName]);

          setValid(!errors[inputName]);

        } catch (err) { }
      })()
    }, [field.value])
  );

  return {
    field,
    formState,
    control,
    isValid
  }
}
