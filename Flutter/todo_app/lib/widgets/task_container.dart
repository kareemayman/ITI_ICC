import 'package:flutter/material.dart';

class TaskContainer extends StatelessWidget {
 String task;
 String time;
   TaskContainer({
    super.key,
    required this.task,
    required this.time,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
     margin: EdgeInsets.only(top: 12),
     decoration: BoxDecoration(
       color: Colors.white,
    
       borderRadius: BorderRadius.circular(8),
     
      
     ),
     padding: EdgeInsets.all(22),child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
        Text(task,style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),),
       Text(time ,style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),),
         ],),);
  }
}