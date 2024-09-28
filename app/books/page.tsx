





const BooksPage = () => {

    const books = [
        {
            id: 1,
            image: "/MSFM.jpg", 
        },
        {
            id: 2,
            image: "/BK.jpg",
        },
        {
            id: 3,
            image: "/TKAMB.jpg",
        },
    ];

    const anime = [
        {
            id: 1,
            image: "/AOT.jpg",
        },
        {
            id: 2,
            image: "/DEATHNOTE.jpg",
        },
        {
            id: 3,
            image: "/NARUTO.jpg",
        },
        {
            id: 4,
            image: "/ONEPIECE.jpg",
        },
        {
            id: 5,
            image: "/OPM.jpg",
        },
        {
            id: 6,
            image: "/SAO.jpg",
        },
        {
            id: 7,
            image: "/TOKYO.jpg",
        },
        {
            id: 8,
            image: "/TPN.jpg",
        },
        {
            id: 9,
            image: "/YU.jpg",
        }
    ];

    return (
        <div className="flex flex-col gap-[48px] justify-between w-[1040px] py-[100px]">
            <div className="flex flex-col gap-[48px] w-[1040px]">
                <div className="text-4xl font-bold">Recomended Books</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book) => (
                        <div key={book.id} className="  duration-200">
                            <div className="flex justify-between">
                                <img src={book.image} alt={""} className="hover:cursor  object-cover" />
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[48px] w-[1040px]">
                <div className="text-4xl font-bold">Recomended Anime</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {anime.map((anime) => (
                        <div key={anime.id} className="  duration-200">
                            <div className="flex justify-between">
                                <img src={anime?.image ?? ""} alt={""} className="hover:cursor  object-cover" />
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default BooksPage;