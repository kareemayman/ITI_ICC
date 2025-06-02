import 'package:flutter/material.dart';
import 'package:todo_app/data/app_data.dart';

class TaskContainer extends StatefulWidget {
  String task;
  String time;
  final int taskTypeId;
  final int currentIndex;
  Function upperWidgetState;
  TaskContainer({
    super.key,
    required this.task,
    required this.time,
    required this.taskTypeId,
    required this.currentIndex,
    required this.upperWidgetState,
  });

  @override
  State<TaskContainer> createState() => _TaskContainerState();
}

class _TaskContainerState extends State<TaskContainer> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 12),
      decoration: BoxDecoration(
        color: Colors.white,

        borderRadius: BorderRadius.circular(8),
      ),
      padding: EdgeInsets.all(22),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            child: Row(
              children: [
                if (widget.taskTypeId == 0 || widget.taskTypeId == 1)
                  Checkbox(
                    value: widget.taskTypeId == 0 ? false : true,
                    onChanged: (value) {
                      if (widget.taskTypeId == 0) {
                        var task = datalist[0].data[widget.currentIndex];
                        datalist[1].data.add(task);
                        datalist[0].data.removeAt(widget.currentIndex);
                        widget.upperWidgetState();
                      }
                    },
                  ),
                SizedBox(width: 10),
                Text(
                  widget.task,
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    decoration:
                        widget.taskTypeId == 1
                            ? TextDecoration.lineThrough
                            : null,
                  ),
                ),
              ],
            ),
          ),
          Text(
            widget.time,
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              decoration:
                  widget.taskTypeId == 1 ? TextDecoration.lineThrough : null,
            ),
          ),
        ],
      ),
    );
  }
}
