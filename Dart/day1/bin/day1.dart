void main(List<String> arguments) {
  // Task 1
  for (int a = 1; a <= 10; a++) {
    for (int b = 1; b <= 10; b++) {
      String s = 'Odd';
      if ((a * b) % 2 == 0) {
        s = 'Even';
      }
      print('$a x $b = ${a * b} => $s');
    }
  }

  // Task 2
  // double grade = 59;
  // if (grade >= 90) {
  //   print('A');
  // } else if (grade >= 80) {
  //   print('B');
  // } else if (grade >= 70) {
  //   print('C');
  // } else if (grade >= 60) {
  //   print('D');
  // } else {
  //   print('F');
  // }

  // Task 3
  // String s = "Mahmoud";
  // print(s);

  // Task 4
  // String firstName = "Mahmoud";
  // String lastName = "Abdallah";
  // print('$firstName\t$lastName');

  // Task 5
  // String name = "Kareem Ayman";
  // int age = 31;
  // print(
  //   'Name = $name, Age = $age\n${name.runtimeType} and ${age.runtimeType} DataType',
  // );

  // Task 6
  // int age = 24;
  // print(age.toString());

  // // Task 7
  // double first = 10.5;
  // double second = 5.3;
  // int res = (first / second).toInt();
  // print(res);

  // Task 8
  // int num = 2;
  // if (num % 2 == 0) {
  //   print('Even');
  // } else {
  //   print('Odd');
  // }

  // Task 9
  // String haystack = "gadbutsad";
  // String needle = "sad";
  // for (int i = 0; i < haystack.length; i++) {
  //   if (haystack[i] == needle[0]) {
  //     int res = i;
  //     int count = 0;
  //     for (int j = 1; j < needle.length; j++) {
  //       i++;
  //       count++;
  //       if (haystack[i] != needle[j]) {
  //         res = -1;
  //         i -= count;
  //         break;
  //       }
  //     }
  //     if (res != -1) {
  //       print(res);
  //       return;
  //     }
  //   }
  // }
  // print(-1);

  // Task 10
  // String s = 'Kareem';
  // String reversed = "";
  // for (int i = s.length - 1; i >= 0; i--) {
  //   reversed += s[i];
  // }
  // print(reversed);
}
