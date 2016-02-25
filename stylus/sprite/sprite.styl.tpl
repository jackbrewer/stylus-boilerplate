{{!Switch delimiter to `<%` not `{{` to allow Stylus' built in {$foo} to work}}
{{=<% %>=}}
//
// THIS IS A GENERATED FILE
// Any changes made to this file will be automatically overridden.
//

<%#shapes%>
<%#selector.shape%>$<%expression%><%/selector.shape%> =
<%#sprite%>
  background-position (<%position.absolute.x%> - <%padding.left%>)px (<%position.absolute.y%> - <%padding.top%>)px
  width <%width.inner%>px
  height <%height.inner%>px
<%/sprite%>

<%/shapes%>

<%#shapes%>
<%#selector.shape%>.<%expression%><%/selector.shape%>
<%#sprite%>
  {<%#selector.shape%>$<%expression%><%/selector.shape%>}
<%/sprite%>

<%/shapes%>
