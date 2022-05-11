export default (query, pairs) => {
    const newQuery = {...query}
    for (let pair of pairs) {
        newQuery[pair.key] = pair.value
    }
    return newQuery
}
