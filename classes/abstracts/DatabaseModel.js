export default class DatabaseModel {
    constructor() {
        if (this.db === undefined) {
            let Datastore = require('nedb')

            this.db =  new Datastore({ filename: './database/data', autoload: true })
        }

        this.struct = {}
    }

    save() {
        return new Promise((resolve, reject) => {
            if (this.struct._id === undefined) {
                this.db.insert(this.struct, (err, struct) => {   // Callback is optional
                    // newDoc is the newly inserted document, including its _id
                    // newDoc has no key called notToBeSaved since its value was undefined
                    this.struct = struct
                    resolve(struct)
                })
            }

            this.db.update({_id: this.struct._id}, this.struct, (err, numReplaced) => {
                resolve(this.struct)
            })
        })
    }
}