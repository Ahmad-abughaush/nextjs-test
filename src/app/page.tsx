import React from 'react';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-purple-500">Next JS Test</h2>
        <p className="mt-5 text-xs w-3/4 h-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nisi reiciendis sit repellendus soluta harum laudantium, magnam accusamus,
          sunt consequuntur dolores! Quas voluptatum exercitationem nihil, voluptates neque vel rem corporis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit dolores facere itaque quod esse pariatur laudantium. Accusantium nobis incidunt obcaecati voluptates sequi, explicabo necessitatibus suscipit fugit aliquid sed libero?
        </p>
      </section>



      <section className="w-full h-900 flex flex-col items-center justify-center p-24 mt-20  relative " style={{ background: '#ccc' ,marginTop:'200px'}}>
        <h2 className="text-2xl font-bold text-black">Title Goes Here</h2>
        <p className=" mt-3 text-xs w-3/4 h-16 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reprehenderit non fugit voluptate consectetur architecto obcaecati? Deserunt repellendus nesciunt magnam impedit vero reprehenderit temporibus, dolorum unde amet ratione ducimus explicabo.
        </p>

        <div className="card-container flex space-x-4 flex-row justify-content-center items-center relative" style={{ marginBottom: '-120px', marginTop: '20px' }}>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative" style={{ width: '200px', height: '180px', padding: '30px' }}>
            <div className="arrow" style={{ borderColor: 'transparent transparent purple transparent', position: 'absolute', top: '0', right: '0', width: '0', height: '0', borderWidth: '0 10px 20px 10px' }}></div>
            <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe doloremque odio repellat repudiandae moles
            </p>
          </div>
       <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative" style={{ width: '200px', height: '180px', padding: '30px' }}>
            <div className="arrow" style={{ borderColor: 'transparent transparent purple transparent', position: 'absolute', top: '0', right: '0', width: '0', height: '0', borderWidth: '0 10px 20px 10px' }}></div>
            <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe doloremque odio repellat repudiandae moles
            </p>
          </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative" style={{ width: '200px', height: '180px', padding: '30px' }}>
            <div className="arrow" style={{ borderColor: 'transparent transparent purple transparent', position: 'absolute', top: '0', right: '0', width: '0', height: '0', borderWidth: '0 10px 20px 10px' }}></div>
            <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe doloremque odio repellat repudiandae moles
            </p>
          </div>
           <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative" style={{ width: '200px', height: '180px', padding: '30px' }}>
            <div className="arrow" style={{ borderColor: 'transparent transparent purple transparent', position: 'absolute', top: '0', right: '0', width: '0', height: '0', borderWidth: '0 10px 20px 10px' }}></div>
            <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe doloremque odio repellat repudiandae moles
            </p>
          </div>

        </div>

      </section>







      <section className="w-full flex flex-col md:flex-row items-center justify-center p-4 md:p-24 bg-gray-400 relative" style={{ height: '60vh', marginTop: '300px', background: '#ccc' }}>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-black">Title Goes Here</h2>
          <p className="mt-3 text-xs md:w-4/4 overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reprehenderit non fugit voluptate consectetur architecto obcaecati? Deserunt repellendus nesciunt magnam impedit vero reprehenderit temporibus, dolorum unde amet ratione ducimus explicabo.
          </p>
        </div>

        <div className="flex-1 flex flex-row" style={{ padding: '100px' }}>
          <div className="flex flex-row flex-wrap justify-center space-x-2">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow relative dark:bg-gray-800 dark:border-gray-700" style={{ width: '200px', height: '180px', margin: '10px', marginTop: '50px' }}>
              <span className="absolute top-2 right-2 bg-gray-200 text-gray-600 rounded-full px-2 py-1 text-xs">1</span>
              <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe doloremque odio repellat repudiandae moles
              </p>
            </div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow relative dark:bg-gray-800 dark:border-gray-700" style={{ width: '200px', height: '180px', margin: '10px', marginTop: '50px' }}>
              <span className="absolute top-2 right-2 bg-gray-200 text-gray-600 rounded-full px-2 py-1 text-xs">2</span>
              <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe doloremque odio repellat repudiandae moles
              </p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-center space-x-2">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow relative dark:bg-gray-800 dark:border-gray-700" style={{ width: '200px', height: '180px', margin: '10px', }}>
              <span className="absolute top-2 right-2 bg-gray-200 text-gray-600 rounded-full px-2 py-1 text-xs">3</span>
              <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe doloremque odio repellat repudiandae moles
              </p>
            </div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow relative dark:bg-gray-800 dark:border-gray-700" style={{ width: '200px', height: '180px', margin: '10px' }}>
              <span className="absolute top-2 right-2 bg-gray-200 text-gray-600 rounded-full px-2 py-1 text-xs">4</span>
              <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe doloremque odio repellat repudiandae moles
              </p>
            </div>
          </div>
        </div>


      </section>






    </main >
  );
}
