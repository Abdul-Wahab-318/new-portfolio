import React , {useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    const [loading , setLoading] = useState(false)
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')
    const [error , setError] = useState('')

    const validateInput = () => {

        if ( name === '' || email === '' || message === '' ) 
        {
            setError('Please enter some text')
            return false
        }
        else
        {
            setError('')
            return true
        }

    }

    const reset = () => {
        setEmail('')
        setError('')
        setName('')
        setMessage('')
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        
        if ( !validateInput() )
        return
    
        setLoading(true)

        const payload = { name , email , message }

        try{
            let data = await axios.post('https://getform.io/f/wbrkgyza' , payload)

            if( data.status == 200 )
            {
                reset()
                toast.success('Message sent')
            }
            
            else
                toast.error('Message not sent')
        }
        catch(err)
        {
            toast.error('An error occurred')
        }
        finally{
            setLoading(false)
        }
        

    }

  return (
    <section id='contact' className='contact-form mt-24'>
        <h3 className="text-sm tracking-widest font-bold uppercase mb-6 mt-24 lg:mt-0">Contact Me</h3>
        <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input onChange={ e => setName(e.target.value) } type="text" name='name' placeholder='Name' className='w-full bg-transparent text-slate-200 border-2 border-slate-200 px-4 py-3 rounded-md'  />
            <input onChange={ e => setEmail(e.target.value) } type="email" name='email' placeholder='Email' className='w-full bg-transparent text-slate-200 border-2 border-slate-200 px-4 py-3 rounded-md'  />

            <textarea onChange={ e => setMessage(e.target.value) } name="message" id="message" cols="30" rows="5" placeholder='Your Message' className='w-full bg-transparent text-slate-200 border-2 border-slate-200 px-4 py-3 rounded-md'></textarea>
            <p className='text-rose-500 text-sm font-bold uppercase ps-2 mb-3'>{error}</p>
            <div>
                <button type='submit' disabled={loading} className='bg-transparent border-2 border-slate-200 text-slate-300 p-4 px-8 rounded-md hover:text-white transition font-semibold '>Submit</button>
            </div>
        </form>
        <ToastContainer/>
    </section>
  )
}
