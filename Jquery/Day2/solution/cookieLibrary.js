;(function (global) {
  const cookieLib = {
    getCookie(cookieName) {
      if (arguments.length != 1) {
        let err = new Error("Invalid number of arguments")
        throw err
      }
      const res = hasCookie(cookieName)
      if (res) return res
    },

    setCookie(name, value, exp = undefined) {
      if (arguments.length < 2 || arguments.length > 3) {
        let err = new Error("Invalid number of arguments")
        throw err
      }
      if (exp) {
        try {
          document.cookie = name + "=" + value + ";expires=" + exp.toUTCString()
        } catch (e) {
          let err = new Error("Invalid date format")
          throw err
        }
      } else {
        document.cookie = name + "=" + value
      }
    },

    deleteCookie(name) {
      if (arguments.length != 1) {
        let err = new Error("Invalid number of arguments")
        throw err
      }
      if (getCookie(name)) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC"
      }
    },

    allCookieList() {
      let cookies = document.cookie
      let cookieArray = cookies.split(";")
      let obj = {}
      for (let i = 0; i < cookieArray.length; i++) {
        cookieArray[i] = cookieArray[i].trim()
        let current = cookieArray[i].split("=")
        obj[current[0]] = current[1]
      }
      return obj
    },

    hasCookie(name) {
      let cookies = document.cookie
      let cookieArray = cookies.split(";")
      let keysArr = []
      for (let i = 0; i < cookieArray.length; i++) {
        cookieArray[i] = cookieArray[i].trim()
        let current = cookieArray[i].split("=")
        keysArr[current[0]] = current[1]
      }
      if (keysArr[name] == undefined) {
        console.log("cookie doesn't exist")
        return false
      }
      return keysArr[name]
    },
  }

  global.$c = cookieLib
})(window)
