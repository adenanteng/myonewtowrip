<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\Page;
use App\Models\PageFaqDetail;
use App\Models\PageHero;
use App\Models\PagePeopleDetail;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use function Termwind\render;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
//                dd(User::all()->toArray());
        return Inertia::render('User/Index', [
            'users' => User::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('User/CreateEdit', [
            'selectRole' => User::ROLE
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
//        dd($request->toArray());
        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
        ])->validateWithBag('storeInformation');

        $request['password'] = bcrypt(12345678);

        return Redirect::route('user.index', [
            'users' => User::create($request->all()),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Blog $blog
     * @return Response
     */
    public function show(Blog $blog)
    {
//        return Inertia::render('Blog/Show', [
//            'blog' => $blog
//        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     * @return Response
     */
    public function edit($id)
    {
//        $users = User::find($id);
//        dd($users);
        return Inertia::render('User/CreateEdit',
            [
                'users' => User::find($id),
                'selectRole' => User::ROLE
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Blog $blog
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function update(Request $request, User $user)
    {
//        dd($request->all());
//        Validator::make($request->toArray(), [
//            'name' => ['required', 'string', 'max:255'],
//        ])->validateWithBag('updateBlogInformation');
        $user->update($request->all());

        return Redirect::route('user.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function destroy(Request $request)
    {
        $user = User::find($request['id']);
        $user->delete();

        return Redirect::route('user.index');
    }

    public function resetPassword($user)
    {
//        dd($user);
        $data = User::findOrFail($user);

        $data->password = bcrypt('12345678');
        // User user data...
        $data->fill($data->all()->toArray())->update();
    }
}
