<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function() use ($router){
    $router->group(['prefix' => 'task'], function() use ($router){
        $router->get('/', 'TaskController@index');
        $router->post('/', 'TaskController@store');
        $router->patch('/{id}', 'TaskController@update');
        $router->delete('/{id}', 'TaskController@delete');
        $router->delete('/', 'TaskController@deleteAll');
    });

    $router->group(['prefix' => 'todo'], function() use ($router){
        $router->post('/{taskId}', 'TodoController@store');
        $router->patch('/{todoId}', 'TodoController@update');
        $router->delete('/{todoId}', 'TodoController@delete');
        
        $router->patch('complete/{id}', 'TodoController@complete');
    });
});