import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>FitPlanHub</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        {!user && (
          <>
            <Link to="/signup" style={styles.link}>Signup</Link>
            <Link to="/login" style={styles.link}>Login</Link>
          </>
        )}

        {user && user.role === "trainer" && (
          <Link to="/dashboard" style={styles.link}>
            Trainer Dashboard
          </Link>
        )}

        {user && user.role === "user" && (
          <Link to="/dashboard" style={styles.link}>
            Dashboard
          </Link>
        )}

        {user && (
          <>
            <span style={styles.user}>Hi, {user.name}</span>
            <button onClick={handleLogout} style={styles.logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {


  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#111827",
    color: "#fff"
  },
  logo: {
    margin: 0,
    fontSize: "22px"
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500"
  },
  user: {
    marginLeft: "10px",
    fontStyle: "italic"
  },
  logout: {
    marginLeft: "10px",
    padding: "6px 12px",
    background: "#ef4444",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "6px"
  }
};

export default Navbar;
