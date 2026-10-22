<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
   <html>
   
   <head>
   <link rel="stylesheet" href="course.css"/>
   </head>
   <body>
     <table border="1"> 
     <thead> 
     <tr> 
      <th>id</th>
      <th>name</th>
      <th>reg</th>
     </tr>
     </thead>
     <tbody> 
       <xsl:for-each select="/courses/course"> 
          <tr> 
            <td><xsl:value-of select="@id"/></td>
            <td><xsl:value-of select="name"/></td>
            <td><xsl:value-of select="reg"/></td>
          </tr>
       </xsl:for-each>
     </tbody>
     </table>
   </body>
   </html>
</xsl:template>
</xsl:stylesheet>
