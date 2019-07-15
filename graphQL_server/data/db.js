import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/clients', {useNewUrlParser: true})

// Define clients schema

const clientsSchema = new mongoose.Schema({
    name: String,
    surname: String,
    company: String,
    emails: Array,
    age: Number,
    profile: String,
    orders: Array
})

const Clients = mongoose.model('clients', clientsSchema)

export { Clients }