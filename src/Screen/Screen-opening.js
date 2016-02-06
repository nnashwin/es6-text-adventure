let AdventureGameObject = AdventureGameObject || {}
let AdventureScreenObject = AdventureScreenObject || {}
;(() => {
    let Game = AdventureGameObject
    let Screen = AdventureScreenObject
    Screen.getUserInfo = function () {
        let userName, userGend, userAge
        Screen.displayConsoleMessage('What is your name, traveler?')
        username = Screen.handleUserInput()
        Screen.displayConsoleMessage('Are you a male or female?')
        userGend = Screen.handleUserInput()
        Screen.displayConsoleMessage('And your age?')
        userAge = Screen.handleUserInput()
    }

})(undefined)
