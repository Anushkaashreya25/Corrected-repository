import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-gray-100 p-4">
      <nav className="max-w-3xl mx-auto flex justify-between items-center">
        <Link href="/"><a className="font-semibold">Academic Help</a></Link>
        <div className="space-x-3">
          <Link href="/student"><a>Student</a></Link>
          <Link href="/helper"><a>Helper</a></Link>
        </div>
      </nav>
    </header>
  )
}
