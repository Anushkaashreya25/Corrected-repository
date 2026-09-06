import Head from 'next/head'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export default function Helper(){
  const [requests, setRequests] = useState([])

  useEffect(()=>{ fetchRequests() }, [])

  async function fetchRequests(){
    const res = await fetch('/api/requests')
    const j = await res.json()
    setRequests(j)
  }

  return (
    <div>
      <Head><title>Helper — Academic Help</title></Head>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Open requests</h1>
        <ul className="space-y-4">
          {requests.map(r => (
            <li key={r.id} className="border p-4 rounded">
              <h2 className="font-semibold">{r.title}</h2>
              <p>{r.description}</p>
              <p className="text-sm text-gray-600">Amount needed: {r.amount}</p>
              <div className="mt-2">
                <button className="px-3 py-1 bg-green-600 text-white rounded">Donate (stub)</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
