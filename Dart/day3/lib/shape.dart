abstract class Shape {
  void calculateArea() {
    print('area calculated');
  }
}

mixin PerimeterMixin {
  void calculatePerimeter() {
    print("Perimeter Calculated");
  }
}

mixin VolumeMixin {
  void calculateVolume() {
    print("Volume Calculated");
  }
}

class Rectangle extends Shape with PerimeterMixin, VolumeMixin {
  double? length;
  double? width;
}

class Circle extends Shape {
  double? radius;
}

class Triangle extends Shape with PerimeterMixin {
  double? base;
  double? height;
}
