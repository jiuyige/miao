function LinkedList() {
  this._head = null
  this._length = 0
}

// 返回链表第idx个结点的值
LinkedList.prototype.get = function(idx) {
  var p = this._head
  while (idx > 0 && p) {
    p = p.next
    idx--
  }
  if (p) {
    return p.val
  } else {
    return undefined
  }
}

// 设置链表第idx项的值为val
LinkedList.prototype.set = function(idx, val) {
  var p = this._head
  while (idx > 0 && p) {
    p = p.next
    idx--
  }
  p.val = val
}

// 在链表末尾新增一个结点，值为val
LinkedList.prototype.push = function(val) {
   var node = {
    val: val,
    next: null,
   }
   this._length++
   if (this._head == null) {
    this._head = node
    return
   }
   var p = this._head
   while (p.next) {
    p = p.next
   }
   p.next = node
}

// 返回链表末尾结点的值，并删除末尾结点
LinkedList.prototype.pop = function() {
  if (this._head == null) { //一个值
    return undefined
  }
  this._length--
  if (this._head.next == null) { //两个值
    var result = this.head.val
    this._head = null
    return null
  }
  var p = this._head
  while (p.next.next) {
    p = p.next
  }
  var result = p.next.val
  p.next = null
  return result
}

// 在链表头部新增一个结点，值为val
LinkedList.prototype.unshift = function(val) {
  var node = {
    val: val,
    next: this._head
  }
  this._length++
  this._head = node
}

// 返回链表第一个节点的值，并删除这个节点
LinkedList.prototype.shift = function() {
  if (this._head == null) {
    return undefined
  }
  this._length--
  var result = this._head.val
  this._head = this._head.next
  return result
}

LinkedList.prototype.toArray = function() {
  var result = []
  var p = this._head
  while (p) {
    result.push(p.val)
    p = p.next
  }
  return result
}

LinkedList.prototype.toString = function() {
  return this.toArray().join('->')
}

Object.defineProperty(LinkedList.prototype, 'length', {
  get: function() {
    return this._length
  }
})

// 表示一个集合（集合中元素没有序，但不能重复）
// 构造函数可选的可以传入集合中的初始值，但会被去重后存放
function MySet(initalValues = []) {
  this._elements = []
  for (let item of initalValues) {
    this.add(item)
  }
}
// 向集合中添加元素
MySet.prototype.add = function (val) {
  if (!this._elements.includes(val)) {
    this._elements.push(val)
  }
  return this
}
// 从集合中删除item元素
MySet.prototype.delete = function (item) {
  let idx = this._elements.indexOf(item)
  if (idx >= 0) {
    this._elements.splice(idx, 1)
    return true
  }
  return false
}

// 获取集合中的元素用 c.size，它是一个getter
Object.defineProperty(MySet.prototype, 'size', {
  get: function () {
    return this._elements.length
  },
})

// 清空集合中的所有元素
MySet.prototype.clear = function () {
  this._elements = []
}

// 判断集合中是否存在某元素
MySet.prototype.has = function (item) {
  return this._elements.includes(item)
}
// 遍历集合中的元素（顺序无所谓）
MySet.prototype.forEach = function (func) {
  for (let item of this._elements) {
    func(item)
  }
}

// 表示一个映射
// 这个映射中，可以把任何值映射到任何值，映射的key不限于字符串
function MyMap(initPairs = []) {
  // 用一个数组来表示，偶数项表示key，奇数项表示value.[key, val,key,val]
  this._pairs = []
  for (let pair of initPairs) {
    let key = pair[0]
    let val = pair[1]
    this.set(key, val)
  }
}
MyMap.prototype = {
  constructor: MyMap,
  // 设置映射中的key所对应的值为val
  set: function (key, val) {
    for (let i = 0; i < this._pairs.length; i += 2) {
      if (this._pairs[i] === key) {
        this._pairs[i + 1] = val
        return this
      }
    }
    this._pairs.push(key, val)
    return this
  },
  // 获取这个映射中key所对应的val
  get: function (key) {
    for (let i = 0; i < this._pairs.length; i += 2) {
      if (this._pairs[i] === key) {
        return this._pairs[i + 1]
      }
    }
    return undefined
  },
  // 判断这个映射中是否存在这个key的映射
  has: function (key) {
    for (let i = 0; i < this._pairs.length; i += 2) {
      if (this._pairs[i] === key) {
        return true
      }
    }
    return false
  },
  // 删除这个映射中key及其映射的值的这一对儿
  delete: function (key) {
    for (let i = 0; i < this._pairs.length; i++) {
      if (this._pairs[i] === key) {
        this._pairs.splice(i, 2)
        return true
      }
    }
    return false
  },
  // 清空这个映射中所有的映射对儿
  clear: function () {
    this._pairs = []
    return this
  },
  // 获取这个映射中映射对儿的数量
  get size() {
    return this._pairs.length / 2
  },
  // 遍历这个映射中所有的映射对儿
  forEach(iterator) {
    for (let i = 0; i < this._pairs.length; i++) {
      iterator(this._pairs[i], this._pairs[i + 1])
    }
  },
}

// 表示一个栈：即后进先出，先进后出
function Stack() {
  this._elements = []
}
// 向栈中增加元素
Stack.prototype.push = function (val) {
  this._elements.push(val)
}
// 从栈中取出元素并删除栈顶元素
Stack.prototype.pop = function () {
  return this._elements.pop()
}
// 查看但不删除栈顶元素
Stack.prototype.peek = function () {
  return this._elements[this._elements.length - 1]
}

// stack.size 获取栈中元素的数量
Object.defineProperty(Stack.prototype, 'size', {
  get: function () {
    return this._elements.length
  },
})

// 表示一个队列：即先进先出，后进后出
function Queue() {
  this._head = null
  this._tail = null
  this._length = 0
}

// 向队列中增加元素
Queue.prototype.add = function (val) {
  let node = {
    val: val,
    next: null,
  }
  this._length++
  if (this._head == null) {
    this._head = this._tail = node
    return this
  }
  this._tail.next = node
  this._tail = node
  return this
}
// 从队头取出元素并删除队头元素
Queue.prototype.pop = function () {
  if (this._head == null) {
    return undefined
  }
  this._length--
  if (this._head === this._tail) {
    let result = this._head.val
    this._head = this._tail = null
    return result
  }
  let result = this._head.val
  this._head = this._head.next
  return result
}
// 查看队头元素（没有查看队尾元素的功能）
Queue.prototype.peek = function () {
  return this._head.val
}
// 以及queue.size获取队列的长度
Object.defineProperty(Queue.prototype, 'size', {
  get: function () {
    return this._length
  },
})