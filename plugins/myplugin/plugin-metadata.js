import MyPluginFirstPage from './components/MyPluginFirstPage'
import MyPluginSecondPage from './components/MyPluginSecondPage'
import MyPluginSubPage from './components/MyPluginSubPage'
import myPluginReducer from './redux/reducers/MyPluginReducer'
import myPluginSaga from './redux/sagas/MyPluginSaga'

const PLUGIN_BASE_APTH = '/myplugin'

const pluginMetadata = {
  menus: [
    {
      title: 'My Test Plugin',
      icon: 'fa-search',
      children: [
        {
          title: 'Page One',
          path: PLUGIN_BASE_APTH + '/one',
          permission: '/config/acrs.readonly',
        },
        {
          title: 'Section One',
          children: [
            {
              title: 'Sub Page One',
              path: PLUGIN_BASE_APTH + '/two',
              permission: '/config/acrs.readonly',
            },
            {
              title: 'Sub Page Two',
              path: PLUGIN_BASE_APTH + '/three',
              permission: '/config/acrs.readonly',
            },
          ],
        },
      ],
    },
  ],
  routes: [
    {
      component: MyPluginFirstPage,
      path: PLUGIN_BASE_APTH + '/one',
      permission: '/config/acrs.readonly',
    },
    {
      component: MyPluginSecondPage,
      path: PLUGIN_BASE_APTH + '/two',
      permission: '/config/acrs.readonly',
    },
    {
      component: MyPluginSubPage,
      path: PLUGIN_BASE_APTH + '/three',
      permission: '/config/acrs.readonly',
    },
  ],
  reducers: [{ name: 'myPluginReducer', reducer: myPluginReducer }],
  sagas: [myPluginSaga()],
}

export default pluginMetadata
