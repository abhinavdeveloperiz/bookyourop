export default function FloatingContact() {
  return (
    <div className="fixed bottom-34 right-6 flex flex-col gap-3 z-50">
      {/* CALL BUTTON */}
      <a
        href="tel:+919999999999"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:scale-110 transition transform animate-bounce"
      >
        <i className="fa-solid fa-phone text-xl"></i>
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition transform animate-pulse"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div>
  );
}
