const LatestTips = () => {
    const tips = [
        {
            title: '',
            img: 'https://i.ibb.co/51y1hnT/learning-concept-illustration-114360-6186.webp',
            date: 'Jul 12, 2024'
        },
        {
            title: '',
            img: 'https://i.ibb.co/FXfjgfG/exams-concept-illustration-114360-2754.webp',
            date: 'Dec 09, 2023'
        },
        {
            title: '',
            img: 'https://i.ibb.co/9V5GDVh/study-abroad-concept-illustration-114360-7493.webp',
            date: 'Aug 23, 2050'
        },
    ]
    return (
        <div className="my-12 sm:my-24 px-3">
            <div className="text-center font-semibold">
                <h3 className="text-2xl sm:text-4xl pb-5">About Latest Tips, News and Courses</h3>
                <p className="max-w-xl px-3 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat odio qui voluptatem alias soluta saepe magnam vitae enim corrupti!</p>
            </div>
            <div className="flex justify-center flex-wrap gap-8 py-12">
                {
                    tips.map(({ title, img, date }, i) => <div key={i} className="w-full max-w-md relative shadow-xl rounded-xl overflow-hidden border">
                        <img className="w-full" src={img} alt={title} />
                        <div className="absolute bottom-0 right-0 left-0 h-1/2 text-white flex justify-center items-end">
                            <div>
                                <div className="bg-gradient-to-t from-[#032234]/80 to-[#032234]/0 py-12"></div>
                                <div className="bg-gradient-to-t from-[#032234] to-[#032234]/80 p-5">
                                    <h4 className="text-xl sm:text-2xl pb-5">{title} Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                    <p className="text-sm sm:text-base text-primary pb-5">{date}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestTips;