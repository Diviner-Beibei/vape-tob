export default function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded mt-24">
      <div className="flex flex-col justify-center items-center gap-5 text-white py-10 ">
        <h3 className="text-2xl font-medium">Join Us</h3>
        <p className="text-base mb-5 break-words px-6 text-center">
          We send secret deals to our subscriber. Would like to be one of them?
        </p>
        <form action="" className="flex flex-col gap-3 w-full px-10">
          <input
            type="email"
            placeholder="Your email"
            className="border-2 border-gray-300 rounded p-2 text-black"
          />
          <button className="bg-black text-white rounded p-3">Subscribe</button>
        </form>
        <p>100% free, Unsubscribe any time!</p>
      </div>
    </div>
  );
}
