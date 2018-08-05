<template>
    <div class="container">
        <div class="row">
            <div class="col-9">

            </div>
            <div class="col-3">
                <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Something else here...</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
        <div class="row">
            <b-nav vertical class="w-25">
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
            <div class="w-75">
                <editor v-model="content" @init="editorInit" lang="html" theme="eclipse" width="100%" :height="height"></editor>
            </div>
        </div>
        <div class="row">

        </div>

    </div>
</template>

<script>

export default {
    data: function() {
        return {
            content: '<html></html>',
            height: '100%'
        }
    },
    methods: {
        editorInit:function (el) {
            require('brace/ext/language_tools') //language extension prerequsite...
            require('brace/mode/html')
            require('brace/mode/javascript')    //language
            require('brace/mode/less')
            require('brace/theme/eclipse')
            require('brace/snippets/javascript') //snippet
        }
    },
    watch: {
        content: function (val) {
          this.height = '100%'
        }
    }
}
</script>





