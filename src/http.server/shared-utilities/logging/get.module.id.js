const getCurrentModuleId = filePath => {
    let done = false
    let failSafeCount = 0
    let pathSectionArray = filePath.split('/')

    const popFirstElementUntilDone = () => {
        failSafeCount++
        if (!done) {
            pathSectionArray.shift()
            done = (pathSectionArray[0] === 'src' || failSafeCount > 20)
            popFirstElementUntilDone()
        }
    }

    popFirstElementUntilDone()

    const formattedFilePath = pathSectionArray.join('->')

    return formattedFilePath
}

export default getCurrentModuleId