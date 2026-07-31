const {faker}=require('@faker-js/faker')

module.exports={
    users:{
        standard:{
            username:'standard_user',
            password:'secret_sauce'
        },
        lockedOut:{
            username:'locked_out_user',
            password:'secret_sauce'
        }
    },
cart:{
    title:'Swag Labs',
    product:'Sauce Labs Backpack'
},

fillFormUser:{
    username:faker.person.firstName(),
    lastname:faker.person.lastName(),
    zip:faker.location.zipCode(),
    
},


    loginTestData:[
        {
            description:'It should pass when "standard_user" is logged in',
            username:'standard_user',
            password:'secret_sauce',
            expectedResult:'success',
            expectedMessage:'Swag Labs'
        },
        {
            description:'should fail if user will try to log in with "locked_out_user"',
            username:'locked_out_user',
            password:'secret_sauce',
            expectedResult:'fail',
            expectedMessage:'Epic sadface: Sorry, this user has been locked out.'
        }
    ]
}