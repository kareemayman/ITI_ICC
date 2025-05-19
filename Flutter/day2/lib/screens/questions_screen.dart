import 'package:day2/data/quiz_data.dart';
import 'package:day2/data/score.dart';
import 'package:day2/icons/icons.dart';
import 'package:day2/screens/score_screen.dart';
import 'package:flutter/material.dart';

class QuestionScreen extends StatefulWidget {
  const QuestionScreen({super.key, this.title});
  final String? title;

  @override
  State<QuestionScreen> createState() => _QuestionScreenState();
}

class _QuestionScreenState extends State<QuestionScreen> {
  int _currentQuestionIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text("${widget.title} Quiz", style: TextStyle(fontSize: 30)),
        backgroundColor: Color.fromARGB(255, 229, 217, 147),
        actions: [
          Text(
            "${_currentQuestionIndex + 1}/${questions[widget.title]?.length}",
            style: TextStyle(fontSize: 28),
          ),
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
                    questions[widget.title]?[_currentQuestionIndex]["question"],
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
                Container(
                  width: MediaQuery.of(context).size.width * 0.4,
                  child: ListView.builder(
                    shrinkWrap: true,
                    itemCount:
                        questions[widget
                                .title]?[_currentQuestionIndex]["options"]
                            .length,
                    itemBuilder: (BuildContext context, int index) {
                      return Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: ElevatedButton(
                          onPressed: () {
                            if (questions[widget
                                    .title]?[_currentQuestionIndex]["options"][index] ==
                                questions[widget
                                    .title]?[_currentQuestionIndex]["answer"]) {
                              score++;
                            }
                            if (_currentQuestionIndex ==
                                questions[widget.title]!.length - 1) {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => ScoreScreen(),
                                ),
                              );
                            } else {
                              setState(() {
                                _currentQuestionIndex++;
                              });
                            }
                          },
                          style: ElevatedButton.styleFrom(
                            // minimumSize: Size(200, 40),
                            // maximumSize: Size(200, 40),
                            backgroundColor: Colors.white,
                          ),
                          child: Text(
                            questions[widget
                                .title]?[_currentQuestionIndex]["options"][index],
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
