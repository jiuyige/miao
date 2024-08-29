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

    function fromPairs1(pairs) {
        const result = {};  
        for (let i = 0; i < pairs.length; i++) {
            const pair = pairs[i];  
            result[pair[0]] = pair[1];  
        }
        return result;  
    }

    function toPairs1 (object) {
        let result = []
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                result.push([key, object[key]])
            }
        }
        return result
    }

    function head1 (array) {
        return array[0]
    }

    function indexOf1 (array, value, fromIndex = 0) {
        for (let i = fromIndex; i < array.length; i++) {
            if (array[i] === value) {
                return i
            }
        }
        return -1
    }

    function lastIndexOf1 (array, value, fromIndex = array.length - 1) {
        for (let i = fromIndex; i >= 0; i--) {
            if (array[i] === value) {
                return i
            }
        }
        return -1
    }

    function initial1(array) {
        return array.slice(0, array.length - 1)
    }






    return {
        compact: compact1,
        chunk: chunk1,
        fill: fill1,
        drop: drop1,
        flatten: flatten1,
        flattenDeep: flattenDeep1,
        fromPairs: fromPairs1,
        toPairs: toPairs1,
        head: head1,
        indexOf: indexOf1,
        lastIndexOf: lastIndexOf1,
        initial: initial1,







    }
}()