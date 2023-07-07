"use client"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 ">
      <div className='bg-[url(/payment.jpg)] bg-cover bg-no-repeat w-[750px] h-full flex justify-center items-end gap-12 pb-[85px]'>
      <button onClick={()=>router.push('https://shockly-shop-laksaeid.vercel.app/checkout/result?success=false')} className='bg-red-500 text-sm py-4 rounded-md px-20 text-white '>انصراف</button>
      <button onClick={()=>router.push('https://shockly-shop-laksaeid.vercel.app/checkout/result?success=true')} className='bg-green-500 text-sm py-4 rounded-md px-20 text-white '>پرداخت</button>
      </div>
    </main>
  )
}
