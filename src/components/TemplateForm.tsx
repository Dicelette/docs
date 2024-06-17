/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Tooltip } from "@mui/material";
import { Form, Formik } from "formik";
import { FC } from "react";

import {
  Statistic,
  StatisticalTemplate,
  verifyTemplateValue,
} from "@dicelette/core";
import CriticalValue from "./Blocks/CriticalValue";
import Dices from "./Blocks/Dices";
import General from "./Blocks/General";
import Statistics from "./Blocks/Statistics";
import { errorCode } from "./errorsTranslation";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const TemplateForm: FC = () => {
  const downloadJSON = (data: any) => {
    //convert statistic to Statistic interface
    let stat: Statistic | undefined = {};
    let diceSkill: { [key: string]: string } | undefined = {};
    for (const statistic of data.statistics) {
      stat[statistic.name] = {
        combinaison: statistic.combinaison,
        max: statistic.max,
        min: statistic.min,
      };
    }
    for (const damage of data.damages) {
      diceSkill[damage.name] = damage.value;
    }
    if (Object.keys(stat).length === 0) stat = undefined;
    if (Object.keys(diceSkill).length === 0) diceSkill = undefined;
    const templateDataValues: StatisticalTemplate = {
      charName: data.isCharNameRequired,
      critical: data.critical,
      diceType: data.diceType,
      total: data.total,
      statistics: stat,
      damage: diceSkill,
    };

    try {
      const template = verifyTemplateValue(templateDataValues);
      const Jsonblob = new Blob([JSON.stringify(template, null, 2)], {
        type: "application/json",
      });
      const CSVHeader = ["user", "charName", "avatar", "channel"];
      if (data.isPrivate) CSVHeader.push("isPrivate");
      CSVHeader.push(...Object.keys(template.statistics));
      CSVHeader.push("dice");
      const csv = `\ufeff${CSVHeader.join(";")}\n`;
      const CSVblob = new Blob([csv], { type: "text/csv" });
      const urls = [
        {
          name: "statisticalTemplate.json",
          url: URL.createObjectURL(Jsonblob),
        },
        { name: "import.csv", url: URL.createObjectURL(CSVblob) },
      ];
      for (const url of urls) {
        const a = document.createElement("a");
        a.href = url.url;
        a.download = url.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url.url);
      }
    } catch (error) {
      const msg = errorCode(error);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        html: msg,
        icon: "error",
        showCloseButton: true,
        //toast: true,
        backdrop: true,
        showConfirmButton: false,
        customClass: {
          confirmButton: "hide",
          popup: ["error", "swal2-toast"],
          htmlContainer: ["error", "swal2-toast"],
          closeButton: "error",
        },
      });
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      downloadJSON(values);
      setSubmitting(false);
    }, 400);
  };

  const detectAnyErrorClassInPage = () => {
    const isBrowser = useIsBrowser();
    if (!isBrowser) return false;
    const errorClasses = document.getElementsByClassName("error");
    const duplicateErrorClass = document.getElementsByClassName("error-bg");
    if (errorClasses.length > 0 || duplicateErrorClass.length > 0) {
      return true;
    }
    return false;
  };

  const buttonDisabled = (isSubmitting: boolean) => {
    return detectAnyErrorClassInPage() ? (
      <Tooltip
        title={translate({ message: "Veuillez corriger les erreurs" })}
        classes={{ popper: "error" }}
        arrow
      >
        <span>
          <Button
            type="submit"
            disabled={true}
            variant="outlined"
            size="medium"
            id="disabledButton"
            className="download-button"
          >
            {translate({ message: "Télécharger le modèle" })}
          </Button>
        </span>
      </Tooltip>
    ) : (
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="outlined"
        size="medium"
        className="download-button"
      >
        {translate({ message: "Télécharger le modèle" })}
      </Button>
    );
  };

  return (
    <Formik
      initialValues={{
        isCharNameRequired: false,
        isPrivate: false,
        statistics: [],
        total: 0,
        diceType: "",
        critical: { success: 20, failure: 1 },
        damages: [],
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <General />
          <CriticalValue critical={values.critical} />
          <Statistics values={values} setFieldValue={setFieldValue} />
          <Dices values={values} setFieldValue={setFieldValue} />
          {buttonDisabled(isSubmitting)}
        </Form>
      )}
    </Formik>
  );
};

export default TemplateForm;
