<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        return Inertia::render('Dashboard/Index',[]);
    }

    public function verify(Request $request){
        dd($request->get('phone'));
    }
}
