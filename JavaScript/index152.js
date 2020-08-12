const user = {
    username: null,
    password: null,
    greet: function() {
        if (this.username != null) {
            console.log(`Hello, I'm user ${this.username}`)
        }
        else {
            console.log(`Please assign a username value`)
        }
    },
    updaterUsername: function(string) {
        this.username = string
        
    },
    updatePassword: function(string) {
        this.password = string

    }

}
user.greet()
user.updaterUsername('Brandon2601')
user.updatePassword('PinkJax12')
user.greet()