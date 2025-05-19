import 'package:day2/screens/questions_screen.dart';
import 'package:flutter/material.dart';

class CategoryCard extends StatelessWidget {
  const CategoryCard({super.key, this.color, this.title});
  final Color? color;
  final String? title;
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: InkWell(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => QuestionScreen(title: title),
            ),
          );
        },
        child: Container(
          color: color,
          child: Center(
            child: Text(
              title!,
              style: TextStyle(color: Colors.black, fontSize: 30),
            ),
          ),
        ),
      ),
    );
  }
}
