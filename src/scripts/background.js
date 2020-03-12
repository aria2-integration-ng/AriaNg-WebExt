browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})


console.log(`Let's begin`)
