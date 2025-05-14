import 'package:day3/ecommerce.dart';
import 'package:day3/school.dart';

void main() {
  Student kareem = Student();
  Teacher mohsen = Teacher();
  Staff ahmed = Staff();

  kareem.displayDetails();
  mohsen.displayDetails();
  ahmed.displayDetails();

  PhyscialProduct prod1 = PhyscialProduct();
  DigitalProduct prod2 = DigitalProduct();

  prod1.getDescription();
  prod1.getPrice();
  prod2.getDescription();
  prod2.getPrice();
}
