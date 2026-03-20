

const Home = () => (
  <div
    className="container-fluid text-center py-5"
    style={{
      background: "linear-gradient(135deg, #fce4ec, #e3f2fd, #f3e5f5)",
      borderRadius: "20px",
    }}
  >
    <h1 className="display-4 fw-bold mb-3">
      Hi, I’m Prachi Sharma
    </h1>
    <p className="fs-5 text-secondary mb-4">
      Technical Product Consultant | Adobe Audience Manager
    </p>

    <div className="d-flex justify-content-center gap-3">
      <button id="personalization-btn" className="btn btn-primary btn-lg rounded-3">Personalization</button>
    
    </div>
  </div>
);

export default Home