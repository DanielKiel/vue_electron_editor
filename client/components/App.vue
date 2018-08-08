<template>
  <div id="app">
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
            <select-business-unit></select-business-unit>
            <b-button-group class="mx-1" size="sm">
              <b-btn><router-link to="/settings"><icon name="cog"></icon></router-link></b-btn>
            </b-button-group>
          </b-button-toolbar>
        </div>
      </div>
      <div class="row mt-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
  /* nesting for the need to test postcss */
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}
</style>
