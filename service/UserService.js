'use strict';
var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;

var bcrypt = require("../index").bcrypt;
//var passport = require("../index").passport;


/**
 * show to the logged user his personal informations.
 *
 * id_user Long id of the logged user
 * returns User
 **/
exports.getUserById = function(id_user) {
  return new Promise(function(resolve, reject) {
    resolve(db.select().table(schema.tables.USER).where("id", id_user));
  });
}


/**
 * log the user.
 *
 * email String email of the user to log
 * password String password of the user to log
 * returns User
 **/
exports.logUser = function(email,password) {

  return new Promise(function(resolve, reject) {
              
              db.select().table(schema.tables.USER).where(schema.fields.EMAIL, email).then(
                function(result) {
                  //no user found case
                  if (Object.keys(result).length == 0)
                    return reject({status: 405, message:"Please enter valid credentials"});
                  else {//successfully logged case
                      if (bcrypt.compareSync(password, result[0].password))
                        return resolve(result);
                      else
                        return reject({status: 405, message:"Please enter valid credentials"});  
                  }
                }
              );                                       
  });
}


/**
 * register new user to the web site
 *
 * body User user object that needs to be registered.
 * no response value expected for this operation
 **/
exports.registerUser = function(body) {

  console.log("inside register");
  return new Promise(function(resolve, reject) {
    
    //control valid user and password   
    if (!validUser(body.email, body.password))
      return reject(405);
    else{

      //control if there is another user with that email
      db.select().table(schema.tables.USER).where(schema.fields.EMAIL, body.email).then(function(data) {

        var obj = Object(data);

        //email already in use
        if (obj.length>0) 
          return reject({status: 405, message:"Email already in use"});
        else
          {
            if (body.password!=body.password_confirm) //uncorrect password
           
               return reject({status: 405, message:"The passwords doesn't match"});
           
            else{ //correctly registered
              var user = {
                "first_name": body.first_name,
                "last_name": body.last_name,
                "email":body.email,
                "password":bcrypt.hashSync(body.password, 10)
              }  
              
              db(schema.tables.USER).insert(user).then(function(){
                
                return resolve(db.select(schema.fields.PK, schema.fields.EMAIL, "first_name", "last_name").table(schema.tables.USER).where(schema.fields.EMAIL, user.email));
                
              })
            
            }
          }   


      })
      

    }
    
    
      //return reject({status: 405, message:"Something goes wrong"});
    
  });
}


function validUser(email, password) {
  const validEmail = typeof email == 'string' && 
                              email.trim() != ' ';

  const validPassword = typeof password == 'string' &&
                                  password.trim() != ' ' &&
                                  password.trim().length >= 6;

  return validEmail && validPassword;                                                            
}
