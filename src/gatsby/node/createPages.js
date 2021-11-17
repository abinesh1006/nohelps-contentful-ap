module.exports = async ({ actions }, options) => {
  const basePath = "/about"

  actions.createPage({
    path: basePath,
    component: require.resolve("../../templates/index.js"),
  })
}
