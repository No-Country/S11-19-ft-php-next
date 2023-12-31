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
        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type');
            $table->morphs('notifiable');
            $table->text('data');
            $table->timestamp('read_at')->nullable();
/*          
            intente modificar el modelo pero por lo que lei laravel notification
            usan un campo especifico para guardar como json la "data" de la notificacion

            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('reminder_id')->nullable();
            $table->enum("reminder_type",['Irrigation', 'change', 'fertilizer', 'Pruning']);
            $table->index(['user_id', 'reminder_id']);

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('reminder_id')->references('id')->on('reminders')->onDelete('cascade'); */
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
