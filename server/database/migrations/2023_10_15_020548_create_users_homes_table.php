<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up():void
    {
        Schema::create('users_homes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('home_id');
            $table->boolean('owner');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('home_id')->references('id')->on('homes');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users_homes');
    }
};
