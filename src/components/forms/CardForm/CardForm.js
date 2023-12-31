import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { validationCardSchema } from "..//..//..//schems/validationCardSchema";
import s from "./CardForm.module.css";
import Button from "..//..//Button/Button.jsx";
import { MyDatepicker } from "../MyDatepicker/MyDatepicker";

export const CardForm = ({ taskData, setTask }) => {
  const orderedCodes = ["none", "low", "medium", "high"];

  const initialValues = {
    deadline: taskData?.deadline ? new Date(taskData.deadline) : new Date(),
    description: taskData?.description || "",
    priority: taskData?.priority || "none",
    title: taskData?.title || "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTask(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationCardSchema}
      onSubmit={onSubmit}
      validationOnBlur={true}
    >
      {({ values, isSubmitting, dirty, handleSubmit, setFieldValue }) => (
        <Form className={s.form} onSubmit={handleSubmit}>
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

          <label className={s.label}>
            <Field
              className={s.comment}
              as="textarea"
              placeholder="Description"
              name="description"
            />
            <ErrorMessage
              name="description"
              component="div"
              className={s.error}
            />
          </label>
          <label className={s.label}>
            <p className={s.item_tittle}>Label Color</p>
            <div id="radio-group" className={s.label_color}>
              {orderedCodes.map((code) => (
                <div
                  key={code}
                  /*                     role="group" */
                  aria-labelledby="radio-group"
                  className={
                    values.priority === code ? s.selectedLabel : s.labelItem
                  }
                >
                  <Field
                    id={`color_${code}`}
                    type="radio"
                    name={code}
                    value={code}
                    checked={values.priority === code}
                    onChange={() => setFieldValue("priority", code)}
                    className={s[`${code}Input`]}
                  />
                </div>
              ))}
            </div>
            <ErrorMessage name="priority" />
          </label>
          <div className={s.datepicker}>
            <label className={s.item_tittle}>Deadline</label>
            <MyDatepicker
              date={values.deadline}
              handleSetData={(date) => setFieldValue("deadline", date)}
            />
          </div>
          <Button
            invert={false}
            title={taskData?._id ? "Edit" : "Add"}
            type="submit"
            disabled={isSubmitting || !dirty}
          />
        </Form>
      )}
    </Formik>
  );
};
