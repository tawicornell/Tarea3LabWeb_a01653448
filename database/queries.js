//HABILITA EL USO DE KNEX EN ESTE componente
let appConfig = require('../configs/app');

const knexfile = require('../knexfile');

const knex = require('knex')(knexfile[appConfig.env]);

//FUNCION select alls
//permite el exports que se puedan invocar las funciones de aqui de forma externa
module.exports = {
    //tiene una coleccion asociada a users
    database:{
        //qeries de knex mysql
        getAll: function(){
            return knex('users')
        },
        /*
        delete: function(id){
            return knex('users').where('id',id).del();
        },

        read: function(id){
//return knex('users').select('ALGO',''algo2',...).where('id',id);
            return knex('users').where('id',id).first();
            // first(); //DA UN OBJETO NO UN ARRAY

        },
        create: function(users){
            return knex('users').insert({...users});
            //el post lo hace solo pero necesita hacer match
        },

       
        update: function(users, id){
            //... todo el users que halle de la tabla
            return knex('users').where('id',id).update({...users});
        }
        
*/
    }
}