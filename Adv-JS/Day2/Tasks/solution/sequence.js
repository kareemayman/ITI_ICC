function Sequence(s, e, stp) {
    var list = genList(s, e, stp);
    this.start = s;
    this.end = list[list.length - 1];
    this.step = stp;
    this.getList = function() {
        return list;
    }
    this.append = function(val) {
        if (list.length === 0) {
            this.start = val;
            this.end = val;
            list.push(val);
            return
        }
        if (this.step + this.end === val) {
            this.end = val;
            list.push(val);
        } else {
            let err = new Error('Invalid value');
            throw err;
        }
    }
    this.prepend = function(val) {
        if (list.length === 0) {
            this.start = val;
            this.end = val;
            list.push(val);
            return
        }
        if (this.start - this.step === val) {
            this.start = val;
            list.unshift(val);
        } else {
            let err = new Error('Invalid value');
            throw err;
        }
    }
    this.pop = function() {
        if (list.length > 0) {
            this.end = list[list.length - 2]
            return list.pop();
        } else {
            let err = new Error('List is empty');
            throw err;
        }
    }
    this.deque = function() {
        if (list.length > 0) {
            this.start = list[1] 
            return list.shift();
        } else {
            let err = new Error('List is empty');
            throw err;
        }
    }
}

function genList(s, e, stp) {
    var list = [];
    for (var i = s; i <= e; i += stp) {
        list.push(i);
    }
    return list;
}

let seq = new Sequence(1, 10, 2);
console.log(seq.getList());
// seq.append(11);
// seq.append(12);
// seq.prepend(0)
// seq.prepend(-1)
seq.pop();
// seq.deque()
// seq.prepend(1)
console.log(seq.getList());