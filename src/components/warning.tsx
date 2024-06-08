export default function Warning() {
  return (
    <div className="warn-el border-[10px] border-black bg-white text-center h-[20vh] overflow-hidden">
      <div className="max-w-[1400px] h-full flex justify-center items-center">
        <p className="text-[2.5vw] leading-[1.2] font-bold font-mono">
          WARNING: This product contains nicotine.
          <br />
          Nicotine is an addictive chemical.
        </p>
      </div>
    </div>
  );
}
