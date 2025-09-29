import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  const router = useRouter();
  const { setSearch } = useAppContext();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
    router.push("/collection");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-10 pl-3 hidden lg:flex items-center text-sm border border-gray-300 rounded-full overflow-hidden"
    >
      <input
        type="search"
        placeholder="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-2 w-full h-full outline-none text-black placeholder-gray-400"
      />
      <button
        type="submit"
        className="h-full px-4 flex items-center justify-center text-white bg-primary/90 hover:bg-orange-600 cursor-pointer"
      >
        <LuSearch className="text-lg" />
      </button>
    </form>
  );
};

export default Search;
