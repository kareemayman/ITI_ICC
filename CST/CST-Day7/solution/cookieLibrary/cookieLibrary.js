function getCookie(cookieName) {
    const res = hasCookie(cookieName)
    if(res)
        return res
}

function setCookie(name, value, exp = undefined) {
    if (exp) {
        document.cookie = name + "=" + value + ";expires=" + exp.toUTCString()
    } else {
        document.cookie = name + "=" + value
    }
}

function deleteCookie(name) {
    if (getCookie(name)) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC"
    }
}

function allCookieList() {
    let cookies = document.cookie
    let cookieArray = cookies.split(";")
    let obj = {}
    for (let i=0; i<cookieArray.length; i++) {
        cookieArray[i] = cookieArray[i].trim()
        let current = cookieArray[i].split("=")
        obj[current[0]] = current[1]
    }
    return obj
}

function hasCookie(name) {
    let cookies = document.cookie
    let cookieArray = cookies.split(";")
    let keysArr = []
    for (let i=0; i<cookieArray.length; i++) {
        cookieArray[i] = cookieArray[i].trim()
        let current = cookieArray[i].split("=")
        keysArr[current[0]] = current[1]
    }
    if (keysArr[name] == undefined) {
        console.log("cookie doesn't exist")
        return false
    }
    return keysArr[name]
}

// setCookie('kareem', 'mohamed')
// setCookie('age', 24)
// setCookie('ahmed', 'ashraf')
// console.log(getCookie('kareem'))
// setCookie('kareem', 'ayman', new Date("9-9-2022"))
// console.log(allCookieList())
// console.log(hasCookie('age'))