'use strict'

const E = require('./E')
const { UnwrappedChildrenOfParent, ElementWithInnerHTML } = require('./../async-dom/exports')
const { ResponseFromAjaxRequest, ResponseBody } = require('./../async-ajax/exports')
const { CreatedOptions } = require('./../async-object/exports')
const { ParsedJSON } = require('./../async-json/exports')

class E_HTML extends E {
  constructor (node) {
    super(node)
  }

  activate () {
    new UnwrappedChildrenOfParent(
      new ElementWithInnerHTML(
        this.node,
        new ResponseBody(
          new ResponseFromAjaxRequest(
            new CreatedOptions(
              'url', this.node.getAttribute('data-src'),
              'method', 'GET',
              'headers', new ParsedJSON(
                this.node.getAttribute('data-headers') || '{}'
              )
            )
          )
        )
      )
    ).call()
  }
}

module.exports = E_HTML
