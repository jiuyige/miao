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

    function join1(array, separator=',') {
        return array.join1(separator)
    }

    function last1(array) {
        return array[array.length - 1]
    }

    function pull1(array, ...values) {
        return array.filter(item => !values.includes(item))
    }

    function reverse1(array) {
        let result = []
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i])
        }
        return result
    }

    function every1(collection, predicate = identity) {
        var func = selectMatchObjectFunc(predicate); 
        var isFalse = false; 
    
        if (judgeObjectType(collection) === OBJECT) { 
            if (isNullObject(collection) === true) { 
                return true; 
            } else {
                forOwn(collection, (val, key) => { 
                    var obj = {}; 
                    obj[key] = val; 
                    if (func(obj) === false) { 
                        isFalse = true; 
                        return false; 
                    }
                });
                return true; 
            }
        } else { 
            forEach(collection, val => { 
                if (func(val) === false) { 
                    isFalse = true; 
                    return false; 
                }
            });
        }
        return !isFalse; 
    }

    function some1(collection, predicate) {
        predicate = predicate || function(value) {return value}
        for (var i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return true
            }
        }
        return false
    }

    function countBy1(collection, iteratee) {
        var result = {}
        for (var i = 0; i < collection.length; i++) {
            var key = typeof iteratee === 'function' ? iteratee(collection[i]) : collection[i][iteratee]
            if (result[key]) {
                result[key]++
            } else {
                result[key] = 1
            }
        }
        return result
    }
    
    function groupBy1(collection, iteratee) {
        var result = {}
        for (var i = 0; i < collection.length; i++) {
            var key = typeof iteratee === 'function' ? iteratee(collection[i]) : collection[i][iteratee]
            if (!result[key]) {
                result[key] = []
            }
            result[key].push(collection[i])
        }
        return result
    }

    function keyBy1(collection, iteratee) {
        var result = {}
        for (var i = 0; i < collection.length; i++) {
            var key = typeof iteratee === 'function' ? iteratee(collection[i]) : collection[i][iteratee]
            result[key] = collection[i]
        }
        return result
    }

    function forEach1(collection, iteratee) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (iteratee(collection[i], i, collection) === false) {
                    break
                }
            }
        } else {
            for (var key in collection) {
                if (collection.hasOwnProperty(key)) {
                    if (iteratee(collection[key], key, collection) === false) {
                        break
                    }
                }
            }
        }
        return collection
    }

    function map1(collection, iteratee) {
        var result = []
        if (typeof iteratee === 'string') {
            var property = iteratee;
            iteratee = function(item) {
                return item[property];
            };
        }

        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                result.push(iteratee(collection[i], i, collection))
            }
        } else {
            for (var key in collection) {
                if (collection.hasOwnProperty(key)) {
                    result.push(iteratee(collection[key], key, collection))
                }
            }
        }
        return result
    }

    function filter1(collection, predicate) {
        var result = []
        if (typeof predicate === 'object') {
            predicate = function(item) {
                for (var key in predicate) {
                    if (predicate.hasOwnProperty(key) && item[key] !== predicate[key]) {
                        return false;
                    }
                }
                return true;
            };
        }

        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (predicate(collection[i], i, collection)) {
                    result.push(collection[i])
                }
            }
        } else {
            for (var key in collection) {
                if (collection.hasOwnProperty(key)) {
                    if (predicate(collection[key], key, collection)) {
                        result.push(collection[key])
                    }
                }
            }
        }
        return result
    }

    function reduce1(collection, iteratee, accumulator) {
        var initializing = arguments.length < 3

        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (initializing) {
                    accumulator = collection[i]
                    initializing = false
                } else {
                    accumulator = iteratee(accumulator, collection[i], i, collection)
                }
            }
        } else {
            for (var key in collection) {
                if (collection.hasOwnProperty(key)) {
                    if (initializing) {
                        accumulator = collection[key]
                        initializing = false
                    } else {
                        accumulator = iteratee(accumulator, collection[key], key, collection)
                    }
                }
            }
        }
        return accumulator
    }

    function reduceRight1(collection, iteratee, accumulator) {
        var initializing = arguments.length < 3

        if (Array.isArray(collection)) {
            for (var i = collection.length - 1; i >= 0; i--) {
                if (initializing) {
                    accumulator = collection[i]
                    initializing = false
                } else {
                    accumulator = iteratee(accumulator, collection[i], i, collection)
                }
            }
        } else {
            var keys = Object.keys(collection)
            for (var i = keys.length - 1; i >= 0; i--) {
                var key = keys[i]
                    if (initializing) {
                        accumulator = collection[key]
                        initializing = false
                    } else {
                        accumulator = iteratee(accumulator, collection[key], key, collection)
                    }
                }
            }
        return accumulator
    }
    
    function size1(collection) {
        if (Array.isArray(collection) || typeof collection === 'string') {
            return collection.length
        } else if (typeof collection === 'object' && collection !== null) {
            return Object.keys(collection).length
        }
        return 0
    }

    function sortBy1(collection, iteratees) {
        if (!Array.isArray(iteratees)) {
            iteratees = [iteratees]
        }

        return collection.slice().sort(function(a, b) {
            for (var i = 0; i < iteratees.length; i++) {
                var iteratee = iteratees[i]
                var aValue = typeof iteratee === 'function' ? iteratee(a) : a[iteratee]
                var bValue = typeof iteratee === 'function' ? iteratee(b) : b[iteratee]

                if (aValue < bValue) {
                    return -1
                }
                if (aValue > bValue) {
                    return 1
                }
            }
            return 0
        })
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
        join: join1,
        last: last1,
        pull: pull1,
        reverse: reverse1,
        every: every1,
        some: some1,
        countBy: countBy1,
        groupBy: groupBy1,
        keyBy: keyBy1,
        forEach: forEach1,
        map: map1,
        filter: filter1,
        reduce: reduce1,
        reduceRight: reduceRight1,
        size: size1,
        sortBy: sortBy1,





    }
}()