import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="mx-[59px] h-[91px] px-[136px] text-white flex justify-between items-center gap-x-20">
        <h3 className="text-2xl font-bold">BrandName</h3>

        <div className="grow flex items-center justify-between">
          <ul className="flex items-center gap-x-5 font-bold text-sm">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>

          <div className="flex items-center gap-x-11">
            <Link href="#" className="text-sm font-bold">Login</Link>
            <button className="py-4 px-6 bg-[#23A6F0] rounded font-bold">JOIN US</button>
          </div>

        </div>
      </nav>


      <main className="w-[1024px] py-20 space-y-20 mx-auto">
        <section className="w-[699px] py-10  space-y-10 text-center mx-auto">
          <h5 className="font-bold text-[#23A6F0] ">Welcome</h5>
          <h1 className="text-6xl leading-[80px] font-bold text-white">Selling on the internet like a pro</h1>
          <h4 className="text-white text-xl">We know how large objects will act, but things on a small scale just do not act that way.</h4>

          <div className="space-x-2.5">
            <button className="text-white bg-[#23A6F0] py-[15px] px-10 rounded " >Get Quote Now</button>
            <button className="text-[#23A6F0] font-bold py-[15px] px-10 border border-[#23A6F0] rounded">Learn More</button>
          </div>
        </section>


        <section className="grid grid-cols-3 gap-x-7">

          <div className="bg-white py-9 px-10 space-y-5" style={{ boxShadow: "0 13px 19px #00000012" }}>
            <div className="bg-[#FFDCD1] w-[70px] h-[76px] rounded-[10px]" />
            <h3 className="font-bold">training Courses</h3>
            <div className="bg-[#E74040] w-12 h-[2px]" />
            <p className="text-[#737373] w-[222px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>

          <div className="bg-white py-9 px-10 space-y-5" style={{ boxShadow: "0 13px 19px #00000012" }}>
            <div className="bg-[#B9EAA8] w-[70px] h-[76px] rounded-[10px]" />
            <h3 className="font-bold">2,769 online courses</h3>
            <div className="bg-[#E74040] w-12 h-[2px]" />
            <p className="text-[#737373] w-[222px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>

          <div className="bg-[#23A6F0] py-9 px-10 space-y-5" style={{ boxShadow: "0 13px 19px #00000012" }}>
            <div className="bg-[#FFFFFF] w-[70px] h-[76px] rounded-[10px]" />
            <h3 className="text-[#FFFFFF] font-bold">training Courses</h3>
            <div className="bg-[#FFFFFF] w-12 h-[2px]" />
            <p className="text-[#FFFFFF] w-[222px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>


        </section>
      </main>




    </>
  );
}
