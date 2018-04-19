---
to: "src/apps/<%= h.inflection.dasherize(appname).toLowerCase() %>/components/<%= h.inflection.dasherize(name).toLowerCase() %>.unit.js"
---
<%
  const fileName =
    (h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '') +
    h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'))
%>import <%= importName %> from './<%= fileName %>'

describe('@/apps/components/<%= fileName %>', () => {
  it('exports a valid component', () => {
    expect(<%= importName %>).toBeAComponent()
  })
})