import "./index.css";

const skills = [
  { id: 0, name: "HTML+CSS", color: "#2257e6", emoji: "🦾" },
  { id: 1, name: "JavaScript", color: "#e9d221", emoji: "🦾" },
  { id: 2, name: "Web Design", color: "#98ce00", emoji: "🦾" },
  { id: 3, name: "Git and Github", color: "#e5452d", emoji: "👍" },
  { id: 4, name: "React", color: "#53d4f6", emoji: "🦾" },
  { id: 5, name: "Svelte", color: "#e5452d", emoji: "👶" },
];

function App() {
  return (
    <div className="card">
      <Avatar src="jonas.png" name="Jonas" />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.src} alt={props.name} className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList({ skills }) {
  console.log(skills);
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li
          key={skill.id}
          className="skill"
          style={{ backgroundColor: skill.color }}>
          {skill.name} {skill.emoji}
        </li>
      ))}
    </ul>
  );
}

export default App;
