// components/MainPage.jsx
import './MainPage.css';

function MainPage({ page }) {
  return (
    <div className="main-page">
      <h2>Welcome to the {page} Page</h2>
      <p>This is the {page} page of our application.</p>
    </div>
  );
}

export default MainPage;
