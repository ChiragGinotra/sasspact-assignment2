function ButtonIcon({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-none border-none p-1.5 rounded-sm transition-all duration-200 hover:bg-gray-100"
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
