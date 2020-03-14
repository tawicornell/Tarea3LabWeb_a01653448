let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let UserModel = require('../models/User');
let router = require('express').Router();

//login to app with privileges
exports.index = (req, res) => {
  let user = req.user;
//console.log(user);
//comporbacion de privilegios
if ( user.role == 'admin' ) {
  res.render('dashboard/indexAdm', {user: user});
}else{ 

  res.render('dashboard/index', {user: user});
  }
}



//************************** 
//LEER TODO
//leer todos los json
const queries = require('../database/queries');
exports.readAll = (req, res) => {
  let user = req.user;
  if ( user.role == 'admin' ) {
  
  UserModel.all()
    .then((data) => {
      let users = data;
    //  console.log(users);
      res.render('dashboard/users', { users: users });
    });
    /*
//lectura de bd en json
  queries.database.getAll().then(database => {
    res.json(database); //responder con jsons

  });
*/
}else{ 
//Unathourized access even logged
  res.status(401).json({ msg: 'ERROR 403' });
  }

}


exports.delete = (req, res) => {
 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash('errors', errors.array());
    return res.redirect('back');
  }
  userModel.delete(id)
    .then((data) => {
      return res.redirect('back');
    })
    .catch((error) => console.log(error));
}


//*************************************