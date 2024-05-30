<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Twilio\Rest\Client;


class DashboardController extends Controller
{
    public function index(){
        return Inertia::render('Dashboard/Index',[]);
    }

    public function verify(Request $request){

        try{
            $sid = env("TWILIO_ACCOUNT_SID");
            $token = env("TWILIO_AUTH_TOKEN");
            $twilio = new Client($sid, $token);

            if($request->get('code')){
                $verification = $twilio->verify->v2->services(env("TWILIO_VERIFY_SERVICE"))
                    ->verificationChecks
                    ->create([
                                "to" => $request->get('phone'),
                                "code" => $request->get('code')
                            ]);

                if($verification->status=='approved') return Inertia::render('Dashboard/Success');
            }else{
                $verification =  $twilio
                    ->verify
                    ->v2
                    ->services(env("TWILIO_VERIFY_SERVICE"))
                    ->verifications
                    ->create($request->get('phone'), "sms");                
            }

            return Inertia::render('Dashboard/Index',[
                'verification' => $verification->toArray(),                
            ]);
            
        }catch(Exception $e){
            
            return Inertia::render('Dashboard/Index',[
                'error' => true,
                'errorMessage' => $e->getMessage()
            ]);
        }
        
    }
}
