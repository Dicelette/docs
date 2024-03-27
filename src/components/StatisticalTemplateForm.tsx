import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

interface Statistic {
  name?: string;
  min?: number;
  max?: number;
  combinaison?: string;
}

interface Damage {
  name?: string;
  value?: string;
}

const StatisticalTemplateForm: React.FC = () => {
  const downloadJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "statisticalTemplate.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Statistical Template Form</h1>
      <Formik
        initialValues={{
          charName: false,
          statistics: [],
          total: 0,
          diceType: "",
          critical: { success: 0, failure: 0 },
          damage: [],
        }}
        validationSchema={Yup.object({
          total: Yup.number().min(0).required("Required"),
          diceType: Yup.string().required("Required"),
          critical: Yup.object().shape({
            success: Yup.number().required("Required"),
            failure: Yup.number().required("Required"),
          }),
          statistics: Yup.array().of(
            Yup.object().shape({
              name: Yup.string().required("Required"),
              min: Yup.number(),
              max: Yup.number(),
              combinaison: Yup.string(),
            })
          ),
          damage: Yup.array().of(
            Yup.object().shape({
              name: Yup.string().required("Required"),
              value: Yup.string().required("Required"),
            })
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            downloadJSON(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <h2>Statistics</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Min</th>
                  <th>Max</th>
                  <th>Combinaison</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <FieldArray name="statistics">
                  {({ push: pushStat, remove: removeStat }) => (
                    <>
                      {values.statistics.map((_, statIndex) => (
                        <tr key={statIndex}>
                          <td>
                            <Field name={`statistics[${statIndex}].name`} />
                          </td>
                          <td>
                            <Field name={`statistics[${statIndex}].min`} />
                          </td>
                          <td>
                            <Field name={`statistics[${statIndex}].max`} />
                          </td>
                          <td>
                            <Field
                              name={`statistics[${statIndex}].combinaison`}
                            />
                          </td>
                          <td>
                            <button
                              type="button"
                              onClick={() => removeStat(statIndex)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={5}>
                          <button type="button" onClick={() => pushStat({})}>
                            Add Statistics
                          </button>
                        </td>
                      </tr>
                    </>
                  )}
                </FieldArray>
              </tbody>
            </table>

            <h2>Damage</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <FieldArray name="damage">
                  {({ push: pushDamage, remove: removeDamage }) => (
                    <>
                      {values.damage.map((_, damageIndex) => (
                        <tr key={damageIndex}>
                          <td>
                            <Field name={`damage[${damageIndex}].name`} />
                          </td>
                          <td>
                            <Field name={`damage[${damageIndex}].value`} />
                          </td>
                          <td>
                            <button
                              type="button"
                              onClick={() => removeDamage(damageIndex)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={3}>
                          <button type="button" onClick={() => pushDamage({})}>
                            Add Damage
                          </button>
                        </td>
                      </tr>
                    </>
                  )}
                </FieldArray>
              </tbody>
            </table>

            <div>
              <label htmlFor="total">Total</label>
              <Field name="total" type="number" />
              <ErrorMessage name="total" />
            </div>

            <div>
              <label htmlFor="diceType">Dice Type</label>
              <Field name="diceType" type="text" />
              <ErrorMessage name="diceType" />
            </div>

            <div>
              <label htmlFor="critical.success">Critical Success</label>
              <Field name="critical.success" type="number" />
              <ErrorMessage name="critical.success" />
            </div>
            <div>
              <label htmlFor="critical.failure">Critical Failure</label>
              <Field name="critical.failure" type="number" />
              <ErrorMessage name="critical.failure" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StatisticalTemplateForm;
