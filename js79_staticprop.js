class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(this.username);

    }
    createId(){
        return '234'

    }
    }
    const athar=new User("AThar")
    //console.log(athar.createId());


    class teacher extends User{
        constructor(username,email){
            this.email=email
            super(username)
        }

    }
    const iphone=new teacher("iphone","Athar@24")
    console.log(iphone.createdId());