import util, { warn } from './util'
import Asset from './asset'
import Override from './override'
import Validate from './directives/validate'
import Validator from './directives/validator'


/**
 * plugin
 *
 * @param {Function} Vue
 * @param {Object} options
 */

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    warn('already installed.')
    return
  }

  util.Vue = Vue
  Asset(Vue)

  Override(Vue)
  Validator(Vue)
  Validate(Vue)
}

plugin.version = '2.0.0-alpha.9'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
