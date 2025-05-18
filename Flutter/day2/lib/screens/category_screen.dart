import 'package:day2/widgets/category_card.dart';
import 'package:flutter/material.dart';

class CategoryScreen extends StatelessWidget {
  CategoryScreen({super.key});
  List<Map> data = [
    {"title": "Math", "color": const Color.fromARGB(255, 229, 217, 147)},
    {"title": "IQ", "color": const Color.fromARGB(255, 117, 216, 146)},
    {"title": "Art", "color": const Color.fromARGB(255, 214, 107, 116)},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        width: double.infinity,
        child: Column(
          // mainAxisAlignment: MainAxisAlignment.stretch,
          crossAxisAlignment: CrossAxisAlignment.stretch,

          children: [
            for (int i = 0; i < data.length; i++)
              CategoryCard(color: data[i]["color"], title: data[i]["title"]),
          ],
        ),
      ),
    );
  }
}
