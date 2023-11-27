const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('before install event hit')
event.preventDefault()
window.defferedPrompt = event
butInstall.classList.toggle('hidden', false)
})

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const installPrompt = window.defferedPrompt
    if (installPrompt) {
        // Show the installation prompt
        installPrompt.prompt()
      
        window.deferredPrompt = null
    
        // Hide the install button if the user accepted or dismissed the prompt
        butInstall.classList.toggle('hidden', true)
    }
})


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('install hit', event)
    window.deferredPrompt = null
})
