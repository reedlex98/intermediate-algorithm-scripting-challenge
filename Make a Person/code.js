var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let _name = firstAndLast.split(' ')[0]
    let _lastName = firstAndLast.split(' ')[1]
    let _fullName = firstAndLast
    let self = this
    this.getFirstName = function() {
        return _name
    }
    this.getLastName = function() {
        return _lastName
    }
    this.getFullName = function() {
        return _fullName
    }
    this.setFirstName = function(name) {
        _name = name
        if (self.getFullName().split(' ')[0] !== name) self.setFullName(`${name} ${self.getLastName()}`)
    }
    this.setLastName = function(last) {
        _lastName = last
        if (self.getFullName().split(' ')[1] !== last) self.setFullName(`${self.getFirstName()} ${last}`)
    }
    this.setFullName = function(firstAndLast) {
        let name = firstAndLast.split(' ')[0]
        let last = firstAndLast.split(' ')[1]
        _fullName = `${name} ${last}`
        if (self.getFirstName() !== name) self.setFirstName(name)
        if (self.getLastName() !== name) self.setLastName(last)
    }
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
bob.setFirstName('Williams')
bob.setFullName('Williams Alfred')
console.log(bob.getFirstName())
console.log(bob.getFullName())