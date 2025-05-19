import 'package:day2/data/globals.dart';
import 'package:day2/data/score.dart';
import 'package:day2/icons/icons.dart';
import 'package:day2/screens/category_screen.dart';
import 'package:day2/screens/login_screen.dart';
import 'package:flutter/material.dart';

class ScoreScreen extends StatelessWidget {
  const ScoreScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text("Results", style: TextStyle(fontSize: 30)),
        backgroundColor: Color.fromARGB(255, 229, 217, 147),
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.share)),
          SizedBox(width: 20),
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
        child: Padding(
          padding: const EdgeInsets.all(12),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              RichText(
                text: TextSpan(
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color:
                        Colors
                            .white, // Important for non-default TextSpan color
                  ),
                  children: [
                    TextSpan(text: "Congratulation "),
                    TextSpan(
                      text: loginController.text,
                      style: TextStyle(
                        color: Colors.white, // Different style for Mohamed
                        fontWeight: FontWeight.w900,
                      ),
                    ),
                    TextSpan(text: " your score is "),
                    TextSpan(
                      text: "$score/15",
                      style: TextStyle(
                        color: Colors.green, // Different style for score
                        fontSize: 28,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 35),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      score = 0;
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => LoginScreen()),
                      );
                    },
                    child: Text("Logout"),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      score = 0;
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => CategoryScreen(),
                        ),
                      );
                    },
                    child: Text("Play again"),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
