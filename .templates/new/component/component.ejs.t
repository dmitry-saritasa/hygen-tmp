---
to: "src/apps/<%= h.inflection.dasherize(appname).toLowerCase() %>/components/<%= h.inflection.dasherize(name).toLowerCase() %>.vue"
unless_exists: true
---
<%
const appName =  h.inflection.dasherize(appname).toLowerCase();
const componentName = h.inflection.dasherize(name).toLowerCase();
const location = `src/apps/${appName}/components/${componentName}`;

if (blocks.indexOf('template') !== -1) {
%>
<template>
  <div>
    
  </div>
</template>
<%
}

if (blocks.indexOf('script') !== -1) {
%><script>
import { mapGetters, mapActions, } from 'vuex';

/**
 * <%= h.inflection.camelize(componentName.replace('-', '_')) %>
 * Explanation of the Component
 *
 * PROPS
 * =============================================================================
 * @prop {type} id - Id of the component
 *
 * DATA
 * =============================================================================
 * @prop {type} id - Data of the component
 *
 * EVENTS
 * =============================================================================
 * @emits {event} - Explanation of the event
 *
 */

export default {

  name: '<%= componentName %>',
  directives: {},
  components: {},
  props: {
    id: { default: null, type: String, },
  },
  
  /**
   * Data model for the component
   */
  data() {
    return {};
  },
  computed: {},
  watch: {},
  /**
   * Created hook
   */
  created() {},
  /**
   * Mounted hook
   */
  mounted() {},
  methods: {},

  <% if (blocks.indexOf('template') === -1) {
  %>render(h) {
    return <div/>
  }<% } %>
}
</script>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss" module>
@import '~@design';
</style><%
}
%>