import { Sections } from "./Sections.interface";

export function AboutSection({ heading, id }: Sections) {
  return (
    <section className="about-section-wrapper section">
      <h2 id={id}>{heading}</h2>

      <div className="about-me-section">
        <p>
          I started my journey into IT in 2019, first by delving into the world
          of data science and data analysis by doing various courses through{" "}
          <a
            href="https://app.datacamp.com/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            DataCamp
          </a>
          . During my transition period when moving to Finland, I was a
          freelance copywriter and SEO specialist, and while I enjoy copywriting
          - it was not something that kept my brain busy enough. With the Global
          Pandemic (tm) going on, I had little to do, and started looking into
          web development. My first course was done via{" "}
          <a
            href="https://www.udemy.com/"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            Udemy
          </a>
          , and I thoroughly enjoyed the entire bootcamp. I enjoyed coding, the
          design elements and fact that there is always more to learn. After
          completing the bootcamp, I applied to and Haaga-Helia Polytechnic
          University and began my studies in Information Technology the next
          spring.
        </p>
        <p>
          While at Haaga-Helia, I realised that my main passion is UI/UX
          development. While I also enjoy UI/UX design, coding is still a
          passion of mine, and I want to keep coding and learning.
        </p>
        <p>
          During my first internship at MegaVentory, I further realised that I
          just naturally inclined towards frontend development, and most
          especially UI/UX development. The 3 months at MegaVentory involved a
          lot of challenges, from working overseas for a month, to working with
          the team remotely from Finland. However, I worked hard, and within
          these few months had learnt ASP.NET (which I had never worked in
          before), redid the entire documentation for the web application and
          redone the entire frontend to be responsive. I definitely learnt a
          lot, particularly when it comes to making large pull requests that
          take over the entire application - AKA don't do it!
        </p>
        <p>
          I was lucky enough to get a part-time job straight after my internship
          with a Finnish company, based in Porvoo. My main duties in the first
          year of work included redoing the intranet to be easier to use and
          find information (as well as adding a ton of information), creating
          custom documents for clients (often on a tight time schedule) and my
          biggest project, redoing the entire HubSpot website. This included
          learning how to code in a CMS, as well as the HubSpot development
          suite. After 6 months, I took on more responsibilities in the
          codebase, starting to implement new features, particularly by making
          them more user friendly and accessible. I also worked in conjunction
          with the designer, and was often helping her either implement designs,
          or change current designs that were not feasible codewise. By the end
          of the year, I was working full time while completing my degree, and
          was helping to integrate any new members into the team.
        </p>
        <p>
          Once I had graduated, I was offered the Scrum Master role at Hailer,
          which I happily accepted and have been working in every since. As
          Scrum Master, I have implemented new processes, updated old ones and
          in general tried my best to make the working life for my coworkers as
          easy as possible. I have also been working on updating the frontend to
          be accessible to WCAG guidelines, fixing numerous frontend bugs and
          updating the web application to be responsive and easy to customers to
          use. One of my main projects is updating the error handling, where we
          ensure that users are always aware of what errors are actually
          occurring, and what they can do to solve them.
        </p>
        <p>
          Around the office I am well known for my chatter, laugh and being
          happy to learn and engage in any new features or topics. I make sure I
          am available to all coworkers, and the Projects and Sales teams have
          often leaned on me for help regarding code, fixes or other programming
          questions.
        </p>
        <p>
          My favourite pastime is to go hiking in the glorious Finnish nature
          with my partner and our dogs. Summer and autumn are my favourite
          seasons, and I adore hiking in the autumn. I am also a voracious
          reader, and if am not outside doing outdoorsy things - I am probably
          knee deep in books.
        </p>
      </div>
    </section>
  );
}
