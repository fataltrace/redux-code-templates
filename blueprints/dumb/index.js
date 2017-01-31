module.exports = {
  description () {
    return 'Generates a dumb component'
  },

  fileMapTokens () {
    return {
      __dumb__: options => {
        return options.settings.getSetting('dumbPath')
      }
    }
  }
}