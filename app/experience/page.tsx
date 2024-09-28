function getYearsAndMonths(
  startDate: string | number | Date,
  endDate = new Date()
) {
  const start = new Date(startDate); // Convert start date string to Date object
  const end = new Date(endDate); // Use current date if no end date is provided

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // Adjust if the end month is less than the start month
  if (months < 0) {
    years--;
    months += 12;
  }

  // Calculate total years in decimal (years + months as fraction of year)
  const totalYears = years + months / 12;

  // Return the result rounded to 1 decimal place
  return `${totalYears.toFixed(1)} years`;
}

const ExperiencePage = () => {
    return (
      <div className="flex flex-col gap-[48px] justify-between w-[1040px] py-[100px] ">
        <div className="text-4xl font-bold">Experience</div>
  
        {/* Triveous Experience */}
        <div className="">
          <div className="flex justify-between">
            <div className="text-lg font-semibold text-gray-800 uppercase tracking-wide">Triveous</div>
            <div className="">Software Development Engineer 1</div>
          </div>
          <div className="">
            <div className="">{getYearsAndMonths("3 July 2023")}</div>
            <div className=""></div>
          </div>
        </div>
  
        {/* Rejolut Technologies Experience */}
      <div className="">
        <div className="flex justify-between">
          <div className="text-lg font-semibold text-gray-800 uppercase tracking-wide">Rejolut Technologies</div>
          <div className="">Software Developer</div>
        </div>
        <div className="">
          {getYearsAndMonths(new Date("12 Sep 2021"), new Date("3 July 2023"))}
        </div>
        <div>
          <p><strong>Roles & Responsibilities:</strong></p>
          <ul className="list-disc list-inside">
            <li>Designed blockchain and web applications.</li>
            <li>Developed APIs and responsive interfaces.</li>
            <li>Led a team of developers, ensuring project deadlines.</li>
          </ul>

          <p className="pt-4"><strong>Key Accomplishments:</strong></p>
          <ul className="list-disc list-inside">
            <li>Foster-Care Management System for the Texas Department, securing a 2-year contract.</li>
            <li>Donations Platform for 5W Foundation, reducing costs and securing funding.</li>
            <li>Incident Management System using Hyperledger Fabric, boosting client acquisition.</li>
          </ul>
        </div>
      </div>

      {/* Amdocs Experience */}
      <div className="">
        <div className="flex justify-between">
          <div className="text-lg font-semibold text-gray-800 uppercase tracking-wide">Amdocs</div>
          <div className="">Software Developer Associate</div>
        </div>
        <div className="">
          {getYearsAndMonths(new Date("22 Sep 2020"), new Date("5 May 2021"))}
        </div>
        <div className="">
          <p><strong>Roles & Responsibilities:</strong></p>
          <ul className="list-disc list-inside">
            <li>Automated regression tests using Node.js.</li>
            <li>Optimized SQL queries for large datasets.</li>
          </ul>

          <p className="pt-4"><strong>Key Accomplishments:</strong></p>
          <ul className="list-disc list-inside">
            <li>Reduced testing time by 50% with automated workflows.</li>
            <li>Built a web app to automate testing, cutting manual work by 90%.</li>
          </ul>
        </div>
      </div>
      </div>
    );
  };
  
  export default ExperiencePage;
