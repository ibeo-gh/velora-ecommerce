const AnnouncementBar = () => {
  const messages = [
    "Free shipping on all orders",
    "up to 20% off selected hoodies",
    "New arrivals just dropped",
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white text-sm py-3 overflow-hidden z-50">
      <div className="whitespace-nowrap animate-marquee flex items-center gap-16">
        {[...messages, ...messages, ...messages].map((msg, index) => (
          <span key={index} className="tracking-wide">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
