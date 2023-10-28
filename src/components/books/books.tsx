/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const books = [
  {
    id: 1,
    title: "Clean Code",
    href: "https://www.amazon.es/-/pt/dp/0132350882/ref=sr_1_3?keywords=clean+code&qid=1698390547&sr=8-3",
    takeaways: ["DRY", "KISS", "Maningful Naming"],
    imageUrl: "https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg",
    date: "Aug 1, 2008",
    datetime: "2008-08-01",
    category: { title: "Software", href: "#" },
    authors: [
      {
        name: "Robert C. Martin",
        role: "Software Engineer / Author",
        href: "https://twitter.com/unclebobmartin",
        imageUrl: "https://cleancoders.com/images/portraits/robert-martin.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Clean Architecture",
    href: "https://www.amazon.es/-/pt/dp/0134494164/ref=sr_1_1?crid=1DRD9AK7CGM9T&keywords=clean+architecture&qid=1698391072&sprefix=clean+a%2Caps%2C330&sr=8-1",
    takeaways: ["Clean Architecture", "All the different layers", "SOLID"],
    imageUrl: "https://m.media-amazon.com/images/I/61r4tYVsRVL._SL1304_.jpg",
    date: "Sep 17, 2017",
    datetime: "2017-09-17",
    category: { title: "Software", href: "#" },
    authors: [
      {
        name: "Robert C. Martin",
        role: "Software Engineer / Author",
        href: "https://twitter.com/unclebobmartin",
        imageUrl: "https://cleancoders.com/images/portraits/robert-martin.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Head First Design Patterns",
    href: "https://www.amazon.es/-/pt/dp/149207800X/ref=sr_1_1?crid=13YXRI2LCQ986&keywords=head+first+design+patterns&qid=1698391400&sprefix=head+fi%2Caps%2C155&sr=8-1",
    takeaways: ["Different Patterns", "Program to Interfaces not Implementations", "OO Principles"],
    imageUrl: "https://m.media-amazon.com/images/I/91quawUTiVL._SL1500_.jpg",
    date: "Dec 31, 2020",
    datetime: "2020-12-31",
    category: { title: "Software", href: "#" },
    authors: [
      {
        name: "Eric Freeman",
        role: "Computer Scientist / Author",
        href: "https://twitter.com/erictfree",
        imageUrl: "https://pbs.twimg.com/profile_images/1093655603631673344/bGbOX_Ph_400x400.jpg",
      },
      {
        name: "Elisabeth Robson",
        role: "Software Developer / Author",
        href: "https://twitter.com/elisabethrobson",
        imageUrl: "https://pbs.twimg.com/profile_images/1093585383722373121/oXBA4aXE_400x400.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Tao of React",
    href: "https://www.taoofreact.com/",
    takeaways: ["Application Structure", "Component Structure", "Logic Abstraction"],
    imageUrl: "https://www.taoofreact.com/cover-react.png",
    date: "Jun 11, 2022",
    datetime: "2022-06-11",
    category: { title: "Software", href: "#" },
    authors: [
      {
        name: "Alex Kondov",
        role: "Software Engineer / Author",
        href: "https://twitter.com/alexanderkondov",
        imageUrl: "https://pbs.twimg.com/profile_images/1292733183495200770/WtoPW4IA_400x400.jpg",
      },
    ],
  },
];

const Books: React.FC = () => {
  const { t } = useTranslation("books");

  return (
    <section id="books">
      <div className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-10">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-white text-3xl text-center font-black tracking-[.25em] uppercase  sm:text-4xl">
              {t("books")}
            </h2>
          </div>
          <div className="py-12 grid grid-cols-1 gap-x-4 gap-y-20 sm:py-24 md:grid-cols-2">
            {books.map((book) => (
              <article
                key={book.id}
                className="bg-white px-4 py-8 flex flex-col lg:flex-row sm:gap-8 rounded border border-gray-600"
              >
                <div className="flex items-center justify-center">
                  <img src={book.imageUrl} alt={book.title} className="w-[220px] h-[280px] object-cover" />
                </div>
                <div className="w-full px-4 lg:w-1/2 lg:px-0">
                  <h1 className="text-gray-800 text-lg uppercase font-bold">{book.title}</h1>
                  <div className="flex flex-col gap-4">
                    {book.authors.map((author) => (
                      <div key={author.name} className=" flex items-center gap-x-4">
                        <img src={author.imageUrl} alt="" className="h-6 w-6 rounded-full bg-gray-50" />
                        <div className="text-xs leading-2">
                          <p className="font-semibold text-gray-600">
                            <a href={author.href}>{author.name}</a>
                          </p>
                          <p className="text-gray-600">{author.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full mt-2 border border-gray-200" />

                  <h4 className="mt-6 text-gray-500 text-xs font-bold uppercase">{t("keyTakeaways")}</h4>
                  <ul className="mt-2 ml-2 flex flex-col gap-2">
                    {book.takeaways.map((take) => (
                      <li key={take}>
                        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                          <svg className="h-1.5 w-1.5 fill-gray-400" viewBox="0 0 6 6" aria-hidden="true">
                            <circle cx={3} cy={3} r={3} />
                          </svg>
                          {take}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
