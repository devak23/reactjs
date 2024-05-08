import './style.css';
import CategoryFilter from './CategoryFilter';
import Header from './Header';
import FactForm from './FactForm';
import FactList from './FactList';

const App = () => {
  return (
    <>
      <Header />
      <FactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
};

export default App;
