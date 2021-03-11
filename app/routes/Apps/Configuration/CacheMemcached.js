import React from 'react'
import {
  Badge,
  FormGroup,
  Card,
  Col,
  Input,
  CardBody,
} from './../../../components'
import GluuLabel from '../Gluu/GluuLabel'
function CacheMemcached({ config, formik }) {
  return (
    <Card>
      <CardBody>
        <FormGroup row>
          <GluuLabel label="Servers" size={2} />
          <Col sm={6}>
            <Badge color="primary">{config.servers}</Badge>
          </Col>
          <GluuLabel label="Connection Factory Type" size={2} />
          <Col sm={2}>
            <Input
              name="connectionFactoryType"
              id="connectionFactoryType"
              defaultValue={config.connectionFactoryType}
              onChange={formik.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <GluuLabel label="Max Operation Queue Length" size={2} />
          <Col sm={2}>
            <Input
              id="maxOperationQueueLength"
              name="maxOperationQueueLength"
              type="number"
              defaultValue={config.maxOperationQueueLength}
              onChange={formik.handleChange}
            />
          </Col>
          <GluuLabel label="Buffer Size" size={2} />
          <Col sm={2}>
            <Input
              id="bufferSize"
              name="bufferSize"
              type="number"
              defaultValue={config.bufferSize}
              onChange={formik.handleChange}
            />
          </Col>
          <GluuLabel label="Default Put Expiration" size={2} />
          <Col sm={2}>
            <Input
              type="number"
              name="memDefaultPutExpiration"
              id="memDefaultPutExpiration"
              defaultValue={config.defaultPutExpiration}
              onChange={formik.handleChange}
            />
          </Col>
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default CacheMemcached
