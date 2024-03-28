import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-4 text-gray-300 pb-48">
      <div className="fixed h-[100px] w-full left-0 bg-gradient-to-b from-blue-400/25 to-transparent" />

      <div className="flex min-h-screen w-full flex-col items-center gap-4 z-10 max-w-[1200px]">
        <div className="h-20" />
        <div className="rounded-full bg-gradient-to-tr from-red-600 to-blue-500 p-1">
          <img
            src="/profile.jpg"
            width={100}
            height={100}
            alt="Profile Picture"
            className="rounded-full"
          />
        </div>

        <div className="">
          <div className="text-3xl font-bold">McKittrick Kaminski</div>

          <div className="text-xl mt-2 text-center">Software Engineer</div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <a
              href="https://x.com/mckamyk"
              target="_blank"
              className="flex items-center border border-gray-300 rounded-lg px-2 py-1 hover:bg-white/25 transition-colors shadow-md shadow-transparent hover:shadow-gray-300"
            >
              <img
                src="/x.svg"
                width={14}
                height={14}
                alt="X Logo"
                className="mr-1"
              />
              McKamyk
            </a>

            <a
              href="https://github.com/mckamyk"
              target="_blank"
              className="flex items-center border border-gray-300 rounded-lg px-2 py-1 hover:bg-white/25 transition-colors shadow-md shadow-transparent hover:shadow-gray-300"
            >
              <img
                src="/github.svg"
                width={16}
                height={16}
                alt="Github Logo"
                className="mr-1"
              />
              McKamyk
            </a>
          </div>
        </div>

        <div className="w-full h-[100px] flex items-center">
          <span className="w-1/2 bg-gradient-to-r from-transparent to-blue-600 inline h-2" />
          <span className="w-1/2 bg-gradient-to-r from-blue-600 to-transparent inline h-2" />
        </div>

        <div className="w-full max-w-[1200px]">
          <div className="flex justify-between items-end">
            <div className="text-left text-2xl xl:text-4xl font-bold pl-8 pb-4">
              Self Contained Preact Web Components
            </div>
          </div>
          <div className="grid grid-cols-2 w-full max-w-[1200px] gap-4 px-2 xl:px-0">
            <div className="col-span-2 xl:col-span-1 relative aspect-[1/1]">
              <img
                src="/preactComponent-1.svg"
                alt="Preact Component"
                className="col-span-2 xl:col-span-1 rounded-lg shadow-blue-900 shadow-md"
              />
            </div>
            <div className="col-span-2 xl:col-span-1 flex flex-col gap-y-4 justify-between">
              <div className="relative aspect-[2/1]">
                <img
                  src="/preactComponent-2.svg"
                  alt="Consumer of Preact Component"
                  className="rounded-lg shadow-blue-900 shadow-md"
                />
              </div>
              <div className="relative aspect-[4/1]">
                <img
                  src="/preactComponent-3.svg"
                  alt="Consumer of Preact Component"
                  className="rounded-lg shadow-blue-900 shadow-md"
                />
              </div>

              <div className="text-lg font-semibold text-center">
                <p className="text-center">
                  Technique to embed multiple react-like components inside an
                  unowned DOM that supports Custom Elements.
                </p>
              </div>
              <div className="text-center">
                <code className="bg-gray-800 rounded-md px-2 py-1">
                  Bun.build()
                </code>{" "}
                bundles all files in the repository that end in
                <code className="bg-gray-800 rounded-md px-2 py-1 ml-1">
                  *.component.tsx
                </code>{" "}
                as an entrypoint. It treeshakes and chunks shared code. The
                exported bundles are an ES module, allowing browsers cache
                locally. These components could be served statically.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[100px] flex items-center">
          <span className="w-1/2 bg-gradient-to-r from-transparent to-blue-600 inline h-2" />
          <span className="w-1/2 bg-gradient-to-r from-blue-600 to-transparent inline h-2" />
        </div>

        <div className="w-full max-w-[1200px]">
          <div className="flex justify-between items-end">
            <div className="text-left text-2xl xl:text-4xl font-bold pl-8 pb-4">
              Forbidden Full Stack
            </div>
          </div>
          <div className="grid grid-cols-2 w-full max-w-[1200px] gap-4">
            <div className="col-span-2 xl:col-span-1 relative aspect-[1.5/1]">
              <img src="/ffs.svg" alt="Forbidden Fullstack" className="grow" />
            </div>
            <div className="col-span-2 xl:col-span-1 flex flex-col px-2 xl:px-0 max-w-[600px] justify-between">
              <div className="text-lg mt-4 font-semibold text-center">
                <p className="text-center">
                  This was a fun experiment in building a Full Stack website
                  with a mix of Server and Client Side Rendering from
                  &quot;scratch&quot;.
                </p>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                <li>
                  <code className="bg-gray-800 rounded-md px-2 py-1">
                    react-dom/server
                  </code>{" "}
                  to render jsx to html on the server
                </li>
                <li>
                  <code className="bg-gray-800 rounded-md px-2 py-1">htmx</code>{" "}
                  to load run-time enriched components
                </li>
                <li>
                  <code className="bg-gray-800 rounded-md px-2 py-1 text-blue-500">
                    preact
                  </code>{" "}
                  to build client-rendered elements
                </li>
                <li>
                  <code className="bg-gray-800 rounded-md px-2 py-1 text-blue-500">
                    preact-custom-elements
                  </code>{" "}
                  allows HTMX to load preact components
                </li>
                <li>
                  <code className="bg-gray-800 rounded-md px-2 py-1 text-green-600">
                    trpc
                  </code>{" "}
                  for type-safe calls from preact components to the server
                </li>
                <li>
                  <code className="bg-gray-800 rounded-md px-2 py-1">
                    tailwind
                  </code>{" "}
                  for styles
                </li>
                <li>
                  <code className="bg-gray-800 rounded-md px-2 py-1">
                    elysia
                  </code>{" "}
                  for hosting the server
                </li>
                <li>
                  <code className="bg-gray-800 rounded-md px-2 py-1">Bun</code>{" "}
                  for runtime execution and bundling of preact components
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-[100px] flex items-center">
          <span className="w-1/2 bg-gradient-to-r from-transparent to-blue-600 inline h-2" />
          <span className="w-1/2 bg-gradient-to-r from-blue-600 to-transparent inline h-2" />
        </div>

        <div className="w-full max-w-[1200px]">
          <div className="flex justify-center items-end">
            <div className="text-2xl xl:text-4xl font-bold pb-4 w-[600px] xl:w-[1200px]">
              Web3 Self-Attested Credit Score
            </div>
          </div>
          <div className="grid grid-cols-2 justify-center items-center w-full max-w-[1200px] gap-4 px-2 xl:px-0">
            <div className="col-span-2 relative w-full aspect-[1.3/1]">
              <img src="/JankaChart.svg" alt="Janka Score Flow Chart" />
            </div>

            <div className="col-span-2 xl:col-span-1 relative aspect-[600/413]">
              <img src="/janka.png" alt="Janka Score Homepage Image" />
            </div>

            <div className="col-span-2 xl:col-span-1 self-stretch flex flex-col justify-around">
              <h2 className="text-xl font-semibold text-center">
                EthDenver 2023 Hackathon Project
              </h2>

              <p className="text-center">
                DeFi Credit scoring application that allows users to self-attest
                their credit scores. The credit scores are calculated on Loan
                data sourced from TheGraph and posted with a small stake on
                chain. If there are no challenges, within the optmistic window,
                the user can reclaim their stake. During the optimistic window,
                validators can check the calculation to assure the user did not
                lie.
              </p>

              <p className="text-center">
                My responsiblities included the overall architecture and
                implementation of the Gelato Web3 Functions, Frontend, Algorithm
                compilation, IPFS node hosting and pinning, and DApp deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
