import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:todo_app/data/app_data.dart';
import 'package:todo_app/icons/icons.dart';
import 'package:todo_app/widgets/task_container.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;
  // To control the text fields and do valiedation
  final _timeTextController = TextEditingController();
  final _taskTextController = TextEditingController();
  var formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: Visibility(
        visible: true, // Set to true or false based on your condition
        child: FloatingActionButton(
          onPressed: () {
            showTaskDialogue(context);
          },
          backgroundColor: const Color.fromARGB(225, 198, 175, 20),
          child: const Icon(Icons.add),
        ),
      ),

      backgroundColor: const Color.fromARGB(255, 235, 232, 232),
      appBar: AppBar(
        title: const Text('To Do App'),
        centerTitle: true,
        backgroundColor: const Color.fromARGB(225, 198, 175, 20),
      ),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage(landingImage),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
              Colors.white.withOpacity(0.8),
              BlendMode.dstATop,
            ),
          ),
        ),
        child: Padding(
          padding: EdgeInsets.all(12),
          child: SingleChildScrollView(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsetsDirectional.symmetric(
                    vertical: 10.0,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      for (int i = 0; i < datalist.length; i++)
                        GestureDetector(
                          onTap: () {
                            setState(() {
                              _selectedIndex = i;
                            });
                          },
                          child: Container(
                            margin: const EdgeInsetsDirectional.symmetric(
                              horizontal: 8.0,
                            ),
                            height: 40,
                            width: 100,
                            decoration: BoxDecoration(
                              color:
                                  _selectedIndex == i
                                      ? const Color.fromARGB(225, 198, 175, 20)
                                      : Colors.white,
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Center(
                              child: Text("${datalist[i].taskType}"),
                            ),
                          ),
                        ),
                    ],
                  ),
                ),

                Column(
                  children: [
                    for (
                      int i = 0;
                      i < datalist[_selectedIndex].data.length;
                      i++
                    )
                      Slidable(
                        endActionPane: ActionPane(
                          // A motion is a widget used to control how the pane animates.
                          motion: const ScrollMotion(),

                          // A pane can dismiss the Slidable.
                          // dismissible: DismissiblePane(onDismissed: () {}),

                          // All actions are defined in the children parameter.
                          children: [
                            // A SlidableAction can have an icon and/or a label.
                            SizedBox(
                              width: 100,
                              height: 70,
                              child: SlidableAction(
                                onPressed: (context) {
                                  setState(() {
                                    datalist[2].data.add(
                                      TaskModel(
                                        task:
                                            datalist[_selectedIndex]
                                                .data[i]
                                                .task,
                                        time:
                                            datalist[_selectedIndex]
                                                .data[i]
                                                .time,
                                      ),
                                    );
                                    // Perform delete action
                                    datalist[_selectedIndex].data.removeAt(i);
                                  });
                                },
                                backgroundColor: Color(0xFFFE4A49),
                                foregroundColor: Colors.white,
                                icon: Icons.delete,
                                label: 'Delete',
                                borderRadius: BorderRadius.circular(15),
                              ),
                            ),
                            SizedBox(width: 10),
                            SizedBox(
                              // set the width
                              width: 100,
                              height: 70,
                              child: SlidableAction(
                                onPressed: (context) {
                                  // Perform update action
                                  showTaskDialogue(context, index: i);
                                },
                                backgroundColor: Color.fromARGB(
                                  225,
                                  198,
                                  175,
                                  20,
                                ),
                                foregroundColor: Colors.white,
                                icon: Icons.edit,
                                label: 'Update',
                                borderRadius: BorderRadius.circular(
                                  15,
                                ), // Decreased the border radius
                              ),
                            ),
                          ],
                        ),
                        child: TaskContainer(
                          task: datalist[_selectedIndex].data[i].task,
                          time: datalist[_selectedIndex].data[i].time,
                        ),
                      ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Future<dynamic> showTaskDialogue(BuildContext context, {int? index}) {
    if (index != null) {
      _taskTextController.text = datalist[0].data[index].task;
      _timeTextController.text = datalist[0].data[index].time;
    }
    return showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text("${index == null ? "Add" : "Update"} Task"),
          content: Form(
            key: formKey,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextFormField(
                  controller: _taskTextController,
                  decoration: const InputDecoration(hintText: "Task Name"),
                ),
                InkWell(
                  onTap: () async {
                    var selectedTime = await showTimePicker(
                      context: context,
                      initialTime: TimeOfDay.now(),
                    );
                    if (selectedTime == null) return;
                    _timeTextController.text =
                        "${selectedTime.hour}:${selectedTime.minute}";
                  },
                  child: TextFormField(
                    controller: _timeTextController,
                    enabled: false,
                    validator:
                        (value) =>
                            value!.isEmpty ? "Please enter a time" : null,
                    decoration: const InputDecoration(hintText: "Task Time"),
                  ),
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () {
                if (formKey.currentState!.validate()) {
                  if (index == null) {
                    setState(() {
                      datalist[0].data.add(
                        TaskModel(
                          task: _taskTextController.text,
                          time: _timeTextController.text,
                        ),
                      );
                    });
                  } else {
                    setState(() {
                      datalist[0].data[index].task = _taskTextController.text;
                      datalist[0].data[index].time = _timeTextController.text;
                    });
                  }
                }
                Navigator.pop(context);
              },
              style: TextButton.styleFrom(
                backgroundColor: const Color.fromARGB(225, 198, 175, 20),
                foregroundColor: Colors.white,
              ),
              child: Text("${index == null ? "Add" : "Update"} Task"),
            ),
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              style: TextButton.styleFrom(
                backgroundColor: Colors.red,
                foregroundColor: Colors.white,
              ),
              child: const Text("Cancel"),
            ),
          ],
        );
      },
    );
  }
}
