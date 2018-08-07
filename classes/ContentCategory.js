import DatabaseModel from "./abstracts/DatabaseModel";

export default class ContentCategory extends DatabaseModel{
    constructor() {
        super()

        this.struct = {
            businessUnitId: '',
            apiId: '',
            parentId: '',
            name: '',
            categoryType: '',
            sharingProperties: [],
            description: ''
        }
    }

    setBusinesSUnitId(value) {
        this.struct.businessUnitId = value

        return this
    }

    getBusinessUnitId() {
        return this.struct.businessUnitId
    }

    setName(value) {
        this.struct.name = value

        return this
    }

    getName() {
        return this.struct.name
    }
}