import Head from 'next/head'
import Header from '../../components/Header'
import { useState } from 'react'

export default function Student(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  async function submit(e){
    e.preventDefault()
    const res = await fetch('/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, amount: parseFloat(amount||0) })
    })
    if (res.ok) {
      setTitle(''); setDescription(''); setAmount('')
      alert('Request created')
    } else {
      alert('Error')
    }
  }

  return (
    <div>
      <Head><title>Student — Academic Help</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Create a help request</h1>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block font-medium">Title</label>
            <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-medium">Description</label>
            <textarea value={description} onChange={e=>setDescription(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-medium">Amount needed (optional)</label>
            <input value={amount} onChange={e=>setAmount(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Create request</button>
          </div>
        </form>
      </main>
    </div>
  )
}
