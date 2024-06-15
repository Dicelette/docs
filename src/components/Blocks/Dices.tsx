import { ErrorMessage, FieldArray } from "formik";
import { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { Section, Tablefield } from "../Atoms";
import CopyButton from "../Atoms/copyButton";
import RemoveButton from "../Atoms/removeButton";
import { translate } from "@docusaurus/Translate";

const Dices = ({ values, setFieldValue }) => {
  const [duplicateIndices, setDuplicateIndices] = useState([]);

  useEffect(() => {
    const findDuplicates = () => {
      const duplicates = [];
      values.damages.forEach((stat, index) => {
        const isDuplicate = values.damages.findIndex(
          (s, i) => i !== index && s.name === stat.name
        );
        if (isDuplicate !== -1 && !duplicates.includes(index)) {
          duplicates.push(index);
          duplicates.push(isDuplicate);
        }
      });
      setDuplicateIndices(duplicates);
    };
    findDuplicates();
  }, [values.damages]);

  const errorTooltip = (index: number) => {
    if (duplicateIndices.includes(index)) {
      return (
        <ReactTooltip
          id={`Dice-Nom-${index}`}
          content={translate({ message: "Ce nom est déjà utilisé" })}
          style={{ background: "var(--rt-color-error)" }}
          anchorSelect={`#Dice-Nom-${index}`}
        />
      );
    }
    if (values.damages[index].name.length === 0) {
      return (
        <ReactTooltip
          id={`Dice-Nom-${index}`}
          content={translate({ message: "Le nom ne peut pas être vide" })}
          style={{ background: "var(--rt-color-error)" }}
          anchorSelect={`#Dice-Nom-${index}`}
        />
      );
    }
    return null;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(values.damages);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update your state with the new order
    // You might need to implement this function
    setFieldValue("damages", items);
  };

  return (
    <div className="statistic">
      <FieldArray name="damages">
        {({ push, remove }) => (
          <div>
            <Section
              length={values.damages.length}
              type="dice"
              label={translate({ message: "Dés" })}
              onAdd={() => push({ name: "", value: "" })}
              children={""}
            />
            <table className="w-full">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <tbody {...provided.droppableProps} ref={provided.innerRef} className="divide-y block w-full">
                      {values.damages.map((_: unknown, index: number) => (
                        <Draggable key={index} draggableId={String(index)} index={index}>
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              key={index}
                              className={`flex flex-col xl:flex-row items-start xl:w-full ${duplicateIndices.includes(index) ? "error-bg" : ""
                                } ${index === 0 ? "border-t-0" : ""}`}
                            >
                              <td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full">
                                <CopyButton
                                  maxLen={25}
                                  length={values.damages.length}
                                  size={1280}
                                  onClick={() => {
                                    push({
                                      name: values.damages[index].name,
                                      value: values.damages[index].value,
                                    });
                                  }}
                                />
                              </td>
                              <td className="p-2 min-[0px]:max-xl:w-full">
                                <Tablefield
                                  name={`damages[${index}].name`}
                                  label={translate({ message: "Nom" })}
                                  className={`${values.damages[index].name.length === 0 ? "error" : ""
                                    }`}
                                  id={`Dice-Nom-${index}`}
                                />
                                <ErrorMessage name={`damages[${index}].name`} />
                              </td>
                              <td className="p-2 min-[0px]:max-xl:w-full">
                                <Tablefield
                                  name={`damages[${index}].value`}
                                  label={translate({ message: "Valeur" })}
                                  className={`${values.damages[index].name.length === 0 ? "error" : ""
                                    }`}
                                  id={`Value-${index}`}
                                />
                              </td>
                              {errorTooltip(index)}
                              {values.damages[index].name.length === 0 && (
                                <ReactTooltip
                                  id={`Value-${index}`}
                                  content={translate({
                                    message: "La valeur ne peut pas être vide",
                                  })}
                                  style={{ background: "var(--rt-color-error)" }}
                                  anchorSelect={`#Value-${index}`}
                                />
                              )}

                              <td className="p-px min-[0px]:max-2xl:p-2 table-cell min-[0px]:max-xl:w-full">
                                <RemoveButton size={1280} onClick={() => remove(index)} />
                              </td>
                            </tr>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </tbody>
                  )}
                </Droppable>
              </DragDropContext>
            </table>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default Dices;
