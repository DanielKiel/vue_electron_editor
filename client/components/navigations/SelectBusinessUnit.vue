<template>
    <b-dropdown class="mx-1" size="sm" right :text="activeBusinessUnit.name !== undefined ? activeBusinessUnit.name : 'Select a BusinessUnit'">
        <b-dropdown-item v-for="(businessUnit, index) in businessUnits"
                         :value="businessUnit._id"
                         :key="index"
                         @click="changeBusinessUnit(businessUnit._id)"
        >
            {{businessUnit.name}}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
    export default {
        name: "SelectBusinessUnit",
        computed: {
            businessUnits () {
                return this.$store.state.businessUnits
            },
            activeBusinessUnit () {
                return this.$store.state.activeBusinessUnit
            }
        },
        methods: {
            changeBusinessUnit(id) {console.log('changing')
                this.$store.commit('changeActiveBusinessUnit', id)
            }
        }
    }
</script>

<style scoped>

</style>