export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: string
  tags: string[]
  category: string
  featured?: boolean
  author?: string
}

export const featuredPosts: Post[] = [
  {
    slug: "four-verticals-of-a-football-midfield",
    title: "Four Verticals of a Football Midfield",
    excerpt: "Breaking down spatial dynamics and decision-making patterns across modern midfield structures.",
    content: `## Shape and Space

A midfield is a living organism. The spacing between lanes is the interface.

\`\`\`js
const lanes = ['left', 'half-left', 'half-right', 'right']
lanes.forEach(l => console.log(l))
\`\`\`

- Occupy space
- Create overloads
- Rotate intelligently`,
    date: "2025-08-21",
    readingTime: "8 min read",
    tags: ["Football"],
    category: "football",
    author: "Quantum",
  },
  {
    slug: "quantum-notes-entanglement-and-information",
    title: "Quantum Notes: Entanglement and Information",
    excerpt: "An intuitive sketch of how entanglement constrains information and what that means for computation.",
    content: `## Entanglement Intuition

Bell pairs are correlations without classical analogs.

\`\`\`python
def measure(q1, q2):
    return ('+', '-')  # toy example
\`\`\`

- No signaling
- Strong correlations
- Computational implications`,
    date: "2025-08-10",
    readingTime: "7 min read",
    tags: ["Physics"],
    category: "random",
    author: "Quantum",
  },
]

// Add sample posts for other categories
export const posts: Post[] = [
  {
    slug: "sde-intern-blockstash",
    title: "SDE Intern, Blockstash",
    excerpt: "My journey through the Blockstash SDE intern interview process - from application to offer acceptance.",
    content: `## The Application Process and some Context
So, it was another random summer night of me scrolling through my Twitter feed, when I realized that my friend had sent me a link to an internship opportunity. I had already applied to countless internship opportunities throughout the summer and faced rejections in all of them. I said to myself, "Another application, another rejection", but still thought, "atleast pad to lo kahan pe hai". I discovered that it was a Software Internship at a startup from IIT Kanpur. I always wanted to join IIT Kanpur during my JEE Preparation days, but I guess couldn't prepare for it that much. I don't know why I thought, "is this my chance?". I again updated my Resume according to the role like updating relevant projects, skills, etc according to prerequisites. And then I applied. I got a reply in just 3 days, about getting shortlisted for Round 1.
## Technical Assessment
The first round comprised of an assignment where we had to scrape the website: Chainabuse - View Reports.
We had to scrape the website to get relevant information about threats detected on malicious crypto reports like Name, type of threat, Cryptocurrency, timestamp of threat, hash, etc., and display that data in the form of a JSON.
I had zero knowledge about web scraping, so read a few articles here and there on GeeksforGeeks about Beautiful Soup in Python, Cheerio in JavaScript, etc. Tried to implement some of them but couldn't really get great results. I was also out of practice in writing Python code for quite some time, so I wanted to stick to JavaScript.
Then I took some help from one of my very good friends (who had experience in Scraping Websites) about selecting a library. He suggested I use Puppeteer.
Thus, I started going through documentation and walkthrough videos. It took me about two days to write the code for the implementation required as I was also out of practice with pure JavaScript(trust me building websites and knowing JS are not the same). Cleaned my code, and added proper comments. Although, some optional data was also required to be scraped since the last date was approaching, I decided to submit it.

### Tips
Have good practice with asynchronous JavaScript. Try to complete the optional stuff required in your application or assignment.

Luckily, after 1 week I got a mail and a call for getting shortlisted for the next round which was an online Interview.
## Technical Interview
The interviewers asked me introduce myself, which I confidently did.
They then asked my tech stack, I replied that I primarily am a Frontend Developer, but I've also recently built some projects on Full Stack Development too. They asked the databases I use, I replied MongoDB and Postgres. They then asked me about the framework I use for frontend development, I said React.
The instant counter-question was why React? Luckily I had recently watched a video of the JSConf 2013 when React was introduced to the world. So, the words of Jordan Walke were echoing in my head at that time. I said using plain Javascript requires us to write a lot of code targetting the HTML elements, manipulating the DOM to render, etc. React provides an architecture to manipulate HTML inside our Javascript code. Also, React helps to segregate the entire UI into various components thus all the Javascript code can be seperated into various files for various components, thus making an easier environment to code for the developer.
Then they asked me to show my projects. I showed my Pic-Trigger Project which is a full stack application which uses OpenAI API to display images generated by AI based on prompts. Though my communication skills are not that good but my presentation of my project was pretty great. I was able to answer all the counter questions. The interviewers seemed to be quite impressed with my project.
Then, they asked me to show some other project. And that was the death knell as the login feature somehow broke in it. I went completely blank at that point. I couldn't answer series of questions that followed like how do I ensure if a user has logged in then the url which is displayed at that point is authorised for that system only. I was blank and couldn't answer it. I panicked a lot. I was asked about Context API to which I said something like prop drilling but couldn't explain the term. The last question was about JWT. I couldn't recall about it at that time as I panicked again.
At the end I did asked the interviewers about what could I improve to which they said that learn in depth about React. Thus, the very first opportunity in front of me seemed to go away.
But luckily(again XD), I got a call from the recruiters to visit IIT Kanpur the following day. 

## The Offer
After talking briefly about my availability and stipend negotiations, I finally landed my first internship. I also got the flexibility to work both remote/onsite.

## Key Takeaways
Always ensure that all your projects are working properly before uploading them on your CV or before your interviews. Don't panic if at some point you mess up during the interview. We are humans and are bound to do mistakes. Lastly having good friends and connections helps. You never know when you'll need them.

## Conclusion
So, that was the story of me landing my internship at BlockStash Intelligence. It was really a rollercoaster ride.
If you had the patience to read through all this, then go create a story about your own, "Jao kaam karo jaake".`,
    date: "2025-08-30",
    readingTime: "8 min read",
    tags: ["Interview", "Full Stack", "SDE", "Internship", "Blockstash"],
    category: "interview-experiences",
    author: "Akshat",
  },
  {
    slug: "full-stack-intern-stir",
    title: "Full Stack Intern, Stir",
    excerpt: "A rejection story from my internship interview at Stir.",
    content: `## The Process and some Backstory
    I applied to Stir on Internshala (where it appeared under the name Barsaati Films) for Full Stack Developer Intern Profile. That is something I totally remember. In the previous summer I was the first one in my entire college to get an internship, but this time the tables had turned. Few of my friends and batchmates had secured good internships at startups and organizations and this time I was left with nothing when I came home in the summer break. I literally started to apply to everyposition possible as in my mind it was clear that without another internship getting a good full time opportunity would be difficult, especially being from a tier 3 college. (More on this summer break in some future post)

## Round 1 - An Assignment
I got a web scraping assignment based on Selenium which involved scraping Twitter to find out five trending topics on the platform. I got the assignment done after going through a bit of documentation on Selenium and submitted it within 3-4 days of receiving it.

## Round 2 - Technical Interview
I heard back from the founder for the technical interview one week after submitting the assignment. I appeared for the interview all nervous as it was almost an year since I had appeared for an interview. Though I relaxed myself and sat calmly. The interview started with a brief introduction with the founder, the technologies I am working at, the things he is working at and trying to build with this venture. Then we proceeded with working demos of my full stack applications and random cross questioning.
And then came the tough part. He asked me about my Internship experience at Blockstash. I told him everything about how I worked, the technologies I worked on, the goal of the company and all. But he asked me everything with such a focus on product and business perspective and outcome of my work that I started to doubt myself, whether I had even interned there or not (Trust me when I say that). He later told me that he is building the product from scratch so he requires developers who can own the product end to end and have already built a product with such a business clarity and customer expectations that they know what the user wants and everything. I still answered with everything I could and he said to me that he'll reach out to me if he finds my performance better than other candidates.

## Verdict
After three days of the interview waiting for a follow up with the patience of a saint, I got the message that I was rejected. This kind of hurt me at that time due to the situations I described above. Though the end of the rejection message was kind of a light of hope in the shadows, "Given that you were the top 12 out of 1800 candidates, I&apos;m sure you have a bright future ahead of yourself! Best of luck!", but at that time I did think that this is just a message out of formality.

## Learnings
I did learn a lot that I should not do development and projects for just the sake of it and actually study why everything works and that I should know my experiences end to end with the focus on what value I added to the product and to the customers. 
And with that I'll end this post, hope you liked reading it!`,
    date: "2025-08-15",
    readingTime: "6 min read",
    tags: ["Interview", "Stir", "Rejection"],
    category: "interview-experiences",
    author: "Akshat",
  },
  {
    slug: "backend-developer-intern-graviti",
    title: "Backend Developer Intern, Graviti",
    excerpt: "An acceptance which acted as a payoff to the month of June.",
    content: `## The Application Process and some Context
    I applied to Graviti on Cuvette for both Backend Developer and Frontend Developer Intern Profile. This was one of those applications which appeared on Cuvette and you apply because the platform has such an easy single click application process. As I said in the previous post, Internship hunting was a top priority this summer for me and though I was preparing for DSA by practising 3-4 DSA questions daily, I was applying to all sorts of development internship positions multiple times in a day.
## Round 1 - Get to Know Call
I got a Calendly link on Cuvette to schedule the interview with the co-founder. The interview went pretty good, it was a normal get to know call, with a slightly tricky question of answering the angle between the minute hand and hour hand of the clock and coding for the same. This was a little out of the box for me as I had not seen such math questions for a while but after thinking for a while I was able to answer and code for the same accurately. 

## Round 2 - Technical Assignment
Now when I look at hindsight it was a strange selection process as this was the first time I got the assignment for any application after an interview round. The assignment was on building an application which applied Google Maps API and returned the closest distance between two places with or without stops between the source and destination with a UI given on Figma. There weren't many example applications which applied Google Maps API on React so that served as a kind of challenge at the beginning but when persisting on it for 2-3 days, I was able to make it and submit in time.

## Round 3 - Technical Interview
After a week of the assignment, I got another Calendly link on Cuvette to schedule the technincal round. The interview started with me introducing about myself, and though I expected the normal flow to go like me being asked to show working demos of my projects, it was to my surprise that one of the many interviewers started asking frontend questions, specifically about Javascript and React. I answered the React questions like I was Jorde Walke himself(XD). They were standard questions like how React works, what are hooks, what is the useEffect hook, what is virtual DOM etc. I answered them all and the interviewer was satisfied but then when a practical question was asked, to call an API and display the data on the UI, which I had done everything correctly barring wrapping the API response in a state variable which lead it to being not render correctly. This got me into panic but then the Backend person started asking questions.
He asked me about promises in Javascript, about async nature, about Node and Express, different design patterns. Difference between MVC and MVVC. He also asked me to implement a promise class which logged something on screen which I faltered doing. At the end, the founder asked me to provide a brief database design of instagram, which I boiled down to profile and posts features only and all the tables associated with it. 

## Verdict
That was one hell of an interview, tbh and I did not expect to get selected. But fortunately I got the call from the founder for the offer and I got accepted for the Backend Developer Internship.

## Learnings
If the previous interview process taught me to look into software engineering with a lens of a Product enthusiast this one made sure that I am grounded with my technical abilities and looked into Machine Coding Round and System Design problems more frequently.`,
    date: "2025-09-07",
    readingTime: "10 min read",
    tags: ["Interview", "Graviti", "Backend"],
    category: "interview-experiences",
    author: "Akshat",
  },
  {
    slug: "finding-balance-in-chaos",
    title: "Finding Balance in Chaos",
    excerpt: "Personal reflections on maintaining equilibrium in turbulent times.",
    content: `## The Storm Within

Life has a way of testing our resilience. Here's how I've learned to find calm in the chaos.

## Strategies That Work

- Establish daily routines
- Practice mindfulness and meditation
- Build a supportive community
- Accept that not everything is in your control

## The Journey

Finding balance is a continuous process, not a destination.`,
    date: "2025-07-28",
    readingTime: "4 min read",
    tags: ["Life", "Mindfulness", "Personal Growth"],
    category: "life",
    author: "Quantum",
  },
  {
    slug: "react-hooks-deep-dive",
    title: "React Hooks: A Deep Dive",
    excerpt: "Understanding the internals of React hooks and how to use them effectively.",
    content: `## Understanding Hooks

React hooks are more than just functions. They're a way to share stateful logic between components.

## Custom Hooks

\`\`\`tsx
function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## Best Practices

- Always call hooks at the top level
- Don't call hooks inside loops, conditions, or nested functions
- Use the dependency array correctly`,
    date: "2025-07-20",
    readingTime: "12 min read",
    tags: ["React", "JavaScript", "Frontend"],
    category: "code",
    author: "Quantum",
  },
  {
    slug: "tactical-analysis-man-city",
    title: "Tactical Analysis: Manchester City's Evolution",
    excerpt: "How Pep Guardiola has transformed City's playing style over the years.",
    content: `## The Guardiola Philosophy

Pep's approach is about control through possession and intelligent movement.

## Key Tactical Changes

- Inverted full-backs
- False nine system
- High defensive line
- Pressing triggers

## Player Roles

Each player has multiple responsibilities, creating a fluid system that's hard to defend against.`,
    date: "2025-07-15",
    readingTime: "8 min read",
    tags: ["Football", "Tactics", "Manchester City"],
    category: "football",
    author: "Quantum",
  },
  {
    slug: "quantum-computing-future",
    title: "The Future of Quantum Computing",
    excerpt: "Exploring what's next in the quantum computing landscape.",
    content: `## Current State

Quantum computing is still in its infancy, but progress is accelerating.

## Challenges Ahead

- Error correction
- Scalability
- Algorithm development
- Hardware limitations

## Potential Applications

- Cryptography
- Drug discovery
- Optimization problems
- Machine learning

The future is quantum, but we're not there yet.`,
    date: "2025-07-10",
    readingTime: "6 min read",
    tags: ["Quantum Computing", "Technology", "Future"],
    category: "random",
    author: "Quantum",
  },
]

// Combine all posts
export const allPosts = [...featuredPosts, ...posts]

// Get posts by category
export function getPostsByCategory(category: string): Post[] {
  return allPosts.filter(post => post.category === category)
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = allPosts.map(post => post.category)
  return [...new Set(categories)]
}

// Get category display names
export const categoryNames: Record<string, string> = {
  "code": "Code & Technology",
  "football": "Football & Sports",
  "interview-experiences": "Interview Experiences",
  "music": "Music & Arts",
  "life": "Life & Philosophy",
  "random": "Random Thoughts"
}
