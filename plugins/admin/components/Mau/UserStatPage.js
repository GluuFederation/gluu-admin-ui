import React, { Component, useState, useEffect } from 'react'
import {
  Button,
  Card,
  CardFooter,
  CardBody,
  FormGroup,
  Label,
  Input,
  Badge,
} from '../../../../app/components'
import GluuLoader from '../../../../app/routes/Apps/Gluu/GluuLoader'
import { Calendar } from 'react-date-range'
import GluuRibbon from '../../../../app/routes/Apps/Gluu/GluuRibbon'
//import 'react-date-range/dist/styles.css'; // main style file
//import 'react-date-range/dist/theme/default.css'; // theme css file
import { addMonths, differenceInMonths } from 'date-fns'
import applicationStyle from '../../../../app/routes/Apps/Gluu/styles/applicationstyle'
import GluuViewWrapper from '../../../../app/routes/Apps/Gluu/GluuViewWrapper'
import {
  hasBoth,
  buildPayload,
  STAT_READ,
  STAT_JANS_READ,
} from '../../../../app/utils/PermChecker'
import { getMau } from './../../redux/actions/MauActions'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

function UserStatPage({ stat, permissions, loading, dispatch }) {
  const { t } = useTranslation()

  function handleSelect(date){
    console.log(date); 
  }
  return (
    <GluuLoader blocking={false}>
      <GluuViewWrapper
        canShow={hasBoth(permissions, STAT_READ, STAT_JANS_READ)}
      >
        <Card>
          <GluuRibbon title={t('titles.active_users')} fromLeft />
          <FormGroup row />
          <FormGroup row />
          <CardBody
            className="d-flex flex-column justify-content-center align-items-center pt-5"
            style={{ minHeight: '400px' }}
          >
            <Calendar date={new Date()} onChange={handleSelect} />
          </CardBody>
          <CardFooter className="p-4 bt-0"></CardFooter>
        </Card>
      </GluuViewWrapper>
    </GluuLoader>
  )
}

const mapStateToProps = (state) => {
  return {
    stat: state.mauReducer.stat,
    loading: state.mauReducer.loading,
    permissions: state.authReducer.permissions,
  }
}

export default connect(mapStateToProps)(UserStatPage)
