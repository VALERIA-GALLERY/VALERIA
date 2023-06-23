import { BrowserRouter as Router } from 'react-router-dom';
// import { useRouter } from 'next/router';
function MyApp({ Component, pagesProps }) {
    // const router = useRouter();

  return (
    <Router>
      <Component {...pagesProps} />
    </Router>
  );
}

export default MyApp;