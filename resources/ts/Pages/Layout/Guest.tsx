
import { router, Head, usePage } from "@inertiajs/react"
import logoImage from '/public/img/logo.png';


export default ({ children } : {children:any}) => {

    const { companyName } = usePage<{companyName: string}>().props

    return (
        <>
        <Head title={companyName  + ' :: Neny'} />

        <div className='min-h-100vh flex grow bg-slate-50 dark:bg-navy-900'>        
            <main className="grid w-full grow grid-cols-1 md:place-items-center">
            <div className="w-full max-w-[26rem] p-4 sm:px-5">
            <div className="text-center">
                <img className="mx-auto h-[150px] w-full cursor-pointer" src={logoImage} alt="logo" onClick={()=>router.get('/')} />
                <div className="mt-4">
                <h2 className="text-2xl font-semibold text-mylife-dark dark:text-navy-100">
                    {companyName}
                </h2>                
                </div>
            </div>
            {children}
            <div className="mt-8 flex justify-center text-xs text-blue-400 dark:text-navy-300">
                <a href="https://freengers.com" target="_blank" className="hover:text-blue-500">2024 © Developer <span className="text-blue-700">Fernando Castillo</span></a>
                {/*<div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500" />
                <a href="#">Term of service</a>*/}
            </div>
            </div>
        </main>
      </div>
      </>
    )
}