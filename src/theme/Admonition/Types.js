import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import { Icon } from '@iconify/react';
import { translate } from '@docusaurus/Translate';


function Usage(props) {
  return (
    <div className="theme-admonition theme-admonition-usage admonition_o5H7 usage alert--usage">
      <div className='admonitionHeading_FzoX'>
          <span className='admonitionIcon_rXq6'>
            <Icon icon="fluent:data-usage-edit-24-filled"/>
          </span>
        {props.title?.length > 0 ? props.title : translate({message: "Usage"})}
      </div>
      <div className='admonitionContent_Knsx'>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Ajoutez ici tous vos types d'admonitions personnalisées...
  // Vous pouvez également écraser les valeurs par défaut si vous le souhaitez
  'usage': Usage,
};

export default AdmonitionTypes;