import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const events = [
    {
      image: '/event1.jpg',
      title: "📢 We're Hiring: Freelance Experts 🚀🎯",
      description: `Join us for a flexible freelance journey perfect for passionate creators, coders, writers, linguists, and video editors, Teachers (K12), Accountants, Lawyers etc.

📚 Role: Freelance Professionals (Multiple Skill Sets)
💼 Type : Freelance & Work Form Home
💰 Compensation : Pay as per industry standards
📩 Apply here: https://zfrmz.in/qvQhRFIefhbZBhkbkJOK`,
    },
    {
        image: '/event2.jpg',
        title: "📢 We're Hiring: Freelance Experts 🚀🎯",
        description: `HACKATHON ALERT 🚨

⚡ Hackvyuha 2025 is HERE!
Think. Build. Revolutionize.
Get ready for one of the most exciting national-level hackathons of the year!

🏛 Organized by:
Shri B M Patil Foundation for Innovation and Incubation &
BLDEA’s V.P. Dr. P.G. Halakatti College of Engineering & Technology

🧠 Team Size: 2-6 members 
📅 Final Showdown: 17th–18th May 2025
💰 Prize Pool: ₹1,50,000+
🎁 Goodies worth ₹5,000 for Top 50 Teams
💸 Entry Fee: ₹600 per team
📍 Location: Hybrid (Workshops online, showdown in-person)

✨ Why Join?
✅ Tackle real industrial problem statements
✅ Access incubation support and expert mentorship
✅ Gain recognition from industry leaders
✅ Receive certificates of participation
✅ Learn through interactive online workshops

⚙ How It Works:

1. Register your team
2. Join the online workshops
3. Get shortlisted in the Top 50
4. Compete in the final battle on 17–18 May

Register Now: www.hackvyuha.com
Contact: reach@hackvyuha.com

Execution Partners: Innovascape | Kalarava | Hackathon Partners: Hackerearth | Media Partner: TechnoVation`,
      },
    // Add more events here
  ];

  return (
    <div className="newsletter-container">
      <h1>College Events</h1>
      <div className="events">
        {events.map((event, index) => (
          <div key={index} className="event">
            <img src={event.image} alt={event.title} className="event-image" />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsLetter;