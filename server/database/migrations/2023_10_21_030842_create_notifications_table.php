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
            $table->id();
            $table->enum('type', ['Riego', 'Cambio de maceta', 'Abono', 'Cambio de lugar', 'Poda']);
            $table->text('description');
            $table->boolean('is_viewed')->default(false);
            $table->unsignedBigInteger('user_id');
            //$table->unsignedBigInteger('event_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            //$table->foreign('event_id')->references('id')->on('events');
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
