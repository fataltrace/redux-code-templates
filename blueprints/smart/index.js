module.exports = {
  description () {
    return 'Generates a dumb component'
  },

  fileMapTokens () {
    return {
      __smart__: options => {
        return options.settings.getSetting('smartPath')
      }
    }
  }
}