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
            const chunk1 = array.slice(i, i + size)
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

    function drop1(array, n= 1) {
        return array.slice(n)
    }

    function flatten1 (array) {
        var result = []
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])){
                result = result.concat(array[i])
            } else {
                result.push(array[i])
            }
        }
        return result
    }

    function flattenDeep1 (array) {
        return array.reduce((flat, toFlatten) => {
            return flat.concat(Array.isArray(toFlatten) ? flattenDeep(toFlatten) : toFlatten)
        }, [])
    }

    function formPairs (array) {
        let key = {}
        for (let i = 0; i < array.length; i++) {
            let pair = array[i]
            key[pair[0]] = paor[1]
        }
        return key
    }






    return {
        compact: compact1,
        chunk: chunk1,
        fill: fill1,
        drop: drop1,
        flatten: flatten1,
        flattenDeep: flattenDeep1,
        formPairs: formPairs1,
        



    }
}()