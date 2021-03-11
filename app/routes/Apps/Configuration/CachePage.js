import React, { useEffect, useState } from 'react'
import BlockUi from 'react-block-ui'
import { Formik } from 'formik'
import {
  Form,
  FormGroup,
  Container,
  Card,
  Col,
  Input,
  CardBody,
} from './../../../components'
import GluuFooter from '../Gluu/GluuFooter'
import GluuLabel from '../Gluu/GluuLabel'
import CacheInMemory from './CacheInMemory'
import CacheRedis from './CacheRedis'
import CacheNative from './CacheNative'
import CacheMemcached from './CacheMemcached'
import { connect } from 'react-redux'
import {
  getCacheConfig, getMemoryCacheConfig, getMemCacheConfig, getNativeCacheConfig, getRedisCacheConfig,
  editMemoryCache, editNativeCache, editRedisCache, editMemCache
} from '../../../redux/actions/CacheActions'



function CachePage({ cacheMemoryData, cacheMemData, cacheNativeData, cacheRedisData, loading, dispatch }) {

  useEffect(() => {
    dispatch(getCacheConfig())
  }, [])
  useEffect(() => {
    dispatch(getMemoryCacheConfig())
  }, [])
  useEffect(() => {
    dispatch(getMemCacheConfig())
  }, [])
  useEffect(() => {
    dispatch(getNativeCacheConfig())
  }, [])
  useEffect(() => {
    dispatch(getRedisCacheConfig())
  }, [])

  console.log("mem data", cacheMemData)

  const INITIAL_VALUES = {

    cacheProviderType: 'NATIVE_PERSISTENCE',

    memCacheServers: cacheMemData.servers,
    maxOperationQueueLength: cacheMemData.maxOperationQueueLength,
    bufferSize: cacheMemData.bufferSize,
    memDefaultPutExpiration: cacheMemData.defaultPutExpiration,
    connectionFactoryType: cacheMemData.connectionFactoryType,
    memoryDefaultPutExpiration: cacheMemoryData.defaultPutExpiration,
    redisProviderType: cacheRedisData.redisProviderType,
    servers: cacheRedisData.servers,
    defaultPutExpiration: cacheRedisData.defaultPutExpiration,
    useSSL: cacheRedisData.useSSL,
    maxIdleConnections: cacheRedisData.maxIdleConnections,
    maxTotalConnections: cacheRedisData.maxTotalConnections,
    connectionTimeout: cacheRedisData.connectionTimeout,
    soTimeout: cacheRedisData.soTimeout,
    maxRetryAttempts: cacheRedisData.maxRetryAttempts,
    nativeDefaultPutExpiration: cacheNativeData.defaultPutExpiration,
    defaultCleanupBatchSize: cacheNativeData.defaultCleanupBatchSize,
    deleteExpiredOnGetRequest: cacheNativeData.deleteExpiredOnGetRequest,

  }


  return (
    <React.Fragment>
      <Container>
        <BlockUi
          tag="div"
          blocking={loading}
          keepInView={true}
          renderChildren={true}
          message={'Performing the request, please wait!'}
        >
          <Card>
            <CardBody>
              <Formik
                initialValues={INITIAL_VALUES}
                onSubmit={(values) => {
                  const nativeCache = {
                    "defaultPutExpiration": values.nativeDefaultPutExpiration,
                    "defaultCleanupBatchSize": values.defaultCleanupBatchSize,
                    "deleteExpiredOnGetRequest": values.deleteExpiredOnGetRequest,
                  }
                  const memoryCache = {
                    "defaultPutExpiration": values.memoryDefaultPutExpiration,
                  }
                  const redisCache = {
                    "redisProviderType": values.redisProviderType,
                    "servers": values.servers,
                    "defaultPutExpiration": values.defaultPutExpiration,
                    "useSSL": values.useSSL,
                    "maxIdleConnections": values.maxIdleConnections,
                    "maxTotalConnections": values.maxTotalConnections,
                    "connectionTimeout": values.connectionTimeout,
                    "soTimeout": values.soTimeout,
                    "maxRetryAttempts": values.maxRetryAttempts,
                  }

                  const memCache = {
                    "servers": values.memCacheServers,
                    "maxOperationQueueLength": values.maxOperationQueueLength,
                    "bufferSize": values.bufferSize,
                    "defaultPutExpiration": values.memDefaultPutExpiration,
                    "connectionFactoryType": values.connectionFactoryType,
                  }

                  const opts1 = {}
                  opts1['nativePersistenceConfiguration'] = JSON.stringify(nativeCache)
                  dispatch(editNativeCache(opts1))

                  const opts2 = {}
                  opts2['inMemoryConfiguration'] = JSON.stringify(memoryCache)
                  dispatch(editMemoryCache(opts2))

                  const opts3 = {}
                  opts3['redisConfiguration'] = JSON.stringify(redisCache)
                  dispatch(editRedisCache(opts3))

                  const opts4 = {}
                  opts4['memcachedConfiguration'] = JSON.stringify(memCache)
                  dispatch(editMemCache(opts4))
                }}
              >
                {(formik) => (
                  <Form onSubmit={formik.handleSubmit}>
                    <FormGroup row>
                      <GluuLabel label="Cache Provider Type" size={4} />
                      <Col sm={8}>
                        <Input
                          id="cacheProviderType"
                          name="cacheProviderType"
                          defaultValue={INITIAL_VALUES.cacheProviderType}
                          onChange={formik.handleChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <CacheRedis config={cacheRedisData} formik={formik} />
                    </FormGroup>
                    <FormGroup row>
                      <CacheNative config={cacheNativeData} formik={formik} />
                    </FormGroup>
                    <FormGroup row>
                      <CacheMemcached config={cacheMemData} formik={formik} />
                    </FormGroup>
                    <FormGroup row>
                      <CacheInMemory config={cacheMemoryData} formik={formik} />
                    </FormGroup>
                    <FormGroup row></FormGroup>
                    <GluuFooter />
                  </Form>
                )}

              </Formik>

            </CardBody>
          </Card>
        </BlockUi>
      </Container>
    </React.Fragment>
  )
}


const mapStateToProps = (state) => {
  return {
    cacheData: state.cacheReducer.cache,
    cacheMemoryData: state.cacheReducer.cacheMemory,
    cacheMemData: state.cacheReducer.cacheMem,
    cacheNativeData: state.cacheReducer.cacheNative,
    cacheRedisData: state.cacheReducer.cacheRedis,

    permissions: state.authReducer.permissions,
    loading: state.cacheReducer.loading,
  }
}


export default connect(mapStateToProps)(CachePage)
