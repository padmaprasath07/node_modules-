
const http = require("http");
const soap = require("soap");
const fs = require("fs");

const service = {
  BookService: {
    BookPort: {
      getBook() {
        return { result: "Python Basics" };
      }
    }
  }
};

const server = http.createServer();
server.listen(8000, () => {
  soap.listen(server, "/book", service,
    fs.readFileSync("book.wsdl", "utf8"));
  console.log("Server running on port 8000");
});
