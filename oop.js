// 表示一个映射
  
  
  // 这个映射中，可以把任何值映射到任何值，映射的key不限于字符串
  function myMap() {
    this.items = new Object()
  }

  myMap.prototype = {
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
    this.items = []
  }
  // 向栈中增加元素
  Stack.prototype.push = function(val) {
    this.items.push(val)
  }
  // 从栈中取出元素并删除栈顶元素
  Stack.prototype.pop = function() {
    if (this.items.length === 0) {
      return null
    }
    return this.items.pop()
  }
  // 查看但不删除栈顶元素
  Stack.prototype.peek = function() {
    if (this.items.length === 0) {
      return null
    }
    return this.items[this.items.length - 1]
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