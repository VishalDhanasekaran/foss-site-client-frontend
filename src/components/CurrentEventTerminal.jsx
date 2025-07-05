import React from 'react'

function CurrentEventTerminal({event}) {
    return (
        <>
            <section className="flex flex-col w-[100%] max-w-6xl mx-auto justify-center items-center 
    bg-zinc-800/40 backdrop-blur-md shadow-[0_0_15px_3px_rgba(255,255,0,0.3)] ring-1 ring-black 
    rounded-2xl mt-10 gap-2 terminal-border transition-all duration-500"
                data-aos="fade-up" data-aos-duration="2000"
            >

                <div class="w-full text-secondary px-4 py-2 rounded-t-2xl flex items-center gap-2">
                    <div class="flex gap-2">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <span class="font-courier  font-extrabold text-secondary text-sm ml-4">
                        FOSS@CIT:~$ embrace-the-penguin
                    </span>
                </div>


                <div class="terminal-text w-full p-6">
                    <div class="mb-4">
                        <h1 class="font-courier text-1xl  text-secondary terminal-glow">
                            <span class=" text-secondary">
                                $ </span>
                            cat Current-Event.txt
                        </h1>
                    </div>

                    <div class="flex sm:flex-row flex-col gap-6">

                        <div class="flex justify-center items-center flex-col">
                            <a href={`/events/${event?._id}`}>
                                <div class="border-2 border-secondary rounded-lg p-2 bg-black/50">

                                    <div class="w-80 h-48 bg-gray-800 rounded flex items-center justify-center border border-yellow-400/30">
                                        <span class="font-courier  text-secondary text-sm">
                                            <img src={event?.pic} />
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <span class="font-courier font-extrabold  text-secondary text-xl   terminal-glow mt-4 text-center">
                                {event.title}
                            </span>
                        </div>


                        <div class="grid grid-cols-2 grid-rows-3 gap-4 w-full font-mono">
                            <div class="flex flex-col">
                                <span class=" text-secondary font-bold text-lg terminal-glow">DATE:</span>
                                <span class=" text-secondary text-lg font-mono">
                                    {event?.eventDate.slice(0, 10).split('-').reverse().join('-')}
                                </span>
                            </div>

                            <div class="flex flex-col">
                                <span class=" text-secondary font-bold  text-lg terminal-glow">VENUE:</span>
                                <span class=" text-secondary text-lg font-mono">{event.venue}</span>
                            </div>

                            <div class="flex flex-col">
                                <span class=" text-secondary  font-bold text-lg terminal-glow">TIME:</span>
                                <span class=" text-secondary text-lg font-mono">{event.time} IST</span>
                            </div>

                            <div class="flex flex-col">
                                <span class=" text-secondary font-bold  text-lg terminal-glow">HANDLED BY:</span>
                                <span class=" text-secondary text-lg font-mono truncate">{event.speaker}</span>
                            </div>

                            <div class="col-span-2 cursor-pointer">
                                <button class="flex items-center gap-2 px-4 py-2 border border-yellow-400 rounded bg-black/50 hover:bg-yellow-400/10 transition-all duration-300 terminal-button">
                                    <span class=" text-secondary  ">$</span>
                                    <a href={`/events/${event?._id}`}>
                                    <span class=" text-secondary font-mono" /*onClick={() => { handleClick(event?.link, event?._id) }}*/>
                                        ./view_more.sh
                                    </span>
                                    </a>
                                    <span class="cursor  text-secondary"></span>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="mt-6 pt-4 border-t border-yellow-400/30">
                        <span class="font-courier font-extrabold text-secondary text-sm">FOSS@CIT:~$ </span>
                        <span className="text-secondary   animate-blink mt-2">_</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CurrentEventTerminal