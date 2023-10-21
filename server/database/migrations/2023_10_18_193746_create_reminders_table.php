<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reminders', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("frequency");
            $table->date("date");
            $table->time("time");
            $table->enum("type",['Irrigation', 'change', 'fertilizer', 'Pruning']);
            $table->boolean("repeat");
            $table->unsignedBigInteger("Plant_id");
            $table->foreign('Plant_id')
            ->references('id')
            ->on('plants')
            ->onDelete('cascade');            
            $table->unsignedBigInteger("user_id");
            $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reminders');
    }
};
