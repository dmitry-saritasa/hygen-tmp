---
to: "src/apps/<%= h.inflection.dasherize(appname).toLowerCase() %>/api/index.js"
---
<%
const appName = h.inflection.dasherize(appname).toLowerCase();
const apiName = h.inflection.dasherize(name).toLowerCase();
%>

/**
 * Documentation
 * @param {String} code - Explanation
 * @returns {Promise}
 */
function <%= apiName %>({ <%= params%>, headers = {}, }) {
  return axios.<%= method%>(`<%= apiURL%>`, { headers, });
}