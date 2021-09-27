import React, { useState } from 'react'
import GluuLabel from './GluuLabel'
import { useTranslation } from 'react-i18next'
import { Typeahead } from 'react-bootstrap-typeahead'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'
import {
  Col,
  InputGroup,
  CustomInput,
  FormGroup,
  Input,
  Button,
} from '../../../components'

function GluuInlineInput({
  label,
  name,
  type,
  value,
  required,
  lsize,
  rsize,
  isBoolean,
  isArray,
  handler,
  options,
  path,
}) {
  const { t } = useTranslation()
  const VALUE = 'value'
  const PATH = 'path'
  const GluuTooltip = withStyles({
    tooltip: {
      color: 'white',
      textAlign: 'center',
      minWidth: '100px',
      backgroundColor: 'green',
    },
  })(Tooltip)
  const [show, setShow] = useState(false)
  const [correctValue, setCorrectValue] = useState([])
  const onValueChanged = () => {
    document.getElementById('inline-input-buttons'+name).style.display='block'
  }
  const handleTypeAheadChange = (selectedOptions) => {
    setCorrectValue(selectedOptions)
    setShow(true)
  }
  const onAccept = () => {
    const patch = {}
    patch[PATH] = path
    if (isArray) {
      patch[VALUE] = correctValue
    } else {
      patch[VALUE] = document.getElementById(name).value
    }
    console.log('=====', patch)
    patch['op'] = 'replace'
    handler(patch)
    document.getElementById('inline-input-buttons'+name).style.display='none'
  }
  const onCancel = () => {
    setCorrectValue([])
    document.getElementById('inline-input-buttons'+name).style.display='none'
  }
  return (
    <FormGroup row>
      <Col sm={10}>
        <FormGroup row>
          <GluuLabel label={label} size={lsize} required={required} />
          <Col sm={rsize}>
            {!isBoolean && !isArray && (
              <GluuTooltip title={label}>
                <Input
                  id={name}
                  name={name}
                  type={type}
                  defaultValue={value}
                  onChange={onValueChanged}
                />
              </GluuTooltip>
            )}
            {isBoolean && (
              <InputGroup>
                <CustomInput
                  type="select"
                  onChange={onValueChanged}
                  id={name}
                  name={name}
                  defaultValue={value}
                >
                  <option value="false">{t('options.false')}</option>
                  <option value="true">{t('options.true')}</option>
                </CustomInput>
              </InputGroup>
            )}
            {isArray && (
              <Typeahead
                id={name}
                name={name}
                allowNew
                emptyLabel=""
                labelKey={name}
                onChange={handleTypeAheadChange}
                multiple={true}
                defaultSelected={value}
                options={options}
              />
            )}
          </Col>
        </FormGroup>
      </Col>
      <Col sm={2}>
        <div id={'inline-input-buttons'+name} style={{display:"none"}}>
          <Button color="primary" size="sm" onClick={onAccept}>
            <i className="fa fa-check mr-2"></i>
          </Button>{' '}
          <Button color="danger" size="sm" onClick={onCancel}>
            <i className="fa fa-times mr-2"></i>
          </Button>
        </div>
      </Col>
    </FormGroup>
  )
}

GluuInlineInput.defaultProps = {
  type: 'text',
  lsize: 3,
  rsize: 9,
  required: false,
}

export default GluuInlineInput
