
const PinKeypad = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
        <button
          key={index}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PinKeypad;
