'use strict'

class StringWithAppliedUrlParams {
  constructor (str) {
    this.str = str
  }

  value () {
    return this.str
      .replace(/\$\{urlParams\.(.+)\}/g, (match, p1, offset, string) => {
        // eslint-disable-next-line no-undef
        return urlParams[p1]
      })
  }
}

module.exports = StringWithAppliedUrlParams