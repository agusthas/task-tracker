<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model{

    use \App\Http\Traits\UsesUuid;

    protected $fillable = ['title'];

    public function todo(){
        return $this->hasMany(Todo::class);
    }

}