import React from 'react'
import {
  Badge,
  FormGroup,
  Card,
  Col,
  Input,
  CardBody,
} from '../../../components'
import GluuLabel from '../Gluu/GluuLabel'
function CacheRedis({ config, formik }) {
  return (
    <Card>
      <CardBody>
        <FormGroup row>
          <GluuLabel label="Redis Provider Type" size={4} />
          <Col sm={8}>
            <Input
              id="redisProviderType"
              name="redisProviderType"
              onChange={formik.handleChange}
              defaultValue={config.redisProviderType}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <GluuLabel label="Servers" size={2} />
          <Col sm={7}>
            <Badge color="primary">{config.servers}</Badge>
          </Col>
          <GluuLabel label="Use SSL" size={2} />
          <Col sm={1}>
            <Input
              type="checkbox"
              name="useSSL"
              id="useSSL"
              onChange={formik.handleChange}
              defaultChecked={config.useSSL}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <GluuLabel label="Default Put Expiration" size={2} />
          <Col sm={2}>
            <Input
              id="defaultPutExpiration"
              name="defaultPutExpiration"
              type="number"
              onChange={formik.handleChange}
              defaultValue={config.defaultPutExpiration}
            />
          </Col>
          <GluuLabel label="Max Retry Attempts" size={2} />
          <Col sm={2}>
            <Input
              id="maxRetryAttempts"
              name="maxRetryAttempts"
              type="number"
              onChange={formik.handleChange}
              defaultValue={config.maxRetryAttempts}
            />
          </Col>
          <GluuLabel label="So Timeout" size={2} />
          <Col sm={2}>
            <Input
              id="soTimeout"
              name="soTimeout"
              type="number"
              onChange={formik.handleChange}
              defaultValue={config.soTimeout}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <GluuLabel label="Max Idle Connections" size={2} />
          <Col sm={2}>
            <Input
              id="maxIdleConnections"
              name="maxIdleConnections"
              type="number"
              onChange={formik.handleChange}
              defaultValue={config.maxIdleConnections}
            />
          </Col>
          <GluuLabel label="Max Total Connections" size={2} />
          <Col sm={2}>
            <Input
              id="maxTotalConnections"
              name="maxTotalConnections"
              type="number"
              onChange={formik.handleChange}
              defaultValue={config.maxTotalConnections}
            />
          </Col>
          <GluuLabel label="Connection Timeout" size={2} />
          <Col sm={2}>
            <Input
              id="connectionTimeout"
              name="connectionTimeout"
              type="number"
              onChange={formik.handleChange}
              defaultValue={config.connectionTimeout}
            />
          </Col>
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default CacheRedis
