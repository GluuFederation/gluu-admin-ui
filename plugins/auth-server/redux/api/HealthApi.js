export default class HealthApi {
  constructor(api) {
    this.api = api
  }

  // Get Health Status
  getHealthStatus = () => {
    return new Promise((resolve, reject) => {
      this.api.getConfigHealthReady( (error, data) => {
        console.log(error)
        console.log('---')
        console.log(data)
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }
}
