const User={
    _email: 'athar@25',
    _password: '123456',

    get email(){
        return this._email.toUpperCase()

    },
    set email(value){
        this._email=value

    }

}

const tea=Object.create(User)
console.log(tea.email,tea._password);