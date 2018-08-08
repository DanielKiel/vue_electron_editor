export default class DatabaseModel {
    constructor(modelName) {
        if (this.store === undefined) {
            let Datastore = require('nedb')

            this.store =  db[modelName]
        }

        this.struct = {}
    }

    save() {
        return new Promise((resolve, reject) => {
            if (this.struct._id === undefined) {
                this.store.insert(this.struct, (err, struct) => {   // Callback is optional
                    // newDoc is the newly inserted document, including its _id
                    // newDoc has no key called notToBeSaved since its value was undefined
                    this.struct = struct
                    resolve(struct)
                })
            }

            this.store.update({_id: this.struct._id}, this.struct, (err, numReplaced) => {
                resolve(this.struct)
            })
        })
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            this.store.findOne({_id: id},(err, doc) => {
                resolve(doc)
            })
        })
    }
}