module.exports = {
  description () {
    return 'Generates a dumb component'
  },

  fileMapTokens () {
    return {
      __name__: options => {
        return options.entity.name
      },
      __action__: options => {
        return options.settings.getSetting('actionPath')
      },
      __reducer__: options => {
        return options.settings.getSetting('reducerPath')
      }
    }
  }
}