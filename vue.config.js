module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devServer: {
      public: '0.0.0.0:8080', // Allows hot reload on host
      disableHostCheck: true, // When not the host machine, need to disable the check and get the poll to check for file edits
      watchOptions: {
        poll: true
      }
    }
  }
}
