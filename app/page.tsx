import React from "react";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils/fetchCars";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: { searchParams: any }) {
  const allCars = await fetchCars({
    manuFacturer: searchParams.manuFacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>

        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {React.Children.toArray(
              allCars?.map((car) => <CarCard car={car} />)
            )}
          </div>

          <ShowMore
            pageNumber={(searchParams.pageNumber || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars?.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </main>
  );
}

/**
 * 
 * The demand for Next.js 13 applications peaked! Now is the perfect time to build a state-of-the-art modern application that leverages all of the latest and greatest of what Next 13 has to offer, leveraging features such as server-side rendering and the app router.

Alongside building this application, you'll also learn how to:

Use Next.js 13 App Router and Server Side Rendering
Implement Advanced Search Functionality
Create Filtering Capabilities
Optimize Metadata and SEO
Create custom filter, combobox, and modal elements
Maintain a well-organized file and folder structure.
Embrace the principles of writing clean code.
 */
