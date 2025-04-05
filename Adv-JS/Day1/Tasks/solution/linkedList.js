let linkedListObj = {
    data: [],
    pushVal: function(value) {
        if (this.data.length === 0) {
            this.data.push({val: value});
            return
        }
        if (typeof value !== 'number') {
            let error = new Error('Value must be a number');
            throw error;
        }
        if (this.data[this.data.length - 1].val >= value) {
            let error = new Error('Value must be greater than the last element');
            throw error;
        }
        this.data.push({val: value});
    },
    popVal: function() {
        if (this.data.length === 0) {
            let error = new Error('No elements to pop');
            throw error;
        }
        this.data.pop();
    },
    enqueue: function(value) {
        if (this.data.length === 0) {
            this.data.unshift({val: value});
            return
        }
        if (typeof value !== 'number') {
            let error = new Error('Value must be a number');
            throw error;
        }
        if (this.data[0].val <= value) {
            let error = new Error('Value must be less than the first element');
            throw error;
        }
        this.data.unshift({val: value});
    },
    dequeue: function() {
        if (this.data.length === 0) {
            let error = new Error('No elements to dequeue');
            throw error;
        }
        this.data.shift();
    },
    display: function() {
        let arr = []
        for (let i = 0; i < this.data.length; i++) {
            arr.push(this.data[i].val);
        }
        return arr;
    },
    insert: function(value, index) {
        if (typeof value !== 'number') {
            let error = new Error('Value must be a number');
            throw error;
        }
        if (index < 0 || index > this.data.length) {
            let error = new Error('Index out of bounds');
            throw error;
        }
        if (this.data.length === 0) {
            this.data.push({val: value});
            return
        }
        if (index === this.data.length) {
            if (this.data[this.data.length - 1].val >= value) {
                let error = new Error('Value must be greater than the last element');
                throw error;
            }
            this.data.push({val: value});
            return
        }
        if (index === 0) {
            if (this.data[0].val <= value) {
                let error = new Error('Value must be less than the first element');
                throw error;
            }
            this.data.unshift({val: value});
            return
        }
        if (this.data[index - 1].val >= value || this.data[index].val <= value) {
            let error = new Error('Value must be between the previous and next elements');
            throw error;
        }
        this.data.splice(index, 0, {val: value});
        
    },
    remove: function(value) {
        if (typeof value !== 'number') {
            let error = new Error('Value must be a number');
            throw error;
        }
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].val === value) {
                this.data.splice(i, 1);
                return;
            }
        }
        let error = new Error('Value not found in the list');
        throw error;
    }
}

// linkedListObj.pushVal(5);
// linkedListObj.popVal();
// linkedListObj.enqueue(1);
// console.log(linkedListObj.data);
// linkedListObj.insert(3,2)
// linkedListObj.remove(2,1)
// console.log(linkedListObj.data);
// console.log(linkedListObj.display());