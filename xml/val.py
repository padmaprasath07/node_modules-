from lxml import etree
xml=etree.parse("course.xml")
xsd_doc=etree.parse("course.xsd")
xsd=etree.XMLSchema(xsd_doc)
if xsd.validate(xml): 
    print("xsd valid")
else:
    print("xsd not valid")
dtd=etree.DTD("course.dtd")
if dtd.validate(xml):
    print("xml valid")
else:
    print("xml not valid")