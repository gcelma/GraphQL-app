import { Clients } from './db'
import { rejects } from 'assert';


export const resolvers = {
    Query: {
        getClients: (root, { amount }) => {
            return Clients.find({}).limit(amount)
        },
        getClient: (root, { id }) => {
            return new Promise((resolve, object) => {
                Clients.findById(id, (error, client) => {
                    if(error) rejects(error)
                    else resolve(client)
                })
            })
        }
    },
    Mutation: {
        createClient: (root, { input }) => {
            const newClient = new Clients({
                name: input.name,
                surname: input.surname,
                company: input.company,
                emails: input.emails,
                age: input.age,
                profile: input.profile,
                orders: input.orders
            })
            newClient.id = newClient._id

            return new Promise((resolve, object) => {
                newClient.save((error) => {
                    if(error) rejects(error)
                    else resolve(newClient)
                })
            })
        },
        updateClient: (root, { input }) => {
            return new Promise((resolve, object) => {
                Clients.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, client) => {
                    if(error) rejects(error)
                    else resolve(client)
                })
            })
        },
        deleteClient: (root, { id }) => {
            return new Promise((resolve, object) => {
                Clients.findOneAndRemove({ _id: id }, (error) => {
                    if(error) rejects(error)
                    else resolve("Deletion completed")
                })
            })
        }
    }
}