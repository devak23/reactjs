const FactForm = () => {
  return (
    <form className="fact-form hidden">
      <input type="text" placeholder="Share a fact with the world" />
      <span>200</span>
      <input type="text" placeholder="your source" />
      <select>
        <option value="">Choose a category</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="society">Society</option>
      </select>
      <button className="btn">Post</button>
    </form>
  );
};

export default FactForm;
