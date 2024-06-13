interface SubscribeUsProps {
  lng: string;
}

export default function SubscribeUs({ lng }: SubscribeUsProps) {
  return (
    <section className="flex justify-center items-start bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex flex-col justify-center items-center gap-3 text-white py-20">
        <h2 className="text-[44px] font-medium font-sans">NEWSLETTER</h2>
        <p className="text-[22px] mb-5 font-sans">
          Receive first access to the latest ELFBAR products, inspiration, and
          services.
        </p>
        <form action="">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-gray-300 rounded-lg p-2 text-black"
          />
          <button className="bg-black text-white rounded-lg p-2">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
