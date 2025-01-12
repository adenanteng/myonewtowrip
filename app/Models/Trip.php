<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Trip extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'slug',
        'name',
        'desc',
        'content',
        'itinerary',
        'include',
        'exclude',
        'faq',
        'location',
        'city_id',
        'price',
        'category_id',
        'status',
    ];

    const TRIP = 1;
    const HONEY = 2;
    const EVENT = 3;
    const RENT_CAR = 4;
    const CATEGORY = [
        self::TRIP => 'Opentrip',
        self::HONEY => 'Bulan Madu',
        self::EVENT => 'Event',
        self::RENT_CAR => 'Rental Mobil'
    ];

    const BALI = 1;
    const YOGYAKARTA = 2;
    const NTB = 3;
    const LAMPUNG = 4;
    const SURABAYA = 5;
    const MALANG =6;
    const CITY = [
        self::BALI => 'Bali',
        self::YOGYAKARTA => 'Yogyakarta',
        self::NTB => 'Nusa Tenggara Barat',
        self::LAMPUNG => 'Lampung',
        self::SURABAYA => 'Surabaya',
        self::MALANG => 'Malang',
    ];

    protected $with = ['media', 'user'];

    protected $appends = ['city', 'category'];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function getCityAttribute(): string
    {
        return self::CITY[$this->city_id];
    }

    public function getCategoryAttribute(): string
    {
        return self::CATEGORY[$this->category_id];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
