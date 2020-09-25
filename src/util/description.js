function getDescription (vm) {
  const { description } = vm.$options
  if (description) {
    return typeof description === 'function'
      ? description.call(vm)
      : description
  }
}

const serverTitleMixin = {
  created () {
    const description = getDescription(this)
    if (description) {
      this.$ssrContext.description = `Vue HN 2.0 Description | ${description}`
    }
  }
}

const clientTitleMixin = {
  mounted () {
    const description = getDescription(this)
    if (description) {
      document.description = `Vue HN 2.0 Description | ${description}`
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin
