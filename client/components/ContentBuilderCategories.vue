<template>
    <div>
        <b-tree-view  :data="tree_data" @nodeSelect="onSelected" ></b-tree-view>
    </div>
</template>

<script>
    export default {
        name: "ContentBuilderCategories",
        props: [
            'tree_route',
            'content_route'
        ],
        data: function() {
            return {
                content: [],
                tree_data: []
            }
        },
        created() {
            this.fetchTree()
        },
        methods: {
            onSelected(treeNodeObject, isSelected) {

                this.fetchContent(treeNodeObject.data.apiId)
            },

            fetchTree() {
                axios({
                    method: 'GET',
                    url: this.tree_route,
                    data: {

                    }
                }).then(response => {
                    this.tree_data = response.data

                }).catch((error, response) => {

                })
            },

            fetchContent(categoryId) {
                axios({
                    method: 'POST',
                    url: this.content_route,
                    data: {
                        categoryId: categoryId
                    }
                }).then(response => {
                    this.content = response.data

                }).catch((error, response) => {

                })
            },
        },
    }
</script>

<style scoped>

</style>