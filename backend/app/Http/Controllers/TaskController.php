<?php

namespace App\Http\Controllers;
use App\Models\Task;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class TaskController extends Controller
{
    public function index(){
        $tasks = Task::with('todo')->get();

        return response()->json($tasks, 200);
    }

    public function store(Request $request){
        $req = $this->validate($request, ['title' => 'required|string']);
        $task = Task::create(['title' => $req['title']]);
        $task->todo = $task->todo;

        return response()->json($task,200);
    }

    public function update(Request $request, $id){
        if(!$task = Task::find($id)){
            return response()->json([
                'message' => 'Id not found'
            ], 404);
        }

        $req = $this->validate($request, ['title' => 'required|string']);

        $task->update(['title' => $req['title']]);

        return response()->json([
            'message' => 'Success update data'
        ]);
    }

    public function delete($id){
        if(!$task = Task::find($id)){
            return response()->json([
                'status' => 404,
                'message' => 'Id not found'
            ], 404);
        }

        $task->delete();

        return response()->json([
            'message' => 'Success delete data'
        ], 200);
    }

    public function deleteAll(){
        Schema::disableForeignKeyConstraints();
        Todo::truncate();
        Task::truncate();
        Schema::enableForeignKeyConstraints();

        return response()->json([
            'message' => 'Delete all data successful'
        ], 200);
    }
}
