abstract class Book {
  void borrow() {
    print('borrow');
  }

  void returnBook() {
    print('book returned');
  }
}

class EBook extends Book {
  double? fileSize;
  void downloadBook() {
    print('book downloaded');
  }

  @override
  void borrow() {
    print('borrow ebook');
  }
}

class PrintedBook extends Book {
  void checkAvailability() {
    print('Availability Checked');
  }

  @override
  void borrow() {
    print('borrow printed book');
  }
}

class Library {
  int? _books;
  void checkBook() {
    print("check book");
  }

  void returnBook() {
    print("return book");
  }

  int? getBooks() {
    return _books;
  }

  void setBooks(int bookValue) {
    _books = bookValue;
  }
}
