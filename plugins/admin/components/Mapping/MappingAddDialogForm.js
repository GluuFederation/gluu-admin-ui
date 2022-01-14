import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import { useTranslation } from 'react-i18next'
import applicationStyle from '../../../../app/routes/Apps/Gluu/styles/applicationstyle'
import GluuAutoComplete from '../../../../app/routes/Apps/Gluu/GluuAutoComplete'
const DOC_CATEGORY = 'openid_client'
const MappingAddDialogForm = ({
  handler,
  modal,
  onAccept,
  roles,
  permissions,
}) => {
  const [active, setActive] = useState(false)
  const { t } = useTranslation()

  function handleStatus() {
    var value = document.getElementById('api_role').value
    if (value.length >= 5) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  function handleAccept() {
    const roleData = {}
    roleData['role'] = document.getElementById('api_role').value
    roleData['permissions'] = document.getElementById('permissions').value
    onAccept(roleData)
  }
  return (
    <>
      <Modal isOpen={modal} toggle={handler} className="modal-outline-primary">
        <ModalHeader toggle={handler}>
          <i
            style={{ color: 'green' }}
            className="fa fa-2x fa-info fa-fw modal-icon mb-3"
          ></i>
          New Role
        </ModalHeader>
        <ModalBody>Adding new api config role</ModalBody>
        <ModalBody>
          <GluuAutoComplete
            name="api_role"
            label="fields.grant_types"
            labelKey="role"
            options={roles}
            doc_category={DOC_CATEGORY}
          ></GluuAutoComplete>
          <GluuAutoComplete
            name="api_permissions"
            label="fields.grant_types"
            labelKey="permission"
            multiple
            options={permissions}
            doc_category={DOC_CATEGORY}
          ></GluuAutoComplete>
        </ModalBody>
        <ModalFooter>
          {active && (
            <Button
              color="primary"
              style={applicationStyle.buttonStyle}
              onClick={handleAccept}
            >
              {t('actions.yes')}
            </Button>
          )}{' '}
          <Button
            color="secondary"
            style={applicationStyle.buttonStyle}
            onClick={handler}
          >
            {t('actions.no')}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MappingAddDialogForm
