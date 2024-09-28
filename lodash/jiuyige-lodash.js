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

    function flattenDeep1(array) {
        const result = []

        for(const value of array){
            if (Array.isArray(value)){
                result.push(...flattenDeep1(value))
            } else {
                result.push(value)
            }
        }
        return result
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

    function sample1(collection) {
        if (Array.isArray(collection) && collection.length === 0) {
            return undefined
        }

        var length = collection.length
        var randomIndex = Math.floor(Math.random() * length)
        return collection[randomIndex]
    }

    function isUndefined1(value) {
        return value === undefined
    }

    function isNull1(value) {
        return value === null
    }

    function isNil1(value) {
        return value == null
    }

    function max1(array) {
        if (array == null || array.length === 0) {
            return undefined
        }

        var maxValue = array[0]
        for (var i = 1; i < array.length; i++) {
            if (array[i] > maxValue) {
                maxValue = array[i]
            }
        }
        return maxValue
    }

    function min1(array) {
        if (array == null || array.length === 0) {
            return undefined
        }

        var minValue = array[0]
        for (var i = 1; i < array.length; i++) {
            if (array[i] < minValue) {
                minValue = array[i]
            }
        }
        return minValue
    }

    function maxBy1(array, iteratee) {
        if (array == null || array.length === 0) {
            return undefined
        }
        if (typeof iteratee === 'string') {
            var prop = iteratee
            iteratee = function(item) {
                return item[prop]
            }
        }

        var maxElemnet = array[0]
        var maxValue = iteratee(maxElemnet)

        for (var i = 1; i < array.length; i++) {
            var value = iteratee(array[i])
            if (value > maxValue){
                maxValue = value
                maxElemnet = array[i]
            }
        }
        return maxElemnet
    }
    
    function minBy1(array, iteratee) {
        if (array == null || array.length === 0) {
            return undefined
        }
        if (typeof iteratee === 'string') {
            var prop = iteratee
            iteratee = function(item) {
                return item[prop]
            }
        }

        var minElemnet = array[0]
        var minValue = iteratee(minElemnet)

        for (var i = 1; i < array.length; i++) {
            var value = iteratee(array[i])
            if (value < minValue){
                minValue = value
                minElemnet = array[i]
            }
        }
        return minElemnet
    }

    function round1(number, precision=0) {
        var factor = Math.pow(10, precision)
        return Math.round(number * factor) / factor
    }

    function sumBy1(array, iteratee) {
        if (typeof iteratee === 'string') {
            var prop = iteratee
            iteratee = function(item) {
                return item[prop]
            }
        }

        var sum = 0
        for (var i = 0; i < array.length; i++) {
            sum += iteratee(array[i])
        }

        return sum
    }

    function flatMap1(collection, iteratee) {
        var result = []
        for (var i = 0; i < collection.length; i++) {
            var mappedValue = iteratee(collection[i], i, collection)
            result = result.concat(mappedValue)
        }
        return result
    }

    function flattenDepth1(array, depth = 1) {
        let result = array.slice()

        for (let i = 0; i < depth; i++) {
            let flattened = []

            for (let item of result) {
                if (Array.isArray(item)) {
                    flattened.push(...item)
                } else {
                    flattened.push(item)
                }
            }

            result = flattened

        if (!result.some(Array.isArray)) {
            break
        }
        }
        return result
    }
           
    

    function get1(object, path, defaultValue) {
        if (typeof path === 'string') {
            path = path.replace(/\[(\w+)\]/g,'.$1')
            path = path.split('.')
        }
        var result = object
        for (var i = 0; i < path.length; i++) {
            result = result == null ? undefined : result[path[i]]
            if (result === undefined) {
                return defaultValue
            }
        }
        return result === undefined ? defaultValue : result
    }

    function has1(object, path) {
        if (typeof path === 'string') {
            path = path.replace(/\[(\w+)\]/g, '.$1')
            path = path.slice('.')
        } else if (!Array.isArray(path)) {
            return false
        }

        var result = object
        for (var i = 0; i < path.length; i++) {
            if (result == null || !result.hasOwnProperty(path[i])) {
                return false
            }
            result = result[path[i]]
        }
        return true
        }

        function mapKeys1(object, iteratee) {
            const result = {}
            Object.keys(object).forEach(function(key) {
                const newKey = iteratee(object[key], key, object)
                result[key] = object[key]
            })
            return result
        }

        function mapValues1(object, iteratee) {
            if (typeof iteratee === 'string') {
                const prop = iteratee
                iteratee = function(value) {
                    return value[prop]
                }
            }
            const result = {}
                Object.keys(object).forEach(function(key) {
                    result[key] = iteratee(object[key], key, object)
                })
                return result
            }
        
            function range1(start = 0, end, step = 1) {
                let result =[]
                if (end === undefined) {
                    end = start
                    start = 0
                }

                if (step === undefined) {
                    return 
                }
                

                if (step === undefined) {
                    step = start < end ? 1 : -1
                } else if (step > 0) {
                    for (let i = start; i < end; i += step){
                        result.push(i)
                    }
                } else {
                    for (let i = start; i > end; i += step) {
                        result.push(i)
                    }
                }
                return result

            }

            function concat1(array, ...values) {
                let result = [...array]
                for (let i = 0; i < values.length; i++) {
                    let value = values[i]
                    if (Array.isArray(value)) {
                        for (let j = 0; j < value.length;j++) {
                            result.push(value[j])
                        }
                    } else {
                        result.push(value)
                    }
                }
                return result
            }

            function isEqual1(value, other) {
                if (value === other) {
                    return true
                }
                if (value == null || other == undefined) {
                    return false
                }
                if (typeof value !== typeof other) {
                    return false
                }
                if (typeof value === 'object' && typeof other === 'object') {
                    let valueKeys = Object.keys(value)
                    let otherKeys = Object.keys(other)

                    if (valueKeys.length !== otherKeys.length) {
                        return false
                    }
                    for (let key of valueKeys) {
                        if (!isEqual1(value[key], other[key])) {
                            return false
                        }
                    }
                    return true
                }
                if (typeof value === 'number' && typeof other === 'number') {
                    return isNaN(value) && isNaN(other)
                }
                return false
            }

            function repeat1(string, n) {
                let result = ''
                if (n <= 0) {
                    return result
                }
                for (let i = 0; i < n; i++) {
                    result += string
                }
                return string
            }

            function padStart1(string, length, chars = ' ') {
                if (string.length >= length) {
                    return string
                }
                let addlength = length - string.length
                let repeatedchars = ''
                while (repeatedchars.length < addlength) {
                    repeatedchars += chars
                }
                repeatedchars = repeatedchars.slice(0, addlength)
                return repeatedchars + string
            }

            function padEnd1(string, length, chars = ' ') {
                if (string.length >= length) {
                    return string
                }
                let addlength = length - string.length
                let repeatedchars = ''
                while (repeatedchars.length < addlength) {
                    repeatedchars += chars
                }
                repeatedchars = repeatedchars.slice(0, addlength)
                return string + repeatedchars
            }

            function pad1(string, length, chars = ' ') {
                if (string.length >= length) {
                    return string
                }
                let totalPadding = length - string.length

                let leftPadding = Math.floor(totalPadding / 2)
                let rightPadding = totalPadding - leftPadding

                let leftPadStr = ''
                let rightPadStr = ''

                while (leftPadStr.length < leftPadding) {
                    leftPadStr += chars
                }
                leftPadStr = leftPadStr.slice(0, leftPadding)


                while (rightPadStr.length < rightPadding) {
                    rightPadStr += chars
                }
                rightPadStr = rightPadStr.slice(0, rightPadding)


                return leftPadStr + string + rightPadStr
            }   

            function keys1(object) {
                let result = []

                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        result.push(key)
                    }
                }
                return result
            }

            function values1(object) {
                let result = []

                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        result.push(object[key])
                    }
                }
                return result
            }

            function random1(lower = 0, upper = 1, floating = false) {
                if (upper === undefined) {
                    upper = lower
                    lower = 0
                }

                let isFloating = floating || lower % 1 !== 0 || upper % 1 !== 0

                let rand = Math.random() * (upper - lower) + lower
                
                return isFloating ? rand : Math.floor(rand)
            }

            function round1(number, precision = 0) {
                const factor = Math.pow(10, precision)
                let tempNumber = number * factor

                let integerPart = Math.floor(tempNumber)
                let decimalPart = tempNumber - integerPart

                if (decimalPart >= 0.5) {
                    integerPart += 1
                }

                return integerPart / factor
            }

            function ceil1(number, precision=0) {
                const factor = Math.pow(10, precision)
                let tempNumber = number * factor

                let integerPart = Math.floor(tempNumber)
                if (tempNumber > integerPart) {
                    integerPart += 1
                }
                return integerPart / factor
            }

            function floor1(number, precision=0) {
                const factor = Math.pow(10, precision)
                let tempNumber = number * factor

                let integerPart = tempNumber < 0 ? -parseInt(-tempNumber) : parseInt(tempNumber)

                return integerPart / factor
            }

            function cloneDeep1(value) {
                if (typeof value !== 'object' || value === null) {
                    return value
                }

                let result = Array.isArray(value) ? [] : {}

                for (let key in value) {
                    if (value.hasOwnProperty(key)) {
                        result[key] = cloneDeep1(value[key])
                    }
                }
                return result
            }

            function trim1(string, chars = ' ') {
                if (!string) {
                  return '';
                }
                
                let start = 0;
                while (start < string.length && chars.includes(string[start])) {
                  start++;
                }
              
                let end = string.length - 1;
                while (end >= 0 && chars.includes(string[end])) {
                  end--;
                }

                return start > end ? '' : string.slice(start, end + 1);
              }

              function trimStart1(string, chars = ' ') {
                    if (!string) {
                        return ''
                    }

                    let start = 0
                    while (start < string.length && chars.includes(string[start])) {
                        start++
                    }
                    return string.slice(start)
              }
              
              function trimEnd1(string, chars = '') {
                if (!string) {
                    return ''
                }

                let end = string.length - 1
                while (end >= 0 && chars.includes(string[end])) {
                    end--
                }
                return string.slice(0, end - 1)
              }

              function assign1(target, ...sources) {
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object')
                }
                sources.forEach(source => {
                    if (source != null) {
                        for (let key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key]
                            }
                        }
                    }
                })
                return target
              }

              function isObject(obj) {
                return obj && typeof obj === 'object' && !Array.isArray(obj);
              }
              
              function merge1(target, ...sources) {
                sources.forEach(source => {
                  if (isObject(source)) {
                    Object.keys(source).forEach(key => {
                      const targetValue = target[key];
                      const sourceValue = source[key];
                      
                      if (isObject(targetValue) && isObject(sourceValue)) {
                        merge(targetValue, sourceValue);
                      } else {
                        target[key] = sourceValue;
                      }
                    });
                  }
                });
                return target;
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
        sample: sample1,
        isUndefined: isUndefined1,
        isNull: isNull1,
        isNil: isNil1,
        max: max1,
        min: min1,
        maxBy: maxBy1,
        minBy: minBy1,
        round: round1,
        sumBy: sumBy1,
        flatMap: flatMap1,
        flattenDepth: flattenDepth1,
        get: get1,
        has: has1,
        mapKeys: mapKeys1,
        mapValues: mapValues1,
        range: range1,
        concat: concat1,
        isEqual: isEqual1,
        repeat: repeat1,
        padStart: padStart1,
        padEnd: padEnd1,
        pad: pad1,
        keys: keys1,
        values: values1,
        random: random1,
        round: round1,
        ceil: ceil1,
        floor: floor1,
        cloneDeep: cloneDeep1,
        trim: trim1,
        trimStart: trimStart1,
        trimEnd: trimEnd1,
        assign: assign1,
        merge: merge1,
    }
}()