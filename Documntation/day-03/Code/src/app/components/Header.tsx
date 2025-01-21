
'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';
import { IoIosContact } from 'react-icons/io';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

interface Category {
  name: string;
  slug: string;
}

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]); // To store categories
  const [searchTerm, setSearchTerm] = useState(''); // To handle the search input

  // Fetch categories from Sanity
  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"]{name, "slug": slug.current}`;
      const categoryData = await client.fetch(query);
      setCategories(categoryData);
    };

    fetchCategories();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Redirect to a dynamic category page if the searched term matches a category
      const matchedCategory = categories.find((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matchedCategory) {
        window.location.href = `/category/${matchedCategory.slug}`;
      } else {
        alert('Category not found');
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      {/* Top Header */}
      <div className="h-[68px] w-screen flex justify-between items-center px-4 md:px-8">
        <h1 className="text-2xl font-bold">Avion</h1>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-[500px] mx-auto relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress} // Listen for Enter key press
            placeholder="Search categories..."
            className="border border-gray-300 px-4 py-2 pl-10 rounded-md w-full focus:outline-none"
          />
          <AiOutlineSearch
            onClick={handleSearch}
            className="absolute left-3 text-gray-500 cursor-pointer"
            size={20}
          />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <BiCart className="text-xl cursor-pointer" />
          </Link>
          <IoIosContact className="text-xl cursor-pointer" />
        </div>
      </div>

      <hr className="w-[90%] mx-auto" />

      {/* Categories Menu */}
      <div className="h-[68px] w-screen hidden md:block">
        <ul className="h-full flex justify-center items-center gap-5 text-[#726E8D]">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link href={`/category/${category.slug}`}>
                <p className="hover:text-black cursor-pointer">{category.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
