import runtime from 'offline-plugin/runtime'

runtime.install({
  // onUpdated: () => window.location.reload(),
  onUpdateReady: () => runtime.applyUpdate()
})
