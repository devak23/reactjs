import { initialFacts } from './data';

const FactList = () => {
  return (
    <section>
      <ul className="fact-list">
        {initialFacts.map((f) => {
          return (
            <li key={f.id} className="fact">
              <p>
                {f.text}
                <a className="source" href={f.source} target="_blank">
                  (Source)
                </a>
              </p>
              <span className="tag" style={{ backgroundColor: '#3b82f6' }}>
                {f.category}
              </span>
              <div className="vote-buttons">
                <button>👍 {f.votesInteresting}</button>
                <button>🤯 {f.votesMindblowing}</button>
                <button>⛔️ {f.votesFalse}</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FactList;
