import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import GluuLoader from '../../../app/routes/Apps/Gluu/GluuLoader'
import { getMyPluginData } from '../redux/actions/MyPluginActions'

function MyPluginFirstPage({ dispatch, loading, data }) {
  useEffect(() => {
    dispatch(getMyPluginData())
  }, [])
  return (
    <React.Fragment>
      <GluuLoader blocking={loading}>
        <div>
          This is my plugin page one. The api response is: 
        </div>
        <div>UserId: {data.userId}</div>
        <div>Completed: {data.completed ? 'True': 'False'}</div>
        <div>Title: {data.title}</div>
        </GluuLoader>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {

  return {
    data: state.myPluginReducer.data,
    loading: state.myPluginReducer.loading,
  }
}

export default connect(mapStateToProps)(MyPluginFirstPage)
