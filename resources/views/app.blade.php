<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link type="image/png" sizes="16x16" rel="icon" href="{{ asset('/img/logo.png')}}">    
    <!-- PWA  -->
    <meta name="theme-color" content="#E28644"/>
    <link rel="apple-touch-icon" href="{{ asset('/img/logo.png') }}">    

    @vite(['resources/css/app.css', 'resources/ts/app.tsx'])
    @inertiaHead
  </head>
  <body>
    @inertia
    
  </body>
</html>