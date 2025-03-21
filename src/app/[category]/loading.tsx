const Loading = () => {
    return (
        <div className="p-10 md:p-16 mx-auto">
            <div className="flex flex-wrap gap-5 justify-center">

            {Array.from({ length: 3 }, (_, i) => (
                <div role="status" key={i} className="p-4 border border-gray-200 rounded-md shadow-md animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-80 w-80 mb-4 bg-gray-300 dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-7"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-7"></div>
                    <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>
                    <div className="flex justify-between gap-8 mt-7">
                        <div className="h-3 bg-gray-200 rounded-full w-full dark:bg-gray-700"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-full dark:bg-gray-700"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Loading