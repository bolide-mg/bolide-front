import {Input} from "@headlessui/react";

const Main = () => {
    return (
        <>
            <div className="w-full h-full bg-white">
                <div className="flex w-full h-16 items-center justify-center">
                    <Input
                        type="text"
                        placeholder="search"
                        className="rounded-md border h-3/4 p-1"
                    />
                </div>
                <div className="min-h-full flex justify-center py-5">
                    <div className="w-full md:w-3/4 rounded-xl flex flex-col border">
                        The result
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
