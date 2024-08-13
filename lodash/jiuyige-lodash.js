var jiuyige = function() {
    function compact1(array) {
        var result = []
        for (i = 0; i < array.length; i++) {
            if (array[i]) {
                result.push(array[i])
            }
        }
        return result
    }
    function chunk1(array, size = 1) {
        const result = []
        for (i = 0; i < array.length; i += size) {
            const chunk1 = array.length.slice(i, i + szie)
            result.push(chunk1)
        }
        return result
    }
    return {
        compact: compact1,
        chunk: chunk1,
    }
}()