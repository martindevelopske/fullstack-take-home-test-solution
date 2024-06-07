function Header() {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-1 p-2 md:p-1 items-center justify-between py-3 px-10 border-b h-[70px] fixed top-0 right-0 w-full z-50 bg-secondary-turquoise-dark-1 text-white">
      <div className="md:text-2xl self-start">Teachers View</div>
      <div className="flex gap-3 items-center justify-center">
        <div className="hover:text-secondary-orange-red">Home</div>
        <div className="hover:text-secondary-orange-red">All Books</div>
        <div className="hover:text-secondary-orange-red">ReadingList</div>
      </div>
    </div>
  );
}

export default Header;
