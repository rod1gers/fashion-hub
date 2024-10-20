export function Footer() {

    return (
        <div>
            <div className="flex justify-center items-center px-20 lg:mt-10">
                <div className="w-full h-[0px] border mt-20 border-black/10"></div>
            </div>
            <footer className="flex justify-between mt-10 relative px-8 pb-10 md:px-20 z-10 bottom-0">
                <p className="py-3">&copy; 2024 All rights reserved.</p>
                <div className="flex py-3 gap-2">
                <p>Github</p>
                <p>/</p>
                <p>LinkedIn</p>
                <p>/</p>
                <p>TikTok</p>
                </div>
            </footer>
        </div>
        
    )
}