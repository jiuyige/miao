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
            const chunk1 = array.length.slice(i, i + size)
            result.push(chunk1)
        }
        return result
    }
    function fill1(array, value, start = 0, end = array.length) {
        start = Math.max(0, start)
        end = Math.min(array.length, end)

        for (let i = start; i < end; i++) {
            array[i] = value
        }

        return array
    }





    return {
        compact: compact1,
        chunk: chunk1,
        fill: fill1
    }
}()