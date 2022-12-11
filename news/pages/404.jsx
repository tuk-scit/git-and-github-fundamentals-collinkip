import Link from 'next/link'
import { useEffect } from 'react';
import {useRouter} from 'next/router';
import { v4 as uuid } from 'uuid';
const notFound=()=>{
    const router=useRouter();
    
    const id=uuid();
    useEffect(()=>{
        console.log("how are you" ,id);
        setTimeout(()=>{
            router.push('/home');
        },3000)

    },[])
    return(
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>This page Doent Exist</h2>
            <p>Go back to <Link href="/home">Homepage</Link> </p>
            
        </div>
    )
};
export default notFound;