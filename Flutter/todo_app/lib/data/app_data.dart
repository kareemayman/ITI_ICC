// List<Map> datalist = [
// {
//   "taskType": "To Do",
//   "data":[
//     {"task": "Buy groceries", "time": "5 PM"},
//     {"task": "Buy fruits", "time": "7 PM"},
//     {"task": "Buy vegetables", "time": "8 PM"},
//     {"task": "Buy milk", "time": "9 PM"},
//     {"task": "Buy eggs", "time": "10 PM"},

//   ]
// },
// {
//   "taskType": "Done",
//   "data":[
//     {"task": "Finsih course", "time": "5 PM"},

//   ]
// }

// ];

// List<Map> datalist = [
// {
//   "taskType": "To Do",
//   "data":[
//     {"task": "Buy groceries", "time": "5 PM"},
//     {"task": "Buy fruits", "time": "7 PM"},
//     {"task": "Buy vegetables", "time": "8 PM"},
//     {"task": "Buy milk", "time": "9 PM"},
//     {"task": "Buy eggs", "time": "10 PM"},

//   ]
// },
// {
//   "taskType": "Done",
//   "data":[
//     {"task": "Finsih course", "time": "5 PM"},

//   ]
// }
// ];

class TaskCategoryModel {
  final String taskType;
  final List<TaskModel> data;

  TaskCategoryModel({required this.taskType, required this.data});

  factory TaskCategoryModel.fromJson(Map<String, dynamic> json) {
    return TaskCategoryModel(
      taskType: json['taskType'],
      data:
          (json['data'] as List)
              .map((taskJson) => TaskModel.fromJson(taskJson))
              .toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'taskType': taskType,
      'data': data.map((task) => task.toJson()).toList(),
    };
  }
}

class TaskModel {
  String task;
  String time;

  TaskModel({required this.task, required this.time});

  factory TaskModel.fromJson(Map<String, dynamic> json) {
    return TaskModel(task: json['task'], time: json['time']);
  }

  Map<String, dynamic> toJson() {
    return {'task': task, 'time': time};
  }
}

List<TaskCategoryModel> datalist = [
  TaskCategoryModel(
    taskType: "To Do",
    data: [
      TaskModel(task: "Buy Groceries", time: "5 PM"),
      TaskModel(task: "Call Ahmed", time: "7 PM"),
      TaskModel(task: "Check Emails", time: "8 PM"),
      TaskModel(task: "Workout", time: "9 PM"),
      TaskModel(task: "Order Food", time: "10 PM"),
    ],
  ),
  TaskCategoryModel(
    taskType: "Done",
    data: [
      TaskModel(task: "Finish Course", time: "5 PM"),
      TaskModel(task: "Clean Room", time: "4 PM"),
    ],
  ),
  TaskCategoryModel(taskType: "Deleted", data: []),
];
