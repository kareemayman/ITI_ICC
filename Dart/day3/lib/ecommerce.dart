class Product {
  void getPrice() {
    print('price');
  }

  void getDescription() {
    print('description');
  }
}

class PhyscialProduct implements Product {
  double? weight;
  double? shippingCost;

  @override
  void getPrice() {
    print('physical product price');
  }

  @override
  void getDescription() {
    print('physical product description');
  }
}

class DigitalProduct implements Product {
  double? fileSize;
  String? downloadLink;

  @override
  void getPrice() {
    print('digital product price');
  }

  @override
  void getDescription() {
    print('digital product description');
  }
}

class ShoppingCart {
  Product? prods;
  double? totalPrice;
}

class Customer {
  void placeOrder() {
    print('order placed');
  }
}


