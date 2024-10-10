import Link from "next/link";

const TicketingSolution = () => {
  return (
    <section className="ticket-solution-section ">
      <div className="container-xl">
        <div className="ticket-content">
          <div className="title-ticket-solution">
            Simplified Ticketing Solutions at Your Fingertips
          </div>

          <div className="btn-container ">
            <Link href="/contact">
              <button className="btn btn-started " type="submit">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketingSolution;
