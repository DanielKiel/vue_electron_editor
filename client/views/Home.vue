<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <h3>MC edit</h3>
            </div>
            <div class="col-8">
                <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu" class="float-right">
                    <b-button-group class="mx-1" size="sm">
                        <b-btn>Editor</b-btn>
                        <b-btn>Data</b-btn>
                        <b-btn>Export</b-btn>
                    </b-button-group>
                    <b-dropdown class="mx-1" size="sm" right text="BusinessUnit">
                        <b-dropdown-item>Publicare Main</b-dropdown-item>
                        <b-dropdown-item>Developer</b-dropdown-item>
                        <b-dropdown-item>Labor</b-dropdown-item>
                    </b-dropdown>
                    <b-button-group class="mx-1" size="sm">
                        <b-btn><icon name="cog"></icon></b-btn>
                    </b-button-group>
                </b-button-toolbar>
            </div>
        </div>
        <div class="row mt-3">
            <div class="w-25">
                <div class="row">
                    <!--<content-builder-categories-->
                            <!--:content_route="'https://visual_editor.dev/content/list'"-->
                            <!--:tree_route="'https://visual_editor.dev/categories/tree'"-->
                    <!--&gt;</content-builder-categories>-->
                </div>
            </div>

            <!--<b-nav vertical class="w-25">-->
                <!--<b-nav-item active>Content Builder</b-nav-item>-->
                <!--<b-nav-item>Link</b-nav-item>-->
                <!--<b-nav-item>Another Link</b-nav-item>-->
                <!--<b-nav-item disabled>Disabled</b-nav-item>-->
            <!--</b-nav>-->
            <div class="w-75">
                <div class="row mb-3">
                    <div class="col-9"><h6>Filename is here</h6></div>
                    <div class="col-3"><b-button size="sm" variant="danger" class="float-right"><icon name="times-circle"></icon></b-button></div>
                </div>
                <editor v-model="content" @init="editorInit" lang="html" theme="eclipse" width="100%" :height="height"></editor>
            </div>
        </div>
        <div class="row">

        </div>

    </div>
</template>

<script>
import BU from './../../classes/BusinessUnit'

export default {
    data: function() {
        return {
            content: '<html><head></head><body></body></html>',
            height: '100%'
        }
    },
    created() {
        let bu = new BU()

        let res = bu.setName('myBU').setClientId('clientId').setClientSecret('cescret').save().then( res => {
            console.log(res)
            bu.setName('updated').save().then(res => {
                console.log(res)
            })
        } )
        //bu.setName('updated').update()
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





