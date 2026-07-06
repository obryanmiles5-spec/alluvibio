import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Not Found</h2>
      <p className="text-slate-500 mb-6">Could not find requested resource</p>
      <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold">
        Return Home
      </Link>
    </div>
  )
}
