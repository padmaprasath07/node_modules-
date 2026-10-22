
const http = require("http");
const soap = require("soap");
const fs = require("fs");

const service = {
  BookService: {
    BookPort: {
      getBook() {
        console.log("getBook called!");
        return { result: "Python Basics" };
      }
    }
  }
};

const server = http.createServer();

server.listen(8000, () => {
  soap.listen(
    server,
    "/book",
    service,
    fs.readFileSync("./books.wsdl", "utf8")
  );

  console.log("SOAP server running at http://localhost:8000/book");
});
