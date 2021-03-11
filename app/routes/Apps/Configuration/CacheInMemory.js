import React from 'react'
import {
  Form,
  FormGroup,
  Card,
  Col,
  Input,
  CardBody,
} from './../../../components'
import GluuLabel from '../Gluu/GluuLabel'
function CacheInMemory({ config, formik }) {
  return (
    <Card>
      <CardBody>
        <FormGroup row>
          <GluuLabel label="Default Put Expiration" size={6} />
          <Col sm={6}>
            <Input
              id="memoryDefaultPutExpiration"
              name="memoryDefaultPutExpiration"
              type="number"
              defaultValue={config.defaultPutExpiration}
              onChange={formik.handleChange}
            />
          </Col>
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default CacheInMemory
