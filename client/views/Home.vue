<template>
    <div class="row mb-3">
        <div class="col-9"><h6>Filename is here</h6></div>
        <div class="col-3">
            <b-button size="sm" variant="danger" class="float-right"><icon name="times-circle"></icon></b-button>
        </div>
        <editor v-model="content" @init="editorInit" lang="html" theme="eclipse" width="100%" :height="height"></editor>

    </div>
</template>

<script>

export default {
    data: function() {
        return {
            content: '<html><head></head><body></body></html>',
            height: '100%'
        }
    },
    created() {

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





