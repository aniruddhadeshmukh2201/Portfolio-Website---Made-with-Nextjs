const BooksPage = () => {
    const books = [
      { id: 1, image: "/MSFM.jpg" },
      { id: 2, image: "/BK.jpg" },
      { id: 3, image: "/TKAMB.jpg" },
      { id: 4, image: "/the idiot.jpg" },
      { id: 5, image: "/12 rules for life.jpg" },
      { id: 6, image: "/deep work.jpg" },
      { id: 7, image: "/the power of habits.jpg" },
    ];
  
    return (
      <div className="flex flex-col min-h-screen">
  
        {/* Scrollable Content Section */}
        <div className="flex flex-col items-center w-full px-4 md:px-8 py-20"
        >
          <div className="w-full max-w-[1040px] px-2">
            <h2 className="text-4xl font-bold text-center mb-8">I Loved Reading These Books</h2>
  
            {/* Responsive Grid for Books */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {books.map((book) => (
                <div key={book.id} className="group duration-200 transform hover:scale-105">
                  <div className="flex justify-center">
                    <img
                      src={book.image}
                      alt="Book Cover"
                      className="object-cover w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] rounded-lg shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default BooksPage;
  