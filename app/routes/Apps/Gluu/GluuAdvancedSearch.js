import React from 'react'
import { Input, FormGroup } from './../../../components'
import { useTranslation } from 'react-i18next'

function GluuAdvancedSearch({ handler, patternId, limitId, limit }) {
  const { t } = useTranslation()
  return (
    <FormGroup row style={{ marginTop: '10px' }}>
      <Input
        style={{ width: '100px' }}
        id={limitId}
        type="number"
        data-testid={limitId}
        defaultValue={limit}
        onChange={handler}
      />
      &nbsp;
      <Input
        style={{ width: '180px' }}
        id={patternId}
        data-testid={patternId}
        type="text"
        placeholder={t('placeholders.search_pattern')}
        onChange={handler}
      />
    </FormGroup>
  )
}

export default GluuAdvancedSearch
