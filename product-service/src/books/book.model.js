const uuid = require('uuid');
class Book {
  constructor({
    id = uuid(),
    title = 'TITLE',
    year='year',
    author='author',
    description = 'description',
    price=1,
    picture = 'picture',
    count=2,
        
  } = {}) {
    this.id = id;
    this.count = count;
    this.description = description;
    this.price = price;
    this.title = title;
    this.picture = picture;
    this.year = year;
    this.author = author;
  }

  static toResponse(book) {
    const { id, title, picture,description,price,year,author } = book;
    return {id, title, picture,description,price,year,author };
  }
}

module.exports = Book;
