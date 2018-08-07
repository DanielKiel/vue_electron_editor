import DatabaseModel from "./abstracts/DatabaseModel";

export default class BusinessUnit extends DatabaseModel {
    constructor() {
        super()

        this.struct = {
            name: '',
            clientId: '',
            clientSecret: ''
        }
    }

    setName(value) {
        this.struct.name = value

        return this
    }

    getName() {
        return this.struct.name
    }

    setClientId(value) {
        this.struct.clientId = value

        return this
    }

    getClientId() {
        return this.struct.clientId
    }

    setClientSecret(value) {
        this.struct.clientSecret = value

        return this
    }

    getClientSecret() {
        return this.struct.clientSecret
    }
}