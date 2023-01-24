import mongoose from 'mongoose';


mongoose.connect('mongodb://mongo/admin')
.then(db => console.log('db is connected to:', db.connection.host))
.catch(err => console.error(err))