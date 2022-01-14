import React from 'react'
import { FormGroup, Col } from '../../../components'
import { Typeahead } from 'react-bootstrap-typeahead'
import GluuLabel from './GluuLabel'
import GluuTooltip from './GluuTooltip'

function GluuAutoComplete({
  label,
  labelKey,
  name,
  value,
  multiple,
  options,
  required,
  doc_category,
  doc_entry,
}) {
  return (
    <GluuTooltip doc_category={doc_category} doc_entry={doc_entry || name}>
      <FormGroup row>
        {!!required ? (
          <GluuLabel label={label} size={4} required />
        ) : (
          <GluuLabel label={label} size={4} />
        )}
        <Col sm={8}>
          <Typeahead
            emptyLabel=""
            labelKey={labelKey}
            id={name}
            data-testid={name}
            multiple={multiple}
            name={name}
            defaultSelected={value}
            options={options}
          />
        </Col>
      </FormGroup>
    </GluuTooltip>
  )
}

export default GluuAutoComplete
