const getCurrentModuleId = filePath => {
    const recursiveIterationLimit = 20

    let done = false
    let recursiveOperationCount = 0
    let pathNodeArray = filePath.split('/')

    const truncateExtraPathNodes = () => {
        recursiveOperationCount++
        if (!done) {
            pathNodeArray.shift()
            const currentPathNode = pathNodeArray[0]
            done = (currentPathNode === 'src' || recursiveOperationCount > recursiveIterationLimit)
            truncateExtraPathNodes()
        }
    }

    truncateExtraPathNodes()

    const formattedFilePath = pathNodeArray.join('->')

    return formattedFilePath
}

export default getCurrentModuleId