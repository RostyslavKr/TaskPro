import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationColumnSchema } from "..//..//..//schems/validationColumnSchema";
import Button from "components/Button/Button";
import s from "./ColumnForm.module.css";

export const ColumnForm = ({ setTitle, defaultValues }) => {
  const initialValues = {
    title: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTitle(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues ? defaultValues : initialValues}
      validationSchema={validationColumnSchema}
      onSubmit={onSubmit}
      validationOnBlur={true}
    >
      {({ isSubmitting, dirty, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={s.form}>
          <label className={s.label}>
            <Field
              className={s.input}
              type="text"
              name="title"
              placeholder="Title"
              autoFocus
            />
            <ErrorMessage name="title" component="div" className={s.error} />
          </label>
          <Button
            invert={false}
            title="Add"
            type="submit"
            disabled={isSubmitting || !dirty}
          />
        </Form>
      )}
    </Formik>
  );
};
