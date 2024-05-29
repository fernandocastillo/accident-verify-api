
import { useForm } from '@inertiajs/react'

export default ()=>{

    const { data, setData, post, processing, errors } = useForm({
        phone: '',
        
      })
      
      function submit(e: any) {
        e.preventDefault()
        post('/')
      }

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
            onChange={e => setData('phone', e.target.value)}
            required
            />
            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 transition-colors duration-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            
            </span>
        </label>
        
        
        
        <button  type="submit" className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
            Verify my number
        </button>
        
        
        </div>
        </form>
        </>
    )
}