const Sequelize = require('sequelize')

let db
if(process.env.NODE_ENV == 'testing') {
    db = new Sequelize({
        dialect: 'sqlite',
        storage: __dirname + '/../../test/test.db'
    })
} else {
    db = new Sequelize({
        dialect: 'mysql',
        database: 'cbsocialmediadb',
        username: 'cbsocialuser',
        password: 'cbsocialpass',
        port: 3303
    })
}



const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
}
const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false
}

const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
})

const Posts = db.define('post', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const Comments = db.define('comment', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT('tiny')
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)



module.exports = {
    db,
    Users,
    Posts,
    Comments
}