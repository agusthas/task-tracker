<?php

namespace App\Http\Controllers;
use App\Models\Todo;
use App\Models\Task;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function store(Request $request, $taskId){
        if(!Task::find($taskId)){
            return response()->json([
                'status' => 404,
                'message' => 'Id not found'
            ], 404);
        }

        $req = $this->validate($request, [
            'name' => 'required|string',
            'due_date' => 'required|string',
        ]);

        $todo = Todo::create([
            'task_id' => $taskId,
            'name' => $req['name'],
            'due_date' => $req['due_date'],
            'is_completed' => 0
        ]);

        return response()->json($todo,200);
    }

    public function update(Request $request, $todoId){
        if(!$todo = Todo::find($todoId)){
            return response()->json([
                'status' => 404,
                'message' => 'Id not found'
            ], 404);
        }

        $req = $this->validate($request, [
            'name' => 'required|string',
            'due_date' => 'required|string',
        ]);

        $todo->update([
            'name' => $req['name'],
            'due_date' => $req['due_date'],
        ]);

        return response()->json([
            'message' => 'Success update todo detail'
        ]);
    }

    public function delete($todoId){
        if(!$todo = Todo::find($todoId)){
            return response()->json([
                'status' => 404,
                'message' => 'Id not found'
            ], 404);
        }

        $todo->delete();

        return response()->json([
            'message' => 'Success delete data'
        ]);
    }

    public function complete($id){
        if(!$todo = Todo::find($id)){
            return response()->json([
                'status' => 404,
                'message' => 'Id not found'
            ], 404);
        }

        if($todo->is_completed == 0) $todo->update(['is_completed' => 1]);
        else $todo->update(['is_completed' => 0]);

        return response()->json([
            'message' => 'Changed complete status'
        ]);
    }
}
