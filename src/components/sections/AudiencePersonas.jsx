import React from "react";

function FeatureLine({ children }) {
  return (
    <div className="border-b border-slate-200 pb-3">
      <p className="text-[15px] text-slate-700 leading-snug">{children}</p>
    </div>
  );
}

function CategoryCard({
  label,
  labelColor,
  imgSrc,
  imgAlt,
  imageSide = "left",
  points,
  ctaLabel,
  ctaColor,
}) {
  const imageBlock = (
    <div className="w-full md:w-[38%] shrink-0">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-56 md:h-64 object-cover rounded-2xl"
      />
    </div>
  );

  const textBlock = (
    <div className="flex-1 flex flex-col gap-3">
      {points.map((p, i) => (
        <FeatureLine key={i}>{p}</FeatureLine>
      ))}
      <button
        className="mt-2 w-fit text-white text-sm font-semibold px-5 py-2.5 rounded-full"
        style={{ backgroundColor: ctaColor }}
      >
        {ctaLabel}
      </button>
    </div>
  );

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h3
        className="text-center text-lg font-bold mb-6 tracking-tight"
        style={{ color: labelColor }}
      >
        {label}
      </h3>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {imageSide === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}

export default function AudiencePersonas() {
  return (
    <div className="bg-white pt-16">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold text-indigo-950">
        Perfect for
      </h2>

      <CategoryCard
        label="Homeschooling"
        labelColor="#5b3fae"
        imgSrc="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
        imgAlt="Mother homeschooling her child"
        imageSide="left"
        points={[
          "All of your secular curriculum needs in one place, choose online or offline",
          "365 days a year 1:1 homeschooling support",
          "Fully customizable lesson planning to your needs",
          "Organize an entire year of learning with one click",
        ]}
        ctaLabel="Get Started as a Homeschooler"
        ctaColor="#6d3fae"
      />

      <CategoryCard
        label="Supplementary"
        labelColor="#c65a2e"
        imgSrc="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
        imgAlt="Students working together on a supplementary activity"
        imageSide="right"
        points={[
          "Catch up on any subject and grade in one place",
          "Learn on the go, whether you are traveling or sick",
          "Check your child's understanding with quizzes and gap assessments",
          "Go above and beyond with a library of interest-based electives",
        ]}
        ctaLabel="Get Started as a Supplementary"
        ctaColor="#d8452b"
      />

      <CategoryCard
        label="Tutors"
        labelColor="#2e7d6b"
        imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
        imgAlt="Tutor helping a student"
        imageSide="left"
        points={[
          "The one-stop-shop platform for tutoring needs",
          "Assessments and progress tracking",
          "Continued learning between tutoring sessions",
          "Boost parent happiness with clear progress updates and helpful resources for learning at home",
        ]}
        ctaLabel="Get Started as a Tutor"
        ctaColor="#e8a13a"
      />

      <CategoryCard
        label="Teachers"
        labelColor="#2b6b4f"
        imgSrc="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
        imgAlt="Teacher in a classroom with a laptop"
        imageSide="right"
        points={[
          "Tailored and differentiated learning per student",
          "Assessments and progress tracking",
          "Perfect for IEP and ESL students",
          "Increase parent satisfaction with progress transparency and at-home resources",
        ]}
        ctaLabel="Get Started as a Teacher"
        ctaColor="#3c9d6b"
      />

      <CategoryCard
        label="Institutions"
        labelColor="#3350a1"
        imgSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
        imgAlt="School building exterior"
        imageSide="left"
        points={[
          "Unlock school wide SEL and academic analytics by grade, subject, and class",
          "Supporting teachers with access to supplementary interest-based curriculum",
          "Help students catch up or get ahead with tailored and differentiated lesson plans",
          "Reach more students where they are by combining offline and online learning",
        ]}
        ctaLabel="Get Started as an Institution"
        ctaColor="#3a5fc0"
      />
    </div>
  );
}
