import 'package:day2/icons/icons.dart';
import 'package:flutter/material.dart';

class QuestionScreen extends StatefulWidget {
  const QuestionScreen({super.key});

  @override
  State<QuestionScreen> createState() => _QuestionScreenState();
}

class _QuestionScreenState extends State<QuestionScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text("Math Quiz", style: TextStyle(fontSize: 30)),
        backgroundColor: Color.fromARGB(255, 229, 217, 147),
        actions: [
          Text("1/15", style: TextStyle(fontSize: 28)),
          SizedBox(width: 12),
        ],
      ),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage(landingImage),
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Column(
              children: [
                Center(
                  child: Text(
                    "What is 4*4?",
                    style: TextStyle(
                      fontSize: 50,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                      shadows: [
                        Shadow(
                          color: Colors.black,
                          offset: Offset(2, 2),
                          blurRadius: 10,
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(height: 10),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    // minimumSize: Size(200, 40),
                    // maximumSize: Size(200, 40),
                    backgroundColor: Colors.white,
                  ),
                  child: Text("8"),
                ),
                SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    // minimumSize: Size(200, 40),
                    // maximumSize: Size(200, 40),
                    backgroundColor: Colors.white,
                  ),
                  child: Text("16"),
                ),
                SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    // minimumSize: Size(200, 40),
                    // maximumSize: Size(200, 40),
                    backgroundColor: Colors.white,
                  ),
                  child: Text("4"),
                ),
                SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    // minimumSize: Size(200, 40),
                    // maximumSize: Size(200, 40),
                    backgroundColor: Colors.white,
                  ),
                  child: Text("0"),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
