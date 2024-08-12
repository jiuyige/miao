var jiuyige = function() {
    function compact(array) {
        var result = []
        for (i = 0, i < array.length, i++) {
            if (array[i]) {
                result.push(array[i])
            }
        }
        return result
    }
    function chunk() {

    }
    return {
        compact: compact,
        chunk: chunk,
    }
}()