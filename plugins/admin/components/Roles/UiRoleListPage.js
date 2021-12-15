import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import { Paper } from '@material-ui/core'
import UiRoleDetailPage from './UiRoleDetailPage'
import { Badge } from 'reactstrap'
import { connect } from 'react-redux'
import { Card, CardBody, FormGroup } from '../../../../app/components'
import { useTranslation } from 'react-i18next'
import GluuViewWrapper from '../../../../app/routes/Apps/Gluu/GluuViewWrapper'
import GluuRibbon from '../../../../app/routes/Apps/Gluu/GluuRibbon'
import applicationStyle from '../../../../app/routes/Apps/Gluu/styles/applicationstyle'
import { getRoles } from '../../redux/actions/ApiRoleActions'
import {
  hasPermission,
  buildPayload,
  ROLE_READ,
  ROLE_WRITE,
} from '../../../../app/utils/PermChecker'

function UiRoleListPage({ apiRoles, permissions, loading, dispatch }) {
  const { t } = useTranslation()
  const myActions = []
  const options = []
  const userAction = {}
  const pageSize = localStorage.getItem('paggingSize') || 10
  useEffect(() => {
    buildPayload(userAction, 'ROLES', options)
    dispatch(getRoles(userAction))
  }, [])

  if (hasPermission(permissions, ROLE_READ)) {
    myActions.push((rowData) => ({
      icon: 'visibility',
      iconProps: {
        color: 'primary',
        id: 'viewRole' + rowData.inum,
      },
      tooltip: `${t('messages.view_role_details')}`,
      onClick: (e, rowData) => handleGoToRoleEditPage(rowData, true),
      disabled: false,
    }))
  }

  if (hasPermission(permissions, ROLE_WRITE)) {
    myActions.push((rowData) => ({
      icon: 'edit',
      iconProps: {
        color: 'primary',
        id: 'editRole' + rowData.inum,
      },
      tooltip: `${t('messages.edit_role')}`,
      onClick: (e, entry) => handleGoToRoleEditPage(entry, false),
      disabled: false,
    }))
  }
  if (hasPermission(permissions, ROLE_WRITE)) {
    myActions.push({
      icon: 'add',
      tooltip: `${t('messages.add_role')}`,
      iconProps: { color: 'primary' },
      isFreeAction: true,
      onClick: () => handleGoToRoleAddPage(),
    })
  }

  return (
    <Card>
      <GluuRibbon title={t('titles.roles')} fromLeft />
      <CardBody>
        <FormGroup row />
        <FormGroup row />
        <GluuViewWrapper canShow={hasPermission(permissions, ROLE_READ)}>
          <MaterialTable
            components={{
              Container: (props) => <Paper {...props} elevation={0} />,
            }}
            columns={[
              {
                title: `${t('fields.name')}`,
                field: 'role',
                width: '40%',
                render: (rowData) => <Badge color="info">{rowData.role}</Badge>,
              },
              //{ title: `${t('fields.description')}`, field: 'description' },
            ]}
            data={apiRoles}
            isLoading={loading || false}
            title=""
            actions={myActions}
            options={{
              search: true,
              searchFieldAlignment: 'left',
              selection: false,
              pageSize: pageSize,
              rowStyle: (rowData) => ({
                backgroundColor: rowData.enabled ? '#33AE9A' : '#FFF',
              }),
              headerStyle: applicationStyle.tableHeaderStyle,
              actionsColumnIndex: -1,
            }}
            detailPanel={(rowData) => {
              return <UiRoleDetailPage row={rowData} />
            }}
          />
        </GluuViewWrapper>
      </CardBody>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    apiRoles: state.apiRoleReducer.items,
    loading: state.apiRoleReducer.loading,
    permissions: state.authReducer.permissions,
  }
}

export default connect(mapStateToProps)(UiRoleListPage)