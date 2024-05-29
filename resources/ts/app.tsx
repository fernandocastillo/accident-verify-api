import "./bootstrap";
import "../css/app.css";
//import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from '@inertiajs/react'
//import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Guest from "./Pages/Layout/Guest";




createInertiaApp({
  resolve: (name) => {

        //resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx'))
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        let page:any  = pages[`./Pages/${name}.tsx`] 
        
        page.default.layout = (page:any) => <Guest children={page} />
        //if(name.startsWith('Guest/')) page.default.layout = page => <Blank children={page} />
        return page
    },
  setup({ el, App, props }) {
    createRoot(el).render(
        
            <App {...props} />
        
    );
  },
});