const getCurrentModuleId = filePath => {
    try {
        if (filePath === undefined || filePath === null || filePath === '') {
            throw new Error('File path should not be null or undefined.')
        }

        let pathNodeArray = filePath.split('/')

        if (pathNodeArray.length < 2) {
            throw new Error('File path does not contain expected path delimiter: [/]')
        }

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

        let formattedFilePath = pathNodeArray.join('->')
        formattedFilePath = formattedFilePath + '\n'

        return formattedFilePath

    } catch (err) {
        return 'UNKOWN_PATH'
    }
}

export default getCurrentModuleId