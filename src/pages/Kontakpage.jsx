const Kontakpage = () => {
  return (
    <div className="kontak py-40">
      <div className="container mx-auto px-2">
        <h1 className="text-center text-6xl/tight font-semibold mb-4">
          Hubungi Kami
        </h1>
        <p className="text-center md:text-base/loose text-sm/loose">
          Bila ada pertanyaan terkait event silahkan menghubungi kami.
        </p>

        <form
          action="https://formsubmit.co/msholihuddinrizky06@gmail.com"
          method="post"
          className="flex flex-col sm:w-[600px] mx-auto mt10 gap-2 bg-stone-950 p-2 rounded-2xl w-full"
        >
          <input
            type="text"
            name="email"
            placeholder="Email..."
            className="p-3 bg-white rounded-lg"
          />
          <input
            type="text"
            name="nama"
            placeholder="Nama..."
            className="p-3 bg-white rounded-lg"
          />
          <textarea
            name="pesan"
            cols="30"
            rows="10"
            placeholder="Pesan..."
            className="p-3 bg-white rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-900 rounded-lg h-12 text-white border border-white cursor-pointer hover:bg-indigo-800 active:bg-indigo-900"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Kontakpage;
