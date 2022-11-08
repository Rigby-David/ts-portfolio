import '../App.css';

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page-img">
        <img src="placeholder-cat.jpg" alt="headshot" />
      </div>
      <div className="home-page-container">
        <div className="home-page-text">
          <p>Hello there. I&apos;m David.</p>
        </div>
        <div className="home-page-tech-stack">
          <p>Tech Stack</p>
        </div>
      </div>
    </div>
  );
}
