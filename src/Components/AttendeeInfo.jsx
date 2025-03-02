import { useFormik } from 'formik';
import { Box, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { forwardRef, useImperativeHandle, useContext } from "react";
import TicketContext from "../TicketsContext";
import React from 'react';

const AttendeeInfo = forwardRef((props, ref) => {
  const { setFormData, handleStep } = useContext(TicketContext);

  const formik = useFormik({
    initialValues: {
      names: '',
      email: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setFormData(values); 
      handleStep(); 
      setSubmitting(false);
    },
    validate: values => {
      let errors = {};
      if (!values.names) {
        errors.names = "Required field";
      }
      if (!values.email) {
        errors.email = "Required field";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      return errors;
    }
  });

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      formik.handleSubmit();
    }
  }));

  console.log("visited fields", formik.touched);

  return (
    <Box>
      <FormControl>
        <Box>
          <FormLabel htmlFor="names" mt={3}>Names</FormLabel>
          <Input h={"50px"}
            type="text"
            id="names"
            name="names"
            value={formik.values.names}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.names && formik.errors.names ? <Box color={'red'} fontSize={'0.9em'} mt={2} mb={2}>{formik.errors.names}</Box> : null}
        </Box>
        <Box>
          <FormLabel htmlFor="email" mt={3}>Email</FormLabel>
          <Input h={"50px"}
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} />
          {formik.touched.email && formik.errors.email ? <Box color={'red'} fontSize={'0.9em'} mt={2} mb={2}>{formik.errors.email}</Box> : null}
        </Box>
        <Box>
          <FormLabel htmlFor="aboutProject" mt={3}>About Project</FormLabel>
          <Textarea type="text" id="aboutProject" name="project" h={40} />
        </Box>
      </FormControl>
    </Box>
  );
});

export default AttendeeInfo;