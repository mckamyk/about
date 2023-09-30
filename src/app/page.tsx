import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 bg-black text-gray-300 pb-8">
      <div className="fixed h-[100px] w-full bg-gradient-to-b from-blue-400/25 to-transparent" />

      <div className="flex min-h-screen flex-col items-center gap-4 z-10">
        <div className="h-20" />
        <div className="rounded-full bg-gradient-to-tr from-red-600 to-blue-500 p-1">
          <Image src="/profile.jpg" width={100} height={100} alt="Profile Picture" className="rounded-full" />
        </div>

        <div>
        </div>

        <div className="">
          <div className="text-3xl font-bold">McKittrick Kaminski</div>

          <div className="text-xl mt-2 text-center">Software Engineer</div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <Link href="https://x.com/mckamyk" target="_blank" className="flex items-center border border-gray-300 rounded-lg px-2 py-1 hover:bg-white/25 transition-colors shadow-md shadow-transparent hover:shadow-gray-300">
              <Image
                src="/x.svg"
                width={14}
                height={14}
                alt="X Logo"
                className="mr-1"
              />
              McKamyk
            </Link>

            <Link href="https://github.com/mckamyk" target="_blank" className="flex items-center border border-gray-300 rounded-lg px-2 py-1 hover:bg-white/25 transition-colors shadow-md shadow-transparent hover:shadow-gray-300">
              <Image
                src="/github.svg"
                width={16}
                height={16}
                alt="Github Logo"
                className="mr-1"
              />
              McKamyk
            </Link>
          </div>
        </div>

        <div className="h-[100px]"></div>

        <div>
          <div className="flex justify-between items-end">
            <div className="text-left text-2xl xl:text-4xl font-bold pl-8 pb-4">Self Contained Preact Web Components</div>
            <div className="text-right text-gray-700 italic">
              example repo coming soon...
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-center max-w-[1200px] gap-4">
            <Image
              src="/preactComponent-1.svg"
              height={800}
              width={600}
              alt="Preact Component"
              className="rounded-lg shadow-blue-900 shadow-md"
            />
            <div className="flex flex-col gap-y-2 px-2 xl:px-0 justify-between">
              <Image
                src="/preactComponent-2.svg"
                height={200}
                width={600}
                alt="Consumer of Preact Component"
                className="rounded-lg shadow-blue-900 shadow-md"
              />
              <Image
                src="/preactComponent-3.svg"
                height={200}
                width={600}
                alt="Consumer of Preact Component"
                className="rounded-lg shadow-blue-900 shadow-md"
              />

              <div className="text-lg font-semibold text-center">
                <p className="text-center">
                  Technique to embed multiple react-like components inside an unowned DOM that supports Custom Elements.
                </p>
              </div>
              <div className="text-center">
                <code className="bg-gray-800 rounded-md px-2 py-1">Bun.build()</code> bundles all files in the repository that end in
                <code className="bg-gray-800 rounded-md px-2 py-1">*.component.tsx</code> as an entrypoint. It treeshakes and chunks shared code. The exported
                bundles are an ES module, allowing browsers cache locally. These components could be served statically.
              </div>


            </div>
          </div>
        </div>

        <div className="h-[100px]"></div>

        <div>
          <div className="flex justify-between items-end">
            <div className="text-left text-2xl xl:text-4xl font-bold pl-8 pb-4">Forbidden Full Stack</div>
            <div className="text-right text-gray-700 italic">
              example repo and site coming soon...
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-center max-w-[1200px] gap-4">
            <Image
              src="/ffs.svg"
              height={600}
              width={600}
              alt="Forbidden Fullstack"
              className="grow"
            />
            <div className="flex flex-col px-2 xl:px-0 max-w-[600px] justify-between">
              <div className="text-lg mt-4 font-semibold text-center">
                <p className="text-center">
                  This was a fun experiment in building a Full Stack website with a mix of Server and Client Side Rendering from "scratch".
                </p>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                <li><code className="bg-gray-800 rounded-md px-2 py-1">react-dom/server</code> to render jsx to html on the server</li>
                <li><code className="bg-gray-800 rounded-md px-2 py-1">htmx</code> to load run-time enriched components</li>
                <li><code className="bg-gray-800 rounded-md px-2 py-1 text-blue-500">preact</code> to build client-rendered elements</li>
                <li><code className="bg-gray-800 rounded-md px-2 py-1 text-blue-500">preact-custom-elements</code> allows HTMX to load preact components</li>
                <li><code className="bg-gray-800 rounded-md px-2 py-1 text-green-600">trpc</code> for type-safe calls from preact components to the server</li>
                <li><code className="bg-gray-800 rounded-md px-2 py-1">tailwind</code> for styles</li>
                <li><code className="bg-gray-800 rounded-md px-2 py-1">elysia</code> for hosting the server</li>
                <li><code className="bg-gray-800 rounded-md px-2 py-1">Bun</code> for runtime execution and bundling of preact components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
