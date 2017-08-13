const getCurrentModuleId = filePath => {
    let pathNodeArray = filePath.split('/')
    let done = false
    let recursiveIterationCount = 0
    const recursiveIterationLimit = 20

    const removeExtraNodes = () => {
        recursiveIterationCount++
        if (!done) {
            pathNodeArray.shift()
            const bottomLevelPathNode = pathNodeArray[0]
            done = (bottomLevelPathNode === 'src' || recursiveIterationCount > recursiveIterationLimit)
            removeExtraNodes()
        }
    }

    pathNodeArray.removeExtras = removeExtraNodes
    pathNodeArray.removeExtras()

    const formattedFilePath = pathNodeArray.join('->')

    return formattedFilePath
}

export default getCurrentModuleId