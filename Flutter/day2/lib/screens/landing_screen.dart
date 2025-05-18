import 'package:day2/icons/icons.dart';
import 'package:day2/screens/login_screen.dart';
import 'package:flutter/material.dart';

class Landingscreen extends StatelessWidget {
  const Landingscreen({super.key});

  @override
  Widget build(BuildContext context) {
    return (Scaffold(
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
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            const SizedBox(height: 80),
            Image.asset(logoImage, width: 200, height: 200, fit: BoxFit.cover),
            const SizedBox(height: 40),
            const Text(
              'Welcome To Quiz App',
              style: TextStyle(
                fontSize: 50,
                color: Colors.white,
                fontWeight: FontWeight.bold,
                shadows: [
                  Shadow(
                    color: Colors.black,
                    offset: Offset(6, 6),
                    blurRadius: 10,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 40),
            ElevatedButton(
              onPressed: () {
                // Navigate to the next screen
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => LoginScreen()),
                );
              },
              style: ButtonStyle(
                fixedSize: WidgetStateProperty.all(const Size(200, 50)),
              ),
              child: const Text('Login'),
            ),
          ],
        ),
      ),
    ));
  }
}
