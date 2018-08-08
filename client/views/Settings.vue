<template>
    <div class="row">
        <div class="col-5">
            <a href="#" @click="emitBusinessUnitSetting(null)">New one</a>
            <ul v-for="(businessUnit, index) in businessUnits" :key="index">
                <li>
                    <a href="#" @click="emitBusinessUnitSetting(businessUnit._id)">
                        {{businessUnit.name}}
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-7">
            <business-unit-form :business_unit_id="businessUnitId"></business-unit-form>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Settings",
        computed: {
            businessUnits () {
                return this.$store.state.businessUnits
            }
        },
        data: function() {
            return {
                //businessUnits: [],
                businessUnitId: null
            }
        },
        methods: {
            emitBusinessUnitSetting(businessUnitId) {
                Bus.$emit('settings-bu-change', businessUnitId)
            }
        }
    }
</script>

<style scoped>

</style>