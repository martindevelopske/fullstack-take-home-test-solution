function Header() {
  return (
    <div className="flex flex-row items-center justify-between py-3 px-10 border-b h-[70px] fixed top-0 right-0 w-full z-50 bg-secondary-turquoise-dark-1 text-white">
      <div className="text-2xl self-start">Teachers View</div>
      <div className="flex gap-3 items-center justify-center">
        <div className="hover:text-primary-turquoise">Home</div>
        <div className="hover:text-primary-turquoise">All Books</div>
        <div className="hover:text-primary-turquoise">ReadingList</div>
      </div>
    </div>
  );
}

export default Header;
