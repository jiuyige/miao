// 表示一个单向链表
function LinkedList() {
    this.head = null
  }

  // 返回链表第idx个结点的值
  LinkedList.prototype.get = function(idx) {
    if (idx < 0) {
      return null
    }

    var current = this.head
    var count = 0

    while (current !== null) {
      if (count === idx) {
        return current.data
      }
      count++
      current = current.next
    }

    return null
  }

  // 设置链表第idx项的值为val
  LinkedList.prototype.set = function(idx, val) {
    if (idx < 0) {
      return false
    }

    var current = this.head
    var count = 0

    while (current !== null) {
      if (count === idx) {
        current.data = val
        return true
      }
      count++
      current = current.next
    }

    return false
  }
  
  // 在链表末尾新增一个结点，值为val
  LinkedList.prototype.push = function(val) {
      var newNode = new Node(val) // 创建一个新的节点
      if (this.head === null) {
          this.head = newNode // 如果链表为空，将新节点设为头节点
      } else {
          var current = this.head
          while (current.next !== null) {
              current = current.next // 遍历链表找到最后一个节点
          }
          current.next = newNode // 将新节点添加到最后一个节点的 next
      }
  }

  // 返回链表末尾结点的值，并删除末尾结点
  LinkedList.prototype.pop = function() {
      if (this.head === null) {
          return null // 如果链表为空，返回null
      }
  
      // 如果链表只有一个节点，返回值
      if (this.head.next === null) {
          var value = this.head.data
          this.head = null
          return value
      }
  
      var current = this.head
      var previous = null
  
      // 遍历链表直到倒数第二个节点
      while (current.next !== null) {
          previous = current
          current = current.next
      }
  
      var value = current.data // 记录最后一个节点的值
      previous.next = null // 删除最后一个节点
      return value // 返回最后一个节点的值
  }

  // 在链表头部新增一个结点，值为val
  LinkedList.prototype.unshift = function(val) {
    var newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
  }
  
  // 返回链表第一个节点的值，并删除这个节点
  LinkedList.prototype.shift = function() {
      if (this.head === null) {
          return null // 如果链表为空，返回 null
      }
  
      var value = this.head.data // 记录头节点的值
      this.head = this.head.next // 将头节点指向下一个节点
      return value // 返回原头节点的值
  }

  LinkedList.prototype.toArray = function() {
    
  }



  // 表示一个集合（集合中元素没有序，但不能重复）
  // 构造函数可选的可以传入集合中的初始值，但会被去重后存放
  function MySet(initalValues) {
    this.items = {}
    if (Array.isArray(initalValues)) {
        for (var i = 0; i < initalValues.length; i++) {
            this.add(initalValues)
        }
    }
  }
  // 向集合中添加元素
  MySet.prototype.add = function(item) {
      if (!this.items.includes(item)) {
        this.items.push(item)
      }
      return this
  }

  // 从集合中删除 item 元素
  MySet.prototype.delete = function(item) {
     var idx = this.items.indexOf(item)
     if (idx > 0) {
        this.items.splice(idx, 1)
     }
     return this
  }
  
  // 获取集合中的元素用 c.size，它是一个getter
  Object.defineProperty(MySet.prototype, 'size',{
    get: function() {
        return this.items.length
    }
  })


  // 清空集合中的所有元素
  MySet.prototype.clear = function() {
    this.items = []
    return this
  }

  // 判断集合中是否存在某元素
  MySet.prototype.has = function(item) {
    return this.items.includes(item)
  }

  // 遍历集合中的元素（顺序无所谓）
  MySet.prototype.forEach = function(func) {
    for (var value of this.items) {
        func(value)
    }
  }

  var c = new MySet() //初始化一个空集合
  // c.add(5)
  // c.add(5)
  // c.size // 1
  // c.add(8)
  // c.size // 2
  // c.has(5) // true
  // c.has(999) // false
  // c.delete(5)
  // c.size // 1
  // c.delete(9)
  // c.size // 1




  // 表示一个映射
  // 这个映射中，可以把任何值映射到任何值，映射的key不限于字符串
  function MyMap() {
    this.items = new Object()
  }

  MyMap.prototype = {
    // 设置映射中的key所对应的值为val
    set: function(key, val) {
      this.items[key] = val
    },
    // 获取这个映射中key所对应的val
    get: function(key) {
      return this.items[key]
    },
    // 判断这个映射中是否存在这个key的映射
    has: function(key) {
      return this.items.hasOwnProperty(key)
    },
    // 删除这个映射中key及其映射的值的这一对儿
    delete: function(key) {
      if (this.has(key)) {
        delete this.items[key]
        return true
      }
      return false
    },
    // 清空这个映射中所有的映射对儿
    clear: function() {
      this.items = {}
    },
    // 获取这个映射中映射对儿的数量
    get size() {
      return Object.keys(this.items).length
    },
    // 遍历这个映射中所有的映射对儿
    forEach(iterator) {
      for (var key in this.items) {
        if (this.items.hasOwnProperty(key)) {
          iterator(key, this.items[key])
        }
      }
    },
  }


  // 表示一个栈：即后进先出，先进后出
  function Stack() {
    this._items = []
  }
  // 向栈中增加元素
  Stack.prototype.push = function(val) {
    this._items.push(val)
  }
  // 从栈中取出元素并删除栈顶元素
  Stack.prototype.pop = function() {
    if (this._items.length === 0) {
      return null
    }
    return this._items.pop()
  }
  // 查看但不删除栈顶元素
  Stack.prototype.peek = function() {
    if (this._items.length === 0) {
      return null
    }
    return this.items[this._items.length - 1]
  }

  // stack.size 获取栈中元素的数量

  // var stack = new Stack()
  // stack.in(1)
  // stack.in(2)
  // stack.size // 2
  // stack.in(3)
  // stack.size // 3
  // stack.out() // 3
  // stack.out() // 2
  // stack.in(5)
  // stacik.out() // 5 


  // 表示一个队列：即先进先出，后进后出
  function Queue() {
    this.item = []
  }
  
  // 向队列中增加元素
  Stack.prototype.add = function(val) {
    this.items.push(val)
  }
  // 从队头取出元素并删除队头元素
  Stack.prototype.pop = function() {
    if (this.items.lenghth === 0) {
      return null
    }
    return this.items.shift()
  }
  // 查看队头元素（没有查看队尾元素的功能）
  Stack.prototype.peek = function() {
    if (this.items.length === 0) {
      return null
    }
    return this.items[0]
  }
  // 以及queue.size获取队列的长度
  Object.defineProperty(Queue.prototype, 'size', {
    get: function() {
      return this.items.length
    }
  })