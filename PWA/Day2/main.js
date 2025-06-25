/**
 * create local DB
 * create tables
 * add data inside tables
 * retirieve data
 * update data
 * delete
 * search data
 */

//create DB---indexedDB
var dbPromise
document.getElementById("cDB").addEventListener("click", (event) => {
  dbPromise = idb.open("Shop", 1, (db) => {
    // var store = db.transaction.objectStore("Products")
    // store.createIndex("name", "name", { unique: true })
    db.createObjectStore('Orders',{keyPath:'id'})
    db.createObjectStore('Products',{keyPath:'id'})
  }) //open or create
})

//create table Products
document.getElementById("cPro").addEventListener("click", (event) => {
  dbPromise.then((db) => {
    //quries
    //db---->add,get,update Data
    var items = [
      {
        name: "Couch",
        id: "cch-blk-ma",
        price: 499.99,
        color: "black",
        material: "mahogany",
        description: "A very comfy couch",
        quantity: 3,
      },
      {
        name: "Armchair",
        id: "ac-gr-pin",
        price: 299.99,
        color: "grey",
        material: "pine",
        description: "A plush recliner armchair",
        quantity: 7,
      },
      {
        name: "Stool",
        id: "st-re-pin",
        price: 59.99,
        color: "red",
        material: "pine",
        description: "A light, high-stool",
        quantity: 3,
      },
      {
        name: "Chair",
        id: "ch-blu-pin",
        price: 49.99,
        color: "blue",
        material: "pine",
        description: "A plain chair for the kitchen table",
        quantity: 1,
      },
      {
        name: "Dresser",
        id: "dr-wht-ply",
        price: 399.99,
        color: "white",
        material: "plywood",
        description: "A plain dresser with five drawers",
        quantity: 4,
      },
      {
        name: "Cabinet",
        id: "ca-brn-ma",
        price: 799.99,
        color: "brown",
        material: "mahogany",
        description: "An intricately-designed, antique cabinet",
        quantity: 11,
      },
    ]

    //transactions
    var tx = db.transaction("Products", "readwrite")
    var store = tx.objectStore("Products")

    Promise.all(
      items.map((item) => {
        console.log("adding item ", item)
        return store.add(item)
      })
    )
      .then(() => {
        console.log("items added successfully")
      })
      .catch((err) => {
        tx.abort()
      })
  })
})

document.getElementById("cOrd").addEventListener("click", (event) => {
  dbPromise.then((db) => {
    var tx = db.transaction("Orders", "readwrite")
    var store = tx.objectStore("Orders")
    var items = [
      {
        name: "Cabinet",
        id: "ca-brn-ma",
        price: 799.99,
        color: "brown",
        material: "mahogany",
        description: "An intricately-designed, antique cabinet",
        quantity: 7,
      },
      {
        name: "Armchair",
        id: "ac-gr-pin",
        price: 299.99,
        color: "grey",
        material: "pine",
        description: "A plush recliner armchair",
        quantity: 3,
      },
      {
        name: "Couch",
        id: "cch-blk-ma",
        price: 499.99,
        color: "black",
        material: "mahogany",
        description: "A very comfy couch",
        quantity: 3,
      },
    ]

    Promise.all(
      items.map((item) => {
        return store.add(item)
      })
    )
      .catch((err) => {
        tx.abort()
      })
      .then(() => {
        console.log("items added")
      })
  })
})

document.getElementById("search").addEventListener("click", (event) => {
  var name = document.getElementById("prodName").value
  dbPromise
    .then((db) => {
      var tx = db.transaction("Products", "readonly")
      var store = tx.objectStore("Products")
      // return store.get(name)//primaryKey
      var indexer = store.index("name")
      return indexer.get(name)
    })
    .then((obj) => {
      if (!obj) {
        document.getElementById("data").innerHTML = "No results"
      } else {
        var s = ""
        for (var elem in obj) {
          s += elem + "::" + obj[elem] + "<br>"
        }
        document.getElementById("data").innerHTML = s
      }
    })
})

document.getElementById("dOrd").addEventListener("click", (event) => {
  getOrders().then((orders) => {
    console.log(orders)
  })
})

function getOrders() {
  return dbPromise.then((db) => {
    var tx = db.transaction("Orders", "readonly")
    var store = tx.objectStore("Orders")
    return store.getAll()
  })
}

/**
 * getOrders
 * foreach order---get product
 * check quantity
 * update product
 * Error-Handle
 * clear orders
 */

document.getElementById("btn").addEventListener("click", (event) => {
  getOrders()
    .then((orders) => {
      return ProcessOrders(orders)
    })
    .then((listProducts) => {
      UpdateProducts(listProducts)
    })
})

function ProcessOrders(orders) {
  return dbPromise.then((db) => {
    var tx = db.transaction("Products", "readonly")
    var store = tx.objectStore("Products")
    return Promise.all(
      orders.map((order) => {
        return store.get(order.id).then((product) => {
          return checkQuantity(product, order)
        })
      })
    ).catch((err) => {
      tx.abort()
    })
  })
}

function checkQuantity(product, order) {
  return new Promise(function (resolve, reject) {
    var qitem = product.quantity - order.quantity
    if (qitem < 0) {
      //out of stock
      reject("out of stock")
    } else {
      //update new quantity object
      // return object
      var item = product
      item.quantity = qitem
      resolve(item)
    }
  })
}

function UpdateProducts(Products) {
  dbPromise.then((db) => {
    var tx = db.transaction("Products", "readwrite")
    var store = tx.objectStore("Products")

    Promise.all(
      Products.map((product) => {
        return store.put(product)
      })
    )
      .catch((err) => {
        tx.abort()
      })
      .then(() => {
        console.log("Products updated successfully")
        ClearOrders()
      })
  })
}

function ClearOrders() {
  dbPromise.then((db) => {
    var tx = db.transaction("Orders", "readwrite")
    var store = tx.objectStore("Orders")
    
    store.clear().then(() => {
      console.log("All orders cleared")
    })
  })
}
