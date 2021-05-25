<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model{

    use \App\Http\Traits\UsesUuid;

    protected $fillable = [
        'task_id','name','due_date','is_completed'
    ];

    public function task(){
        return $this->belongsTo(Task::class);
    }

}