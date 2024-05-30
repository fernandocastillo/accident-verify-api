
import { useForm } from '@inertiajs/react'
import { useState, useEffect } from 'react'


type Verification = {
    sid: string,
    service_sid: string,
    account_sid: string,
    to: string,
    channel: string,
    status: string,
    valid: boolean,
    date_created: string,
    date_updated: string,
    lookup: {},
    amount: null ,
    payee: null,    
    sna: null,
    url: string
  }

type Props = {
    error: boolean,
    errorMessage: string,
    verification?: Verification
}
export default (props: Props)=>{

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        phone: '',
        code: '',
    })
      
    function submit(e: any) {
        e.preventDefault()
        post('/')
    }

    const [generalError, setGeneralError] = useState(false)

    useEffect(()=>{
        setGeneralError(props.error)
    },[props])
    

    return (
        <>
        <form onSubmit={submit}>
        <div className="card mt-5 rounded-lg p-5 lg:p-7">
        <label className="relative flex">
            <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Phone number"
                type="text"
                value={data.phone} 
                onChange={e => {setData('phone', e.target.value); clearErrors(); setGeneralError(false)}}
                required
                disabled={props.verification && !props.verification.valid}
            />
            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 transition-colors duration-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>                
            </span>            
        </label>

        {errors.phone && <div className='mt-2 alert flex rounded-lg bg-error px-4 py-4 text-white sm:px-5'>{errors.phone}</div>}

        {
            props.verification && !props.verification.valid ? (
                <>
                <span className="mt-3 font-bold">Code sent to your mobile</span>
                <label className="relative flex">
                    
                    <input
                        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Code sent to your mobile"
                        type="text"
                        value={data.code} 
                        onChange={e => {setData('code', e.target.value); clearErrors(); setGeneralError(false)}}
                        required                        
                    />
                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 transition-colors duration-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>

                    
                    </span>            
                </label>

                {errors.code && <div className='mt-2 alert flex rounded-lg bg-error px-4 py-4 text-white sm:px-5'>{errors.code}</div>}
                </>
            ) : null
        }


        {generalError && <div className='mt-2 alert flex rounded-lg bg-error px-4 py-4 text-white sm:px-5'>{props.errorMessage}</div>}
            
        <button  
            disabled={processing}
            type="submit" 
            className={`btn mt-5 w-full ${processing ? 'bg-primary/50' : 'bg-primary' } font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90`}>

                { props.verification && !props.verification.valid ? 'Confirm my code' : 'Verify my number' }            

            { processing ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 animate-spin">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>              
            ) : null}
        </button>        
        
        </div>
        </form>
        </>
    )
}