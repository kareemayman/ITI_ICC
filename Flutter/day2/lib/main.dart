import 'package:day2/screens/landing_screen.dart';
import 'package:day2/screens/questions_screen.dart';
import 'package:day2/screens/score_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Task 2',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const Landingscreen(),
      // home: const QuestionScreen(),
      // home: const ScoreScreen(),
    );
  }
}
