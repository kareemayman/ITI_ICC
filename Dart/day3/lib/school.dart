class Person {
  String? name;
  int? id;

  void displayDetails() {
    print('details displayed');
  }

  void getRole() {
    print('role printed');
  }
}

class Student implements Person {
  @override
  String? name;

  @override
  int? id;

  double? grade;

  @override
  void displayDetails() {
    print('student details');
  }

  @override
  void getRole() {
    print('student role');
  }
}

class Teacher implements Person {
  @override
  String? name;

  @override
  int? id;

  String? subject;

  @override
  void displayDetails() {
    print('teacher details');
  }

  @override
  void getRole() {
    print('teacher role');
  }
}

class Staff implements Person {
  @override
  String? name;

  @override
  int? id;

  String? department;

  @override
  void displayDetails() {
    print('staff details');
  }

  @override
  void getRole() {
    print('staff role');
  }
}
