
  // 表示一个二维向量
  function Vector(x, y) {
    this.x = x
    this.y = y
  }
  Vector.prototype.plus = function (v) {
    var x = this.x + v.x
    var y = this.y + v.y
    return new Vector(x, y)
  }
  Vector.prototype.minus = function (v) {
    var x = this.x - v.x
    var y = this.y - v.y
    return new Vector(x, y)
  }
  // Vector.prototype.length = function () {
  //   return Math.sqrt(this.x * this.x + this.y * this.y)
  // }
  Object.defineProperty(Vector.prototype, 'length', {
    get: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
  })

  var v1 = new Vector(1, 2)
  var v2 = new Vector(3, -4)

  // var v3 = v1.plus(v2)
  // var v4 = v2.minus(v1)

  // var l = v4.length()



  // 表示一个复数(complex number)
  function Complex(real, imag) {
    this.real = real
    this.imag = imag
  }
  Complex.prototype.plus = function(c) {
    var real = this.real + c.real
    var imag = this.imag + c.imag
    return new Complex(real, imag)
  }
  Complex.prototype.minus = function(c) {
    var real = this.real - c.real
    var imag = this.imag - c.imag
    return new Complex(real, imag)
  }
  Complex.prototype.multiple = function(c) {
    var real = this.real * c.real - this.imag * c.imag
    var imag = this.real * c.imag + this.imag * c.real
    return new Complex(real, imag)
  }
  Complex.prototype.div = function(c) {
    var helper = new Complex(c.real, -c.imag)
    var fenmu = c.multiple(helper).real
    var fenzi = this.multiple(helper)

    var real = fenzi.real / fenmu
    var imag = fenzi.imag / fenmu

    return new Complex(real, imag)
  }
  Complex.prototype.toString = function() {
    return '' + this.real + (this.imag > 0 ? "+" : '') + this.imag + 'i'
  }

  // var c1 = new Complex(4, 5)
  // var c2 = new Complex(1, -2)

  // var c3 = c1.plus(c2)
  // var c4 = c1.minus(c2)
  // var c5 = c1.multiple(c2)
  // var c6 = c1.div(c2)

  // console.log(c6.toString()) // 2+3i

  // 
  // function Matrix() {

  // }


  // =================================================================
  // =================================================================
  // =================================================================
  // =================================================================
  // 以下作业写好后上传到： `https://[username].github.io/miao/oop.js`,
  // =================================================================
  // =================================================================
  // =================================================================
  // =================================================================

  // 表示一个单向链表
  function LinkedList() {
   this._head=null
   this._length=0
  }
  function Node(idx){
    this.idx=idx
    this.next=null
  }
  // 返回链表第idx个结点的值
  LinkedList.prototype.at = function(idx) {
    var p=this._head
    while(idx > 0 && p){
      p=p.next
      idx--
    }
    if(p){
      return p.val
    }else{
      return undefined
    }
  }
  // 设置链表第idx项的值为val
   LinkedList.prototype.set = function(idx, val) {
    var p =this._head
    while(idx>0 && p){
      p=p.next
      idx--
    }
    if(p){
      p.val =val
    }
  }
  // 在链表末尾新增一个结点，值为val
  LinkedList.prototype.append = function(val) {
    var node  ={
      val:val,
      next:null,
    }
    this._length++
    if(this._head == null){
      this._head = node
      return this
    }
    var p = this._head
    while(p.next){
      p=p.next
    }
    p.next = node
    return this
  }
  // 返回链表末尾结点的值，并删除末尾结点
  LinkedList.prototype.pop = function() {
    if(this._head == null){
      return undefined
    }
    this._length--
    if(this._head.next==null){
      var result = this._head.val
      this._head = null
      return result
    }
    var p= this._head
    while(p.next.next){
      p=p.next
    }
    var result =p.next.val
    p.next = null
    return result
  }
  // 在链表头部新增一个结点，值为val
  LinkedList.prototype.prepend = function(val) {
    var node = {
      val:val,
      next:this._head
    }
    this._length++
    this._head = node
    return this
  }
  // 返回链表第一个结点的值，并删除这一个结点
  LinkedList.prototype.shift = function() {
    if(this._head == null){
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
    while(p){
      result.push(p.val)
      p = p.next
    }
    return result
  }
  LinkedList.prototype.toString = function() {
  return this.toArray().join('->')
 }
 Object.defineProperty(LinkedList.prototype,'size',{
  get:function(){
    return this._length
  }
 })



  // 表示一个集合（集合中元素没有序，但不能重复）
  // 构造函数可选的可以传入集合中的初始值，但会被去重后存放
  function MySet(initalValues = []) {
    this._elements = []
    for(var val of initalValues){
      this.add(val)
    }
  }
  // 向集合中添加元素
  MySet.prototype.add = function(value) {
    if(!this._elements.includes(value)){
      this._elements.push(value)
    }
    return this
  }
  // 从集合中删除item元素
  MySet.prototype.delete = function(value) {
    var idx= this._elements.indexOf(value)
    if(idx >= 0){
      this._elements.splice(idx,1)
    }
    return this
  }
  
  // 获取集合中的元素用 c.size，它是一个getter
    Object.defineProperty(MySet.prototype,'size',{
     get:function(){
      return this._elements.length
     }
    })

  // 清空集合中的所有元素
  MySet.prototype.clear = function() {
    this._elements=[]
    return this
  }

  // 判断集合中是否存在某元素
  MySet.prototype.has = function(value) {
    return this._elements.includes(value);
  }
  // 遍历集合中的元素（顺序无所谓）
  MySet.prototype.forEach = function(func) {
    for (let value of this._elements) {
    func(value)
  }
  }

  //var c = new Collection() //初始化一个空集合
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
  function MyMap(initPairs = []) {
    this._pairs = []
    for(var pair of initPairs){
      var key = pair[0]
      var val = pair[1]
      this.set(key,val)
    }
  }
  MyMap.prototype = {
    // 设置映射中的key所对应的值为val
    set: function(key, val) {
      for(var i=0;i<this._pairs.length;i+=2){
      if(this._pairs[i] === key){
        this._pairs[i+1]=val
        return this
      }
      }
      this._pairs.push(key,val)
      return this
    },
    // 获取这个映射中key所对应的val
    get: function(key) {
      for(var i = 0; i<this._pairs.length;i+=2){
        if(this._pairs[i] === key){
          return this._pairs[i+1]
        }
      }
      return undefined
    },
    // 判断这个映射中是否存在这个key的映射
    has: function(key) {
      for(var i = 0;i<this._elements.length;i+=2){
        if(this._pairs[i]===key){
          return true
        }
      }
      return false
    },
    // 删除这个映射中key及其映射的值的这一对儿
    delete: function(key) {
      for(var i=0;i<this._pairs.length;i+=2){
        if(this._pairs[i] === key){
          this._pairs.splice(i,2)
          return true
        }
      }
      return false
    },
    // 清空这个映射中所有的映射对儿
    clear: function() {
      this._pairs=[]
      return this
    },
    // 获取这个映射中映射对儿的数量
    get size() {
      return this._pairs.length/2
    },
    // 遍历这个映射中所有的映射对儿
    forEach(iterator) {
      for(var i = 0;i<this._elements.length;i+=2){
        iterator(this._pairs[i+1],this._pairs[i])
      }
    },
  }


  // 表示一个栈：即后进先出，先进后出
  function Stack() {
    this._elements=[]
  }
  // 向栈中增加元素
  Stack.prototype.push = function(val) {
    this._elements.push(val)
  }
  // 从栈中取出元素并删除栈顶元素
  Stack.prototype.pop = function() {
    return this._elements.pop()
  }
  // 查看但不删除栈顶元素
  Stack.prototype.peek = function() {
    return this._elements[this._elements.length - 1]
  }
  Object.defineProperty(Stack.prototype,'size',{
    get:function(){
      return this._elements.length
    }
  })
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
    this._head = null
    this._tail = null
    this._length = 0
  }
  
  // 向队列中增加元素
  Queue.prototype.add = function(val) {
    var node={
      val:val,
      next:null,
    }
    this._length++
    if(this._head == null){
      this._head = this._tail = node
      return this
    }
    this._tail.next=node
    this._tail = node
    return this
  }
  // 从队头取出元素并删除队头元素
  Queue.prototype.pop = function() {
    if(this._head == null){
      return undefined
    }
    this._length--
    if(this._head == this._tail){
      var result=this._haed.val
      this._head = this.tail = null
      return result
    }
    var result = this._head.val
    this._head = this._head.next
    return result
  }
  // 查看队头元素（没有查看队尾元素的功能）
  Queue.prototype.peek = function() {
    return this._head.val
  }
  // 以及queue.size获取队列的长度
  Object.defineProperty(Queue.prototype,'size',{
    get:function(){
      return this._length
    }
  })