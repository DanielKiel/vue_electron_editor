<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-group label="Name"
                          label-for="exampleInput1"
                          description="We'll never share your email with anyone else.">
                <b-form-input id="businessUnit-name"
                              type="text"
                              v-model="businessUnit.name"
                              required
                              placeholder="Enter name">
                </b-form-input>
            </b-form-group>
            <b-form-group label="ClientId:"
                          label-for="businessUnit-clientId">
                <b-form-input id="businessUnit-clientId"
                              type="text"
                              v-model="businessUnit.clientId"
                              required
                              placeholder="Enter clientId">
                </b-form-input>
            </b-form-group>
            <b-form-group label="ClientSecret:"
                          label-for="businessUnit-clientSecret">
                <b-form-input id="businessUnit-clientSecret"
                              type="text"
                              v-model="businessUnit.clientSecret"
                              required
                              placeholder="Enter clientSecret">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
import BusinessUnit from './../../../classes/BusinessUnit'

    export default {
        name: "BusinessUnitForm",
        props: [
            'business_init_id'
        ],
        created() {
            Bus.$on('settings-bu-change', (businessUnitId) => {
                this.loadBusinessUnit(businessUnitId)
            })
        },
        data: function() {
            return {
                businessUnit: {
                    name: '',
                    clientId: '',
                    clientSecret: '',
                    _id: this.business_unit_id
                },
                businessUnitId: this.business_unit_id
            }
        },
        methods: {
            loadBusinessUnit(id) {
                let result = this.$store.state.businessUnits.filter(businessUnit => businessUnit._id == id )

                if (result.length === 1 ) {
                    this.businessUnit = result[0]
                }

                else {
                    this.businessUnit = {
                        name: '',
                        clientId: '',
                        clientSecret: '',
                        _id: undefined
                    }
                }
            },

            onSubmit() {
                this.$store.commit('saveBusinessUnit', this.businessUnit)
            }
        }
    }
</script>

<style scoped>

</style>